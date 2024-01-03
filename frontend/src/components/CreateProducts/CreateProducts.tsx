import React from 'react';
import {Form, Stack} from "react-bootstrap";
import CreateProductSelect from "../CreateProductSelect/CreateProductSelect";
import {IOrderRow} from "../../types/IOrderRow";
import {IProduct} from "../../types/IProduct";

interface CreateProductsProps {
    productsForms: IOrderRow[];
    products: IProduct[];
}

const CreateProducts: React.FC<CreateProductsProps> = ({ productsForms, products }) => {
    return (
        <Stack className={"mh-100 mb-3"}>
            <p className={"mb-2"}>Products</p>
            <Stack className={"mb-2 p-3 border rounded-2 overflow-auto"} style={{ height: "200px" }}>
                {
                    productsForms.map((productForm, idx) =>
                        <CreateProductSelect products={products} orderRow={productForm} idx={idx}/>
                    )
                }
            </Stack>
            <Form.Group controlId="orderCreateProducts">
                <Form.Control type="button" value="Add new Product" />
            </Form.Group>
        </Stack>
    );
}

export default CreateProducts;