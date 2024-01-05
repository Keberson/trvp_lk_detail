import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: string;
    customer: string;
    order_date: Date;
    rows: IOrderRow[];
}
