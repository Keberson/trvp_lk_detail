import React from 'react';
import { Container } from "react-bootstrap";
import DashboardBody from "../../components/DashboardBody/DashboardBody";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { IOrder } from "../../types/IOrder";

const DashboardPage = () => {
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
    ]

    return (
        <Container className={"mh-100 d-flex flex-column"}>
            <DashboardHeader currentDate={currentDate}/>
            <DashboardBody className={"mt-5"} orders={orders} />
        </Container>
    );
}

export default DashboardPage;