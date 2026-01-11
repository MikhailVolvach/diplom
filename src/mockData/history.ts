export enum Category {
    grocery = "Бакалея",
    med = "Здоровье",
    cashback = "Кэшбек",
    salary = "Зарплата"
}

export enum HistoryItemType {
    INCOME = "income",
    EXPENSE = "expense"
}


export interface IHistoryMock {
    title: string;
    category: Category;
    type: HistoryItemType;
    sum: number;
}

export const historyMock: Array<IHistoryMock> = [
    {
        title: "Магазин",
        category: Category.grocery,
        type: HistoryItemType.EXPENSE,
        sum: 1299
    },
    {
        title: "Аптека",
        category: Category.med,
        type: HistoryItemType.EXPENSE,
        sum: 1000
    },
    {
        title: "Кэшбек",
        category: Category.cashback,
        type: HistoryItemType.INCOME,
        sum: 1299
    },
    {
        title: "Зачисление зарплаты",
        category: Category.salary,
        type: HistoryItemType.INCOME,
        sum: 150000
    },
    {
        title: "Магазин",
        category: Category.grocery,
        type: HistoryItemType.EXPENSE,
        sum: 1299
    },
    {
        title: "Аптека",
        category: Category.med,
        type: HistoryItemType.EXPENSE,
        sum: 1000
    },
    {
        title: "Кэшбек",
        category: Category.cashback,
        type: HistoryItemType.INCOME,
        sum: 1299
    },
    {
        title: "Зачисление зарплаты",
        category: Category.salary,
        type: HistoryItemType.INCOME,
        sum: 150000
    },
    {
        title: "Магазин",
        category: Category.grocery,
        type: HistoryItemType.EXPENSE,
        sum: 1299
    },
    {
        title: "Аптека",
        category: Category.med,
        type: HistoryItemType.EXPENSE,
        sum: 1000
    },
    {
        title: "Кэшбек",
        category: Category.cashback,
        type: HistoryItemType.INCOME,
        sum: 1299
    },
    {
        title: "Зачисление зарплаты",
        category: Category.salary,
        type: HistoryItemType.INCOME,
        sum: 150000
    }
]