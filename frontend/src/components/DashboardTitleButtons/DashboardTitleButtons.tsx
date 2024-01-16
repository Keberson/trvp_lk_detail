import React from "react";
import {Button, Stack} from "react-bootstrap";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {resetOrders} from "../../store/slices/dashboardSlice";

const DashboardTitleButtons = () => {
    const dispatch = useAppDispatch();

    const onSave = () => {

    };

    const onReset = () => {
        dispatch(resetOrders());
    };

    return (
        <Stack direction={"horizontal"} className={"gap-5"}>
            <Button className={"ps-5 pe-5 d-flex align-items-center border button-dark-green-hover"}
                    style={{ background: "#45624E", border: "none", color: "#FFF" }}
                    onClick={onSave}
            >
                <p>Save</p>
            </Button>
            <Button className={"ps-5 pe-5 d-flex align-items-center border-2 button-light-hover"}
                    style={{ background: "none", border: "5px solid #E4E6D9", color: "#273526" }}
                    onClick={onReset}
            >
                <p>Reset</p>
            </Button>
        </Stack>
    );
};

export default DashboardTitleButtons;
