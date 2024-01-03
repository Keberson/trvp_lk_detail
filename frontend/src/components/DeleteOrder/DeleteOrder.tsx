import React from 'react';
import {Button, Form} from "react-bootstrap";

interface DeleteOrderProps {
    orderID: string;
}

const DeleteOrder: React.FC<DeleteOrderProps> = ({ orderID }) => {
    return (
        <Form className={"p-2 d-flex flex-column h-100"}>

            <Button variant="danger" type="submit">
                Delete Order
            </Button>
        </Form>
    );
}

export default DeleteOrder;