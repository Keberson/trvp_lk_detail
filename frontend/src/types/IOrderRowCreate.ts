export interface IOrderRowCreate {
    product: string;
    number: number;
}

export const emptyRow = {
    product: 'NULL',
    number: 0
}
