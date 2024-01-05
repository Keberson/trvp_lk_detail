import React from 'react';
import {IOrder} from "../../types/IOrder";

interface RowDeleteProps {
    order: IOrder
}

const RowData: React.FC<RowDeleteProps> = ({ order }) => {
    return (
        <>
            <td className={"fw-bold"} rowSpan={order.rows.length}>{order.id}</td>
            <td rowSpan={order.rows.length}>{order.customer}</td>
            <td rowSpan={order.rows.length}>{order.order_date.toLocaleDateString('ru')}</td>
        </>
    );
}

export default RowData;