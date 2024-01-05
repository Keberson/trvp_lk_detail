import React from 'react';
import {Table} from "react-bootstrap";
import {IOrder} from "../../types/IOrder";
import OrdersRow from "../OrdersRow/OrdersRow";
import OrdersTableHead from "../OrdersTableHead/OrdersTableHead";
import OrdersCols from "../OrdersCols/OrdersCols";

interface OrdersTableProps {
    orders: IOrder[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
    return (
        <Table className={"mh-100 overflow-auto"}>
            <OrdersCols />
            <thead style={{ background: "#C0CFB2", color: "#FFF", position: "sticky", top: 0, zIndex: 2 }}>
                <OrdersTableHead />
            </thead>
            <tbody>
            {
                orders.map((order) =>
                    <OrdersRow order={order} key={order.id} />
                )
            }
            </tbody>
        </Table>
    );
}

export default OrdersTable;