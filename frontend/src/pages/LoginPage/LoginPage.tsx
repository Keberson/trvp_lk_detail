import React from 'react';
import {Card, Container, Form, Button} from "react-bootstrap";
import CustomTitle from "../../components/CustomTitle/CustomTitle";

const LoginPage = () => {
    return (
        <Container className={"h-100 d-flex justify-content-center align-items-center"}>
            <Card className={"p-3 align-items-center"}>
                <Card.Body>
                    <Card.Title as={CustomTitle}>Login</Card.Title>
                    <Card.Text className={"mb-5 text-muted"}>
                        Enter your username and password to login
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="loginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="name" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="dark" type="submit" className={"w-100"}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;
