// src/services/database.ts
import {openDatabaseAsync, openDatabaseSync, SQLiteDatabase} from "expo-sqlite";
import {Category, HistoryItemType, historyMock, IHistoryMock} from "../mockData/history";

// const db = SQLite.openDatabaseSync("local.db");

const DB_NAME = "local.db";
const CARDS_TABLE = "cards";
const HISTORY_TABLE = "history_items";

let dbInitPromise: SQLiteDatabase | null = null;

const getDatabase = (): SQLiteDatabase => {
    if (!dbInitPromise) {
        dbInitPromise = openDatabaseSync(DB_NAME)

        dbInitPromise.execSync("PRAGMA foreign_keys = ON;");
        dbInitPromise.execSync(`
            CREATE TABLE IF NOT EXISTS ${CARDS_TABLE} (
                masked_number TEXT PRIMARY KEY,
                label TEXT NOT NULL,
                currency TEXT NOT NULL DEFAULT '₽'
            );
        `);
        dbInitPromise.execSync(`
            CREATE TABLE IF NOT EXISTS ${HISTORY_TABLE} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                subtitle TEXT,
                category TEXT NOT NULL,
                type TEXT NOT NULL,
                sum INTEGER NOT NULL,
                card_masked_number TEXT NOT NULL,
                FOREIGN KEY (card_masked_number) REFERENCES ${CARDS_TABLE}(masked_number) ON DELETE CASCADE
            );
        `);

        seedHistoryMock();
    }
    return dbInitPromise;
};

export const initDatabase = () => getDatabase();

export type CardRow = {
    label: string;
    masked_number: string;
    currency?: string;
};

export type HistoryRow = IHistoryMock & { subtitle?: string; card_masked_number: string };

export const insertCard = (card: CardRow) => {
    const db = getDatabase();
    db.runSync(
        `INSERT INTO ${CARDS_TABLE} (masked_number, label, currency) VALUES (?, ?, ?)
     ON CONFLICT(masked_number) DO UPDATE SET label = excluded.label, currency = excluded.currency;`,
        [card.masked_number, card.label, card.currency]
    );
};

export type CardRowWithSum = CardRow & {
    income_sum: number;
    expense_sum: number;
    net_sum: number;
}

export const fetchCards = (): CardRowWithSum[] => {
    const db = getDatabase();
    // const cards = db.getAllSync<CardRow>(`SELECT * FROM ${CARDS_TABLE} ORDER BY label;`);
    // const history = fetchHistory();

    const cards = db.getAllSync<CardRowWithSum>(`
        SELECT
            c.masked_number,
            c.label,
            c.currency,
            COALESCE(SUM(CASE WHEN h.type = 'income' THEN h.sum END), 0) AS income_sum,
            COALESCE(SUM(CASE WHEN h.type = 'expense' THEN h.sum END), 0) AS expense_sum,
            COALESCE(SUM(CASE WHEN h.type = 'income' THEN h.sum END), 0)
                - COALESCE(SUM(CASE WHEN h.type = 'expense' THEN h.sum END), 0) AS net_sum
        FROM ${CARDS_TABLE} c
        LEFT JOIN ${HISTORY_TABLE} h ON h.card_masked_number = c.masked_number
        GROUP BY c.masked_number, c.label, c.currency;
    `)

    return cards;
};

export const seedHistoryMock = () => {
    const db = getDatabase();
    insertCard({masked_number: "4821", label: "МИР", currency: "₽"});
    insertCard({masked_number: "5181", label: "MC", currency: "₽"});
    const existing = db.getFirstSync<{ count: number }>(`SELECT COUNT(*) AS count FROM ${HISTORY_TABLE};`);
    if (existing?.count) return;
    db.withTransactionSync(() => {
        for (const item of historyMock) {
            db.runSync(
                `INSERT INTO ${HISTORY_TABLE} (title, subtitle, category, type, sum, card_masked_number)
         VALUES (?, ?, ?, ?, ?, ?);`,
                [item.title, "", item.category, item.type, item.sum, item.card]
            );
        }
    });
};

export const fetchHistory = (): HistoryRow[] => {
    const db = getDatabase();
    return db.getAllSync<HistoryRow>(
        `SELECT title, subtitle, category, type, sum, card_masked_number FROM ${HISTORY_TABLE} ORDER BY id DESC;`
    );
};

export const createTransaction = (pan: string, sum: number) => {
    const db = getDatabase();
    db.runSync(
        `INSERT INTO ${HISTORY_TABLE} (title, category, type, sum, card_masked_number) VALUES (?, ?, ?, ?, ?);`,
                [`Перевод на карту *${pan.slice(-4)}`, Category.transfer, HistoryItemType.EXPENSE, sum, "4821"]
    )
}
