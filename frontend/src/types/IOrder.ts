import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: string;
    customer: string;
    orderDate: Date;
    rows: IOrderRow[];
}
