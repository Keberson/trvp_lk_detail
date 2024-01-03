import React from 'react';
import {Form, Stack} from "react-bootstrap";
import {IProduct} from "../../types/IProduct";
import {IOrderRow} from "../../types/IOrderRow";
import SelectProduct from "../SelectProduct/SelectProduct";

interface CreateProductSelectProps {
    idx: number;
    orderRow: IOrderRow;
    products: IProduct[];
}

const CreateProductSelect: React.FC<CreateProductSelectProps> = ({ idx, orderRow, products  }) => {
    return (
        <Stack direction="horizontal" gap={3} className={idx === 0 ? "" : "mt-2"}>
            <Form.Group className={"w-75"} controlId="orderCreateProducts">
                <SelectProduct selected={orderRow.product.id} products={products} />
            </Form.Group>
            <Form.Group className="w-25" controlId="orderCreateProducts0">
                <Form.Control type="number" placeholder="0" value={orderRow.number} />
            </Form.Group>
        </Stack>
    );
}

export default CreateProductSelect;