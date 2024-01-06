import React from 'react';
import {Container} from "react-bootstrap";
import DashboardBody from "../../components/DashboardBody/DashboardBody";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import CreateOrder from "../../components/CreateOrder/CreateOrder";
import EditOrder from "../../components/EditOrder/EditOrder";
import {IOrder} from "../../types/IOrder";
import {useGetOrdersQuery, useGetProductsQuery} from "../../services/DashboardService";
import SpinnerCustom from "../../components/SpinnerCustom/SpinnerCustom";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import {TError} from "../../types/TError";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {toggleModal} from "../../store/slices/utilsSlice";


const DashboardPage = () => {
    const dispatch = useAppDispatch();
    const currentDate: Date = new Date();
    const {isLoading: isLoadingOrders, error: errorOrders} = useGetOrdersQuery();
    const {isLoading: isLoadingProducts, error: errorProducts} = useGetProductsQuery();
    const orders: IOrder[] = useAppSelector(state => state.dashboard.orders);
    const isLoadingShow: boolean = useAppSelector(state => state.utils.isLoadingShow) || isLoadingOrders || isLoadingProducts;
    const isShowModal: boolean = useAppSelector(state => state.utils.isModalShow);
    const modalTitle: string = useAppSelector(state => state.utils.modalTitle);

    return (
        <>
            <Container className={"mh-100 d-flex flex-column"}>
                <DashboardHeader currentDate={currentDate} />
                <DashboardBody className={"mt-5"} orders={orders} />
            </Container>

            <ModalWindow show={isShowModal} title={modalTitle} hide={() => dispatch(toggleModal())}>
                {modalTitle === 'Create Order' ?
                    <CreateOrder />
                    :
                    <EditOrder />
                }
            </ModalWindow>

            {isLoadingShow && <SpinnerCustom />}
            {errorOrders && <ErrorAlert error={(errorOrders as TError).data.message}/>}
            {errorProducts && <ErrorAlert error={(errorProducts as TError).data.message}/>}
        </>
    );
}

export default DashboardPage;