import React from 'react';
import DateViewer from "../DateViewer/DateViewer";
import {Button} from "react-bootstrap";
import {ReactComponent as RightArrow} from "../../assets/rightArrow.svg"
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {incrementDate, toggleLoading} from "../../store/slices/utilsSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useExpiredOrdersMutation, useSimulateMutation} from "../../services/DashboardService";
import moment from "moment/moment";

const DashboardDate = () => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector(state => state.utils.currentDate);
    const [expiredOrders] = useExpiredOrdersMutation();
    const [simulate] = useSimulateMutation();

    const onClick = async () => {
        dispatch(incrementDate());
        dispatch(toggleLoading());
        await expiredOrders(moment(currentDate).format("YYYY-MM-DD"));
        await simulate();
        dispatch(toggleLoading());
    };

    return (
        <div className={"d-flex align-items-center"}>
            <DateViewer currentDate={currentDate} />
            <Button className={"d-flex ms-3 align-items-center border"}
                    style={{ background: "#45624E", border: "none", color: "#FFF" }}
                    onClick={onClick}
            >
                <RightArrow className={"me-3"}/>
                <p>Next Day</p>
            </Button>
        </div>
    );
}

export default DashboardDate;