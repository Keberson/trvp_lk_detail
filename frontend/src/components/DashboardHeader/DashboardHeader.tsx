import React from 'react';
import {Stack} from "react-bootstrap";
import DashboardDate from "../../components/DashboardDate/DashboardDate";
import getClasses from "../../utils/getClasses";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

interface DashboardHeaderProps {
    className?: string
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({className }) => {
    const classes = getClasses(className);

    return (
        <Stack direction="horizontal" className={`d-flex justify-content-between align-items-center ${classes}`}>
            <DashboardTitle/>
            <DashboardDate />
        </Stack>
    );
}

export default DashboardHeader;