import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import DashboardBody from "../../components/DashboardBody/DashboardBody";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import CreateOrder from "../../components/CreateOrder/CreateOrder";
import EditOrder from "../../components/EditOrder/EditOrder";
import {IOrder} from "../../types/IOrder";
import {IProduct} from "../../types/IProduct";

const DashboardPage = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const currentDate: Date = new Date();
    const orders: IOrder[] = [
        {
            id: "ITEM001",
            customer: "Customer1",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
        {
            id: "ITEM002",
            customer: "Customer2",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
        {
            id: "ITEM002",
            customer: "Customer2",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
        {
            id: "ITEM002",
            customer: "Customer2",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
        {
            id: "ITEM002",
            customer: "Customer2",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
        {
            id: "ITEM002",
            customer: "Customer2",
            orderDate: new Date(),
            rows: [
                {
                    id: "ROW001",
                    product: {
                        id: "PRODUCT001",
                        name: "PRODUCT001"
                    },
                    number: 10
                },
                {
                    id: "ROW002",
                    product: {
                        id: "PRODUCT002",
                        name: "PRODUCT002"
                    },
                    number: 20
                },
            ]
        },
    ];
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
                <EditOrder order={orders[0]} products={products} />
            </ModalWindow>
        </>
    );
}

export default DashboardPage;