import React from 'react';
import {Form} from "react-bootstrap";
import {IProduct} from "../../types/IProduct";
import {useFormContext} from "react-hook-form";
import {useAppSelector} from "../../hooks/useAppSelector";

interface SelectProductProps {
    index: number
}

const SelectProduct: React.FC<SelectProductProps> = ({ index }) => {
    const products: IProduct[] = useAppSelector(state => state.dashboard.products);
    const {register} = useFormContext();

    return (
        <Form.Select {...register(`rows.${index}.product`, {required: true})}>
            {
                products.map((product) =>
                    <option value={product.id}>
                        {product.name} / {product.number}
                    </option>
                )
            }
        </Form.Select>
    );
}

export default SelectProduct;