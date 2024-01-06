import IOrderRowRaw from "./IOrderRowRaw.js";

interface IOrderRaw {
    rows: IOrderRowRaw[]
    customer: string,
    order_date: Date
}

export default IOrderRaw;
