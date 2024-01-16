import React from 'react';
import {IOrder} from "../../types/IOrder";
import getClasses from "../../utils/getClasses";
import OrderCard from "../OrderCard/OrderCard";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {moveRow, reorderRows} from "../../store/slices/dashboardSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";

interface DashboardBodyProps {
    orders: IOrder[];
    className?: string;
}

const DashboardBody: React.FC<DashboardBodyProps> = ({ orders, className }) => {
    const dispatch = useAppDispatch();
    const classes = getClasses(className);

    const handleDragDrop = (results: DropResult) => {
        const {source, destination} = results;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        if (source.droppableId === destination.droppableId) {
            dispatch(reorderRows({
                orderID: Number(source.droppableId),
                fromIndex: source.index,
                toIndex: destination.index
            }))
        } else {
            dispatch(moveRow({
                fromOrder: Number(source.droppableId),
                toOrder: Number(destination.droppableId),
                fromIndex: source.index,
                toIndex: destination.index
            }))
        }
    };

    return (
        <div
            className={`h-100 scrollbar-custom ${classes} p-1 gap-4`}
            style={{ display: "grid", gridTemplateColumns: "3fr 3fr 3fr" }}
        >
            <DragDropContext
                onDragEnd={handleDragDrop}
            >
                {
                    orders.map((order) =>
                        <OrderCard order={order} key={order.id}/>
                    )
                }
            </DragDropContext>
        </div>
    );
}

export default DashboardBody;