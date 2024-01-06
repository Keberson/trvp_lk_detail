import IOrderRowFull from "./IOrderRowFull.js";

interface IOrderFull {
    id: string,
    customer: string,
    order_date: Date
    rows: IOrderRowFull[]
}

export default IOrderFull;
