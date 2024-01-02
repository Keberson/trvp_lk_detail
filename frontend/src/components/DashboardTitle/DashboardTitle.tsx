import React from 'react';
import CustomTitle from "../CustomTitle/CustomTitle";
import { Button } from "react-bootstrap";

const DashboardTitle= () => {
    return (
        <div className={"d-flex gap-3 align-items-center"}>
            <CustomTitle>Orders</CustomTitle>
            <Button variant={"dark"} className={"ps-2 pe-2"}>
                <p>Add Item</p>
            </Button>
        </div>
    );
}

export default DashboardTitle;