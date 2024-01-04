interface IOrderRowProduct {
    order_info_id: string,
    customer: string,
    order_date: Date,
    order_row_id: string,
    product_id: number,
    number: number,
    product_name: string
}

export default IOrderRowProduct;