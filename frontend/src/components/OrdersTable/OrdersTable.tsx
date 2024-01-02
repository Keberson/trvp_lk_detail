import React from 'react';
import { Table } from "react-bootstrap";
import { IOrder } from "../../types/IOrder";
import OrdersRow from "../OrdersRow/OrdersRow";

interface IOrdersTableProps {
    orders: IOrder[];
}

const OrdersTable: React.FC<IOrdersTableProps> = ({ orders }) => {
    return (
        <Table className={"mh-100"}>
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Customer</th>
                    <th>Order Date</th>
                    <th>Products</th>
                    <th></th>
                </tr>
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