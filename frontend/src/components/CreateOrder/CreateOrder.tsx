import React from 'react';
import {Button, Form} from "react-bootstrap";
import CreateProducts from "../CreateProducts/CreateProducts";
import {IProduct} from "../../types/IProduct";
import {FormProvider, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {emptyRow} from "../../types/IOrderRowCreate";
import IFormCreate from "../../types/IFormCreate";
import {useCreateOrderMutation} from "../../services/DashboardService";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {toggleLoading} from "../../store/slices/utilsSlice";

interface CreateOrderProps {
    products: IProduct[];
}

const CreateOrder: React.FC<CreateOrderProps> = ({ products }) => {
    const dispatch = useAppDispatch();
    const methods = useForm<IFormCreate>();
    const {fields, append, remove} = useFieldArray({
        control: methods.control,
        name: "rows",
        rules: {
            validate: (value) => value.length !== 0
        }
    });
    const [createOrder] = useCreateOrderMutation();

    const onSubmit: SubmitHandler<IFormCreate> = async (formData) => {
        dispatch(toggleLoading());
        await createOrder({...formData});
        dispatch(toggleLoading())
    };

    return (
        <FormProvider {...methods}>
            <Form className={"p-2 d-flex flex-column h-100"} onSubmit={methods.handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="orderCreateCustomer">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control type="text" placeholder="Enter customer" {...methods.register("customer", {required: true})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="orderCreateDate">
                    <Form.Label>Order Date</Form.Label>
                    <Form.Control type="date" {...methods.register("order_date", {required: true})}/>
                </Form.Group>
                <CreateProducts
                    productsForms={fields}
                    products={products}
                    append={() => append(emptyRow)}
                    remove={remove}
                />
                <Button variant="dark" type="submit">
                    Create Order
                </Button>
            </Form>
        </FormProvider>
    );
}

export default CreateOrder;