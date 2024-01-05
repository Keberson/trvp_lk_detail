import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import DashboardBody from "../../components/DashboardBody/DashboardBody";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import ModalWindow, {ModalSize} from "../../components/ModalWindow/ModalWindow";
import CreateOrder from "../../components/CreateOrder/CreateOrder";
import EditOrder from "../../components/EditOrder/EditOrder";
import DeleteOrder from "../../components/DeleteOrder/DeleteOrder";
import {IOrder} from "../../types/IOrder";
import {IProduct} from "../../types/IProduct";
import {useGetOrdersQuery, useGetProductsQuery} from "../../services/DashboardService";
import SpinnerCustom from "../../components/SpinnerCustom/SpinnerCustom";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import {TError} from "../../types/TError";
import {useAppSelector} from "../../hooks/useAppSelector";


const DashboardPage = () => {
    const [isShowModalCreate, setIsShowModalCreate] = useState<boolean>(false)
    const currentDate: Date = new Date();
    const {isLoading: isLoadingOrders, error: errorOrders} = useGetOrdersQuery();
    const {isLoading: isLoadingProducts, error: errorProducts} = useGetProductsQuery();
    const orders: IOrder[] = useAppSelector(state => state.dashboard.orders);
    const products: IProduct[] = useAppSelector(state => state.dashboard.products);
    const isLoadingShow: boolean = useAppSelector(state => state.utils.isLoadingShow) || isLoadingOrders || isLoadingProducts;

    return (
        <>
            <Container className={"mh-100 d-flex flex-column"}>
                <DashboardHeader currentDate={currentDate} addCallback={() => setIsShowModalCreate(true)}/>
                <DashboardBody className={"mt-5"} orders={orders} />
            </Container>

            <ModalWindow show={isShowModalCreate} title={"Order Creation"} hide={() => setIsShowModalCreate(false)}>
                <CreateOrder products={products} />
            </ModalWindow>
            {/*<ModalWindow show={false} title={"Edit Order"} hide={() => setIsShowModal(false)}>*/}
            {/*    <EditOrder order={orders[0]} products={products} />*/}
            {/*</ModalWindow>*/}
            {/*<ModalWindow show={false} title={"Delete Order"} hide={() => setIsShowModal(false)} size={ModalSize.small}>*/}
            {/*    <DeleteOrder orderID={orders[0].id}/>*/}
            {/*</ModalWindow>*/}

            {isLoadingShow && <SpinnerCustom />}
            {errorOrders && <ErrorAlert error={(errorOrders as TError).data.message}/>}
            {errorProducts && <ErrorAlert error={(errorProducts as TError).data.message}/>}
        </>
    );
}

export default DashboardPage;