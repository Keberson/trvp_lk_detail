import React from 'react';
import {Button, Form} from "react-bootstrap";
import CreateProducts from "../CreateProducts/CreateProducts";
import {IOrderRow} from "../../types/IOrderRow";
import {IProduct} from "../../types/IProduct";
import {IOrder} from "../../types/IOrder";

interface EditOrderProps {
    order: IOrder;
    products: IProduct[];
}

const EditOrder: React.FC<EditOrderProps> = ({ order, products }) => {
    const productsForms: IOrderRow[] = [...order.rows];

    return (
        <Form className={"p-2 d-flex flex-column h-100"}>
            <Form.Group className="mb-3" controlId="orderCreateCustomer">
                <Form.Label>Customer</Form.Label>
                <Form.Control type="text" placeholder="Enter customer" value={order.customer} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="orderCreateDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" value={order.order_date.toISOString().split('T')[0]}/>
            </Form.Group>
            {/*<CreateProducts productsForms={productsForms} products={products} />*/}
            <Button variant="dark" type="submit">
                Edit Order
            </Button>
        </Form>
    );
}

export default EditOrder;