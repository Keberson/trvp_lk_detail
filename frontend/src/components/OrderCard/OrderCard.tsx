import React from 'react';
import {Card, Stack} from "react-bootstrap";
import {IOrder} from "../../types/IOrder";
import {setModalTitle, setUtilOrder, toggleLoading, toggleModal} from "../../store/slices/utilsSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useDeleteOrderMutation} from "../../services/DashboardService";
import {Draggable, Droppable} from "react-beautiful-dnd";

interface OrderCardProps {
    order: IOrder;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const dispatch = useAppDispatch();
    const [deleteOrder] = useDeleteOrderMutation();
    const date = new Date(order.order_date);
    const dateFormat = date.toLocaleDateString('ru');

    const onClickEdit = () => {
        dispatch(setUtilOrder(order));
        dispatch(setModalTitle('Edit Order'));
        dispatch(toggleModal());
    }

    const onClickDelete = async () => {
        dispatch(toggleLoading());
        await deleteOrder(order.id);
        dispatch(toggleLoading());
    };


    return (
        <Card className={"border-0 rounded-3 shadow-sm"}>
            <Card.Header className={"d-flex p-3"} style={{ backgroundColor: "#C0CFB2" }}>
                <p className={"fw-bold"}>Order ID: {order.id}</p>
                <p className={"text-muted ms-auto"}>Date: {dateFormat}</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>{order.customer}</Card.Title>
                <Droppable
                    droppableId={order.id.toString()}
                >
                        {
                            (provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className={"mt-4 overflow-y-auto"} style={{ height: "200px" }}>
                                    {
                                        order.rows.map((row, index) =>
                                            <Draggable draggableId={row.id} index={index} key={row.id}>
                                                {(provided) => (
                                                    <Stack direction={"horizontal"} className={"p-2 rounded-3 border draggable-hover"}
                                                           {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                                                    >
                                                        <p>{row.product.name}</p>
                                                        <p className={"ms-auto"}>{row.number}</p>
                                                    </Stack>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                    {provided.placeholder}
                                </div>
                            )
                        }

                </Droppable>
                <Stack direction={"horizontal"} className={"mt-3 pe-3 ps-3"}>
                    <Card.Link
                        onClick={onClickEdit}
                        className={"ms-auto link-dark-green-hover"}
                        style={{ cursor: "pointer", textDecoration: "none", color: "#45624E" }}
                    >
                        Edit
                    </Card.Link>
                    <Card.Link
                        onClick={onClickDelete}
                        className={"link-dark-green-hover"}
                        style={{ cursor: "pointer", textDecoration: "none", color: "#45624E" }}
                    >
                        Delete
                    </Card.Link>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default OrderCard;