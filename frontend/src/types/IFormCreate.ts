import {IOrderRowCreate} from "./IOrderRowCreate";

interface IFormCreate {
    customer: string,
    order_date: Date,
    rows: IOrderRowCreate[]
}

export default IFormCreate;