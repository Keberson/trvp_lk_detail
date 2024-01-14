import React from 'react';
import {Card, Stack} from "react-bootstrap";
import {IOrder} from "../../types/IOrder";
import {setModalTitle, setUtilOrder, toggleLoading, toggleModal} from "../../store/slices/utilsSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useDeleteOrderMutation} from "../../services/DashboardService";

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
            <Card.Header className={"d-flex p-3"}>
                <p className={"fw-bold"}>Order ID: {order.id}</p>
                <p className={"text-muted ms-auto"}>Date: {dateFormat}</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>{order.customer}</Card.Title>
                <Stack className={"mt-4 overflow-auto gap-2"} style={{ height: "200px" }}>
                    {
                        order.rows.map((row) =>
                            <Stack direction={"horizontal"} className={"p-2 rounded-3 border"} draggable key={row.id}>
                                <p>{row.product.name}</p>
                                <p className={"ms-auto"}>{row.number}</p>
                            </Stack>
                        )
                    }
                </Stack>
                <Stack direction={"horizontal"} className={"mt-3"}>
                    <Card.Link
                        className={"ms-auto"}
                        onClick={onClickEdit}
                        style={{ cursor: "pointer" }}
                    >
                        Edit
                    </Card.Link>
                    <Card.Link
                        onClick={onClickDelete}
                        style={{ cursor: "pointer" }}
                    >
                        Delete
                    </Card.Link>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default OrderCard;