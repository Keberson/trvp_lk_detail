import IProductOrder from "./IProductOrder.js";

interface IOrderRowFull {
    id: string,
    product: IProductOrder,
    number: number
}

export default IOrderRowFull;
