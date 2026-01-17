export enum Category {
    grocery = "Бакалея",
    med = "Здоровье",
    cashback = "Кэшбек",
    salary = "Зарплата",
    transfer = 'Перевод'
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
    card: string;
}

export const historyMock: Array<IHistoryMock> = [
    {
        title: "Магазин",
        category: Category.grocery,
        type: HistoryItemType.EXPENSE,
        sum: 1299,
        card: "4821"
    },
    {
        title: "Аптека",
        category: Category.med,
        type: HistoryItemType.EXPENSE,
        sum: 1000,
        card: "5181"
    },
    {
        title: "Кэшбек",
        category: Category.cashback,
        type: HistoryItemType.INCOME,
        sum: 1299,
        card: "5181"
    },
    {
        title: "Зачисление зарплаты",
        category: Category.salary,
        type: HistoryItemType.INCOME,
        sum: 150000,
        card: "4821"
    },

]