import React from 'react';
import {Table} from "react-bootstrap";
import {IOrder} from "../../types/IOrder";
import OrdersRow from "../OrdersRow/OrdersRow";

interface OrdersTableProps {
    orders: IOrder[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
    return (
        <Table className={"mh-100 overflow-auto"}>
            <colgroup>
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "50%" }} />
                <col style={{ width: "5%" }} />
            </colgroup>
            <thead style={{ background: "#C0CFB2", color: "#FFF", position: "sticky", top: 0, zIndex: 2 }}>
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