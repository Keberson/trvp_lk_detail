import IOrderRowFull from "./IOrderRowFull.js";

interface IOrderFull {
    id: number,
    customer: string,
    order_date: Date
    rows: IOrderRowFull[]
}

export default IOrderFull;
