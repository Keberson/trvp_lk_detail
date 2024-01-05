import React from 'react';
import {IOrderRow} from "../../types/IOrderRow";
import {ListGroup} from "react-bootstrap";

interface OrderRowsProps {
    products: IOrderRow[];
}

const OrderRows: React.FC<OrderRowsProps> = ({ products }) => {
    return (
        <ListGroup>
            {
                products.map((orderRow) =>
                    <ListGroup.Item action className={"text-center"} key={orderRow.id}>
                        {orderRow.id} {orderRow.product.id} {orderRow.product.name} ✕ {orderRow.number}
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    );
}

export default OrderRows;