import React from 'react';
import CustomTitle from "../CustomTitle/CustomTitle";
import {Button} from "react-bootstrap";

const DashboardTitle= () => {
    return (
        <div className={"d-flex gap-3 align-items-center"}>
            <CustomTitle>Orders</CustomTitle>
            <Button style={{ background: "#45624E", color: "#FFF", border: "none" }} className={"ps-3 pe-3"}>
                <p>Add Item</p>
            </Button>
        </div>
    );
}

export default DashboardTitle;