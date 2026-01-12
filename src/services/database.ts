// src/services/database.ts
import {openDatabaseAsync, openDatabaseSync} from "expo-sqlite";
import {Category, HistoryItemType, historyMock, IHistoryMock} from "../mockData/history";

// const db = SQLite.openDatabaseSync("local.db");

const DB_NAME = "local.db";
const CARDS_TABLE = "cards";
const HISTORY_TABLE = "history_items";

export const createDatabase = () => {
    const db = openDatabaseSync(DB_NAME);
    db.execSync(`
        CREATE TABLE IF NOT EXISTS ${CARDS_TABLE} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            label TEXT NOT NULL,
            masked_number TEXT NOT NULL,
            balance INTEGER NOT NULL,
            currency TEXT NOT NULL DEFAULT '₽'
        );
    `);

    db.execSync(`
        CREATE TABLE IF NOT EXISTS ${HISTORY_TABLE} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            category TEXT NOT NULL,
            type TEXT NOT NULL,
            sum INTEGER NOT NULL
        );
    `);

    return db;
};

export const initDatabase = () => {
    const db = createDatabase();
    db.execSync(`DROP TABLE IF EXISTS ${CARDS_TABLE}`);
    db.execSync(`DROP TABLE IF EXISTS ${HISTORY_TABLE}`);

    addCard({
        label: "МИР",
        balance: 10000,
        masked_number: "4281"
    })
    addCard({
        label: "MC",
        balance: 150000,
        masked_number: "5193"
    })

    seedHistoryMock();
}

export type CardRow = {
    id: number;
    label: string;
    masked_number: string;
    balance: number;
    currency?: string;
};

export const fetchCards = (): CardRow[] => {
    const db = createDatabase();
    return db.getAllSync<CardRow>(
        `SELECT id, label, masked_number, balance, currency FROM ${CARDS_TABLE} ORDER BY id`
    );
};

export const addCard = (card: Omit<CardRow, "id">) => {
    const db = createDatabase();
    db.runSync(
        `INSERT INTO ${CARDS_TABLE} (label, masked_number, balance) VALUES (?, ?, ?);`,
        [card.label, card.masked_number, card.balance]
    );
};

export const seedHistoryMock = () => {
    const db = createDatabase();
    const count = db.getFirstSync<{ count: number }>(
        `SELECT COUNT(*) as count FROM ${HISTORY_TABLE};`
    );
    if (count?.count) return; // already seeded
    db.withTransactionSync(() => {
        for (const entry of historyMock) {
            db.runSync(
                `INSERT INTO ${HISTORY_TABLE} (title, category, type, sum) VALUES (?, ?, ?, ?);`,
                [entry.title, entry.category, entry.type, entry.sum]
            );
        }
    });
};

export const fetchHistory = (): IHistoryMock[] => {
    const db = createDatabase();
    return db.getAllSync<IHistoryMock>(
        `SELECT title, category, type, sum FROM ${HISTORY_TABLE} ORDER BY id DESC;`
    );
};

export const createTransaction = (pan, sum) => {
    const db = createDatabase();
    db.runSync(
        `INSERT INTO ${HISTORY_TABLE} (title, category, type, sum) VALUES (?, ?, ?, ?);`,
                [`Перевод на карту *${pan}`, Category.transfer, HistoryItemType.EXPENSE, sum]
    )
}
