import React from 'react';
import {IOrder} from "../../types/IOrder";
import OrderRow from "../OrderRow/OrderRow";

interface OrdersRowProps {
    order: IOrder;
}

const OrdersRow: React.FC<OrdersRowProps> = ({ order }) => {
    return (
        <>
            {order.rows.map((row, index) =>
                <OrderRow order={order} index={index} key={row.id}/>
            )}
        </>
    );
}

export default OrdersRow;