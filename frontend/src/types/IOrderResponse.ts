import { IOrderRow } from "./IOrderRow";

export interface IOrderResponse {
    id: number;
    customer: string;
    order_date: string;
    rows: IOrderRow[];
}
