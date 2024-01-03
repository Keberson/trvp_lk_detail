import React from 'react';
import DateViewer from "../DateViewer/DateViewer";
import {Button} from "react-bootstrap";
import {ReactComponent as RightArrow} from "../../assets/rightArrow.svg"

interface DashboardDateProps {
    currentDate: Date;
}

const DashboardDate: React.FC<DashboardDateProps> = ({ currentDate }) => {
    return (
        <div className={"d-flex align-items-center"}>
            <DateViewer currentDate={currentDate} />
            <Button className={"d-flex ms-3 align-items-center border"}
                    style={{ background: "#45624E", border: "none", color: "#FFF" }}
            >
                <RightArrow className={"me-3"}/>
                <p>Next Day</p>
            </Button>
        </div>
    );
}

export default DashboardDate;