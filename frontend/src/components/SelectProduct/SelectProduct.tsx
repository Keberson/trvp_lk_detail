import React from 'react';
import {Form} from "react-bootstrap";
import {IProduct} from "../../types/IProduct";
import {useFormContext} from "react-hook-form";

interface SelectProductProps {
    products: IProduct[],
    index: number
}

const SelectProduct: React.FC<SelectProductProps> = ({ products, index }) => {
    const {register} = useFormContext();

    return (
        <Form.Select {...register(`rows.${index}.product`, {required: true})}>
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