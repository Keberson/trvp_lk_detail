import React from 'react';
import {IOrder} from "../../types/IOrder";
import getClasses from "../../utils/getClasses";
import OrderCard from "../OrderCard/OrderCard";

interface DashboardBodyProps {
    orders: IOrder[];
    className?: string;
}

const DashboardBody: React.FC<DashboardBodyProps> = ({ orders, className }) => {
    const classes = getClasses(className)

    return (
        <div
            className={`h-100 overflow-auto scrollbar-custom ${classes} p-1 gap-4`}
            style={{ display: "grid", gridTemplateColumns: "3fr 3fr 3fr" }}
        >
            {
                orders.map((order) =>
                    <OrderCard order={order}/>
                )
            }
        </div>
    );
}

export default DashboardBody;