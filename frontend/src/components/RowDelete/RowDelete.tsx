import React from 'react';
import {ReactComponent as DeleteRow} from "../../assets/deleteRow.svg";
import {Button} from "react-bootstrap";
import {useDeleteOrderMutation} from "../../services/DashboardService";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {toggleLoading} from "../../store/slices/utilsSlice";

interface RowDeleteProps {
    productsLength: number,
    orderID: number
}

const RowDelete: React.FC<RowDeleteProps> = ({ productsLength, orderID }) => {
    const [deleteOrder] = useDeleteOrderMutation();
    const dispatch = useAppDispatch();

    const onClick = async () => {
        dispatch(toggleLoading());
        await deleteOrder(orderID);
        dispatch(toggleLoading());
    };

    return (
        <td rowSpan={productsLength} onClick={(e) => e.stopPropagation()} style={{ cursor: "default" }}>
            <Button className={"p-0 bg-white border-0 btn-outline"} onClick={onClick}>
                <DeleteRow />
            </Button>
        </td>
    );
}

export default RowDelete;