import React from 'react';
import RowDelete from "../RowDelete/RowDelete";
import RowData from "../RowData/RowData";
import {IOrder} from "../../types/IOrder";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setModalTitle, setUtilOrder, toggleModal} from "../../store/slices/utilsSlice";

interface OrdersRowProps {
    order: IOrder,
    index: number,
}

const OrdersRow: React.FC<OrdersRowProps> = ({ order, index }) => {
    const dispatch = useAppDispatch();
    const row = order.rows[index];

    const onClick = () => {
        dispatch(setUtilOrder(order));
        dispatch(setModalTitle('Edit Order'));
        dispatch(toggleModal());
    }

    return (
        <tr onClick={() => onClick()}>
            {index === 0 && <RowData order={order}/>}
            <td>{row.product.name}</td>
            <td>{row.number}</td>
            {index === 0 && <RowDelete productsLength={order.rows.length} orderID={order.id}/>}
        </tr>
    );
}

export default OrdersRow;