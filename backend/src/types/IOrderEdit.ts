import IOrderRowEdit from "./IOrderRowEdit.js";

interface IOrderEdit {
    id: string,
    customer: string,
    order_date: Date,
    rows: IOrderRowEdit[]
}

export default IOrderEdit;
