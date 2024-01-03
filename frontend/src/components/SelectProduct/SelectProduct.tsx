import React from 'react';
import {Form} from "react-bootstrap";
import {IProduct} from "../../types/IProduct";

interface SelectProductProps {
    selected: string;
    products: IProduct[];
}

const SelectProduct: React.FC<SelectProductProps> = ({ selected, products }) => {
    return (
        <Form.Select value={selected}>
            <option value={"INVALID"}>
                Select Product
            </option>
            {
                products.map((product) =>
                    <option value={product.id}>
                        {product.name}
                    </option>
                )
            }
        </Form.Select>
    );
}

export default SelectProduct;