import React from 'react';
import {IOrder} from "../../types/IOrder";
import RowDelete from "../RowDelete/RowDelete";
import OrderRows from "../OrderRows/OrderRows";

interface OrdersRowProps {
    order: IOrder;
}

const OrdersRow: React.FC<OrdersRowProps> = ({ order }) => {
    return (
        <tr>
            <td className={"fw-bold"} style={{ cursor: "pointer" }}>{order.id}</td>
            <td style={{ cursor: "pointer" }}>{order.customer}</td>
            <td style={{ cursor: "pointer" }}>{order.orderDate.toLocaleDateString('ru')}</td>
            <td>
                <OrderRows products={order.rows} />
            </td>
            <td><RowDelete /></td>
        </tr>
    );
}

export default OrdersRow;