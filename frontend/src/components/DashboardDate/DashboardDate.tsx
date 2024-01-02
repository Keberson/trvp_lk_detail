import React from 'react';
import DateViewer from "../DateViewer/DateViewer";
import { Button } from "react-bootstrap";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg"

interface IDashboardDateProps {
    currentDate: Date;
}

const DashboardDate: React.FC<IDashboardDateProps> = ({ currentDate }) => {
    return (
        <div className={"d-flex align-items-center"}>
            <DateViewer currentDate={currentDate} />
            <Button className={"d-flex ms-3 align-items-center border"} variant={"light"}>
                <RightArrow className={"me-3"}/>
                <p>Next Day</p>
            </Button>
        </div>
    );
}

export default DashboardDate;