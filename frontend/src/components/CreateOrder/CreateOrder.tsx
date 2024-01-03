import React from 'react';
import {Button, Form} from "react-bootstrap";
import CreateProducts from "../CreateProducts/CreateProducts";
import {IOrderRow} from "../../types/IOrderRow";
import {IProduct} from "../../types/IProduct";

interface CreateOrderProps {
    products: IProduct[];
}

const CreateOrder: React.FC<CreateOrderProps> = ({ products }) => {
    const productsForms: IOrderRow[] = [
        {
            id: 'ITEM001',
            product: {
                id: 'PRODUCT001',
                name: 'PRODUCT001'
            },
            number: 0
        }
    ];

    return (
        <Form className={"p-2 d-flex flex-column h-100"}>
            <Form.Group className="mb-3" controlId="orderCreateCustomer">
                <Form.Label>Customer</Form.Label>
                <Form.Control type="text" placeholder="Enter customer" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="orderCreateDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <CreateProducts productsForms={productsForms} products={products} />
            <Button variant="dark" type="submit">
                Create Order
            </Button>
        </Form>
    );
}

export default CreateOrder;