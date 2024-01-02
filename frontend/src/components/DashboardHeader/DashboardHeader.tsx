import React from 'react';
import { Container } from "react-bootstrap";
import DashboardDate from "../../components/DashboardDate/DashboardDate";
import getClasses from "../../utils/getClasses";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

interface IDashboardHeaderProps {
    currentDate: Date;
    className?: string;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ currentDate, className }) => {
    const classes = getClasses(className);

    return (
        <Container className={`d-flex justify-content-between align-items-center ${classes}`}>
            <DashboardTitle />
            <DashboardDate currentDate={currentDate} />
        </Container>
    );
}

export default DashboardHeader;