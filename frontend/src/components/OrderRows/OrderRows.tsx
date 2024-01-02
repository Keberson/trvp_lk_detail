import React from 'react';
import { IOrderRow } from "../../types/IOrderRow";
import { ListGroup } from "react-bootstrap";

interface IOrderRowsProps {
    products: IOrderRow[];
}

const OrderRows: React.FC<IOrderRowsProps> = ({ products }) => {
    return (
        <ListGroup>
            {
                products.map((orderRow) =>
                    <ListGroup.Item action className={"text-center"}>
                        {orderRow.id} {orderRow.product.id} {orderRow.product.name} ✕ {orderRow.number}
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    );
}

export default OrderRows;