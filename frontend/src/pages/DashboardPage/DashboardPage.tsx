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
import {useGetOrdersQuery} from "../../services/OrderService";
import SpinnerCustom from "../../components/SpinnerCustom/SpinnerCustom";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import {TError} from "../../types/TError";
import {useAppSelector} from "../../hooks/useAppSelector";


const DashboardPage = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(true)
    const currentDate: Date = new Date();
    const {isLoading, error} = useGetOrdersQuery();
    const orders: IOrder[] = useAppSelector(state => state.order.orders);
    const products: IProduct[] = [
        {
            id: 'PRODUCT001',
            name: 'PRODUCT001'
        },
        {
            id: 'PRODUCT002',
            name: 'PRODUCT002'
        },
        {
            id: 'PRODUCT003',
            name: 'PRODUCT003'
        },
        {
            id: 'PRODUCT004',
            name: 'PRODUCT004'
        },
        {
            id: 'PRODUCT005',
            name: 'PRODUCT005'
        },
    ];

    return (
        <>
            <Container className={"mh-100 d-flex flex-column"}>
                <DashboardHeader currentDate={currentDate}/>
                <DashboardBody className={"mt-5"} orders={orders} />
            </Container>

            <ModalWindow show={false} title={"Order Creation"} hide={() => setIsShowModal(false)}>
                <CreateOrder products={products} />
            </ModalWindow>
            <ModalWindow show={false} title={"Edit Order"} hide={() => setIsShowModal(false)}>
                {/*<EditOrder order={orders[0]} products={products} />*/}
            </ModalWindow>
            <ModalWindow show={false} title={"Delete Order"} hide={() => setIsShowModal(false)} size={ModalSize.small}>
                {/*<DeleteOrder orderID={orders[0].id}/>*/}
            </ModalWindow>

            {isLoading && <SpinnerCustom />}
            {error && <ErrorAlert error={(error as TError).data.message}/>}
        </>
    );
}

export default DashboardPage;