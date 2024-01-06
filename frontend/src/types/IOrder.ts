import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: string;
    customer: string;
    order_date: string;
    rows: IOrderRow[];
}

export const emptyOrder = {
    id: '',
    customer: '',
    order_date: '',
    rows: []
}

