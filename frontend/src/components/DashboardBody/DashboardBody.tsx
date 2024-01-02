import React from 'react';
import { Card } from "react-bootstrap";
import { IOrder } from "../../types/IOrder";
import OrdersTable from "../OrdersTable/OrdersTable";
import getClasses from "../../utils/getClasses";

interface IDashboardBodyProps {
    orders: IOrder[];
    className?: string;
}

const DashboardBody: React.FC<IDashboardBodyProps> = ({ orders, className }) => {
    const classes = getClasses(className)

    return (
        <Card className={`mh-100 p-4 overflow-auto ${classes}`}>
            <OrdersTable orders={orders} />
        </Card>
    );
}

export default DashboardBody;