import React from 'react';
import {Card, Container, Form, Button} from "react-bootstrap";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import {useLoginMutation} from "../../services/UserService";
import SpinnerCustom from "../../components/SpinnerCustom/SpinnerCustom";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import {useForm, SubmitHandler} from "react-hook-form";
import {TError} from "../../types/TError";

interface IFormInput {
    login: string,
    password: string
}

const LoginPage = () => {
    const [login, {isLoading, error}] = useLoginMutation();
    const {register, handleSubmit} = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
        await login({login: formData["login"], password: formData["password"]});
    }

    return (
        <>
            <Container className={"h-100 d-flex justify-content-center align-items-center"}>
                <Card className={"p-4 w-50 h-75"}>
                    <Card.Body className={"d-flex flex-column justify-content-between"}>
                        <Card.Title as={CustomTitle}>Login</Card.Title>
                        <Card.Text className={"mb-4 text-muted"}>
                            Enter your login and password
                        </Card.Text>
                        <Form className={"mb-2"} onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label className={"ms-2"}>Login</Form.Label>
                                <Form.Control type="name" placeholder="login" {...register("login", {required: true, min: 5})} />
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label className={"ms-2"}>Password</Form.Label>
                                <Form.Control type="password" {...register("password", {required: true, min: 6, max: 20})}/>
                            </Form.Group>
                            <Button
                                variant="dark"
                                type="submit"
                                className={"w-100 button-dark-green-hover"}
                                style={{ background: "#45624E", color: "#FFF", border: "none" }}
                            >
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            {error && <ErrorAlert error={(error as TError).data.message}/>}
            {isLoading && <SpinnerCustom />}
        </>
    );
}

export default LoginPage;
