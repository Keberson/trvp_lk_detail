import React from 'react';
import {Stack} from "react-bootstrap";
import DashboardDate from "../../components/DashboardDate/DashboardDate";
import getClasses from "../../utils/getClasses";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import DashboardTitleButtons from "../DashboardTitleButtons/DashboardTitleButtons";
import {useAppSelector} from "../../hooks/useAppSelector";

interface DashboardHeaderProps {
    className?: string
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({className }) => {
    const classes = getClasses(className);
    const isEditedOrders = useAppSelector(state => state.dashboard.isEditedOrders);

    return (
        <Stack direction="horizontal" className={`d-flex justify-content-between align-items-center ${classes}`}>
            <DashboardTitle />
            {isEditedOrders && <DashboardTitleButtons />}
            <DashboardDate />
        </Stack>
    );
}

export default DashboardHeader;