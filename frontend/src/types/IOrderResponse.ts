import { IOrderRow } from "./IOrderRow";

export interface IOrderResponse {
    id: string;
    customer: string;
    order_date: string;
    rows: IOrderRow[];
}
