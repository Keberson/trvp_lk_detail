import { IProduct } from "./IProduct";

export interface IOrderRow {
    id: string;
    product: IProduct;
    number: number;
}
