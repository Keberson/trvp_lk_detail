import React from 'react';
import {Form, Stack} from "react-bootstrap";
import CreateProductSelect from "../CreateProductSelect/CreateProductSelect";
import {FieldArrayWithId} from "react-hook-form";

interface CreateProductsProps {
    productsForms: FieldArrayWithId[],
    append: () => void,
    remove: (idx: number) => void
}

const CreateProducts: React.FC<CreateProductsProps> = ({
                                                           productsForms,
                                                           append,
                                                           remove
}) => {
    return (
        <Stack className={"mh-100 mb-3"}>
            <p className={"mb-2 ms-2 fw-bold"}>Products</p>
            <Stack className={"mb-2 p-3 border rounded-2 overflow-auto"} style={{ height: "200px" }}>
                {
                    productsForms.map((productForm, idx) =>
                        <CreateProductSelect idx={idx} fieldId={productForm.id} remove={() => remove(idx)} />
                    )
                }
            </Stack>
            <Form.Group controlId="orderCreateProducts">
                <Form.Control
                    type="button"
                    value="Add new Product"
                    onClick={append}
                    style={{ border: "1px solid #273526", color: "273526" }}
                    className={"button-light-hover"}
                />
            </Form.Group>
        </Stack>
    );
}

export default CreateProducts;