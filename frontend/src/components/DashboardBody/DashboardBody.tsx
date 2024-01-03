import React from 'react';
import {Card} from "react-bootstrap";
import {IOrder} from "../../types/IOrder";
import OrdersTable from "../OrdersTable/OrdersTable";
import getClasses from "../../utils/getClasses";

interface DashboardBodyProps {
    orders: IOrder[];
    className?: string;
}

const DashboardBody: React.FC<DashboardBodyProps> = ({ orders, className }) => {
    const classes = getClasses(className)

    return (
        <Card className={`h-100 overflow-auto scrollbar-custom ${classes}`}>
            <OrdersTable orders={orders} />
        </Card>
    );
}

export default DashboardBody;