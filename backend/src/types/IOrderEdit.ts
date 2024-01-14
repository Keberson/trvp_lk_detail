import IOrderRowEdit from "./IOrderRowEdit.js";

interface IOrderEdit {
    id: number,
    customer: string,
    order_date: Date,
    rows: IOrderRowEdit[]
}

export default IOrderEdit;
