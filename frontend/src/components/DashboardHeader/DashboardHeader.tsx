import React from 'react';
import {Stack} from "react-bootstrap";
import DashboardDate from "../../components/DashboardDate/DashboardDate";
import getClasses from "../../utils/getClasses";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

interface DashboardHeaderProps {
    currentDate: Date,
    className?: string,
    addCallback: () => void
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ currentDate, className, addCallback }) => {
    const classes = getClasses(className);

    return (
        <Stack direction="horizontal" className={`d-flex justify-content-between align-items-center ${classes}`}>
            <DashboardTitle addCallback={addCallback}/>
            <DashboardDate currentDate={currentDate} />
        </Stack>
    );
}

export default DashboardHeader;