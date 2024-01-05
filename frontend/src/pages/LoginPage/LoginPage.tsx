import React from 'react';
import {Card, Container, Form, Button} from "react-bootstrap";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import {useLoginMutation} from "../../services/UserService";
import SpinnerCustom from "../../components/SpinnerCustom/SpinnerCustom";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import {useForm, SubmitHandler} from "react-hook-form";
import {LoginError} from "../../store/slices/authSlice";

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
                <Card className={"p-3 w-50 align-items-center"}>
                    <Card.Body>
                        <Card.Title as={CustomTitle}>Login</Card.Title>
                        <Card.Text className={"mb-5 text-muted"}>
                            Enter your login and password
                        </Card.Text>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="name" placeholder="login" {...register("login", {required: true, min: 5})} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" {...register("password", {required: true, min: 6, max: 20})}/>
                            </Form.Group>
                            <Button variant="dark" type="submit" className={"w-100"}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            {error && <ErrorAlert error={(error as LoginError).data.message}/>}
            {isLoading && <SpinnerCustom />}
        </>
    );
}

export default LoginPage;
