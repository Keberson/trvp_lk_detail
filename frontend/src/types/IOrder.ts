import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: number;
    customer: string;
    order_date: string;
    rows: IOrderRow[];
}

export const emptyOrder = {
    id: 0,
    customer: '',
    order_date: '',
    rows: []
}

