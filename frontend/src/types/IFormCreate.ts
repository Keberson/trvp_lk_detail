import {IOrderRowCreate} from "./IOrderRowCreate";

interface IFormCreate {
    customer: string,
    order_date: string,
    rows: IOrderRowCreate[]
}

export default IFormCreate;