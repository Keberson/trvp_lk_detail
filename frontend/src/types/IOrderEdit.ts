import {IOrderRowCreate} from "./IOrderRowCreate";
import {IOrderRowEdit} from "./IOrderRowEdit";

export interface IOrderEdit {
    id: string;
    customer: string;
    order_date: string;
    rows: (IOrderRowCreate | IOrderRowEdit)[];
}
