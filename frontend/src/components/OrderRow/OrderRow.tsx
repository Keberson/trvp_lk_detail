import React from 'react';
import RowDelete from "../RowDelete/RowDelete";
import RowData from "../RowData/RowData";
import {IOrder} from "../../types/IOrder";

interface OrdersRowProps {
    order: IOrder,
    index: number,
}

const OrdersRow: React.FC<OrdersRowProps> = ({ order, index }) => {
    const row = order.rows[index];

    return (
        <tr>
            {index === 0 && <RowData order={order}/>}
            <td>{row.product.name}</td>
            <td>{row.number}</td>
            {index === 0 && <RowDelete productsLength={order.rows.length} orderID={order.id}/>}
        </tr>
    );
}

export default OrdersRow;