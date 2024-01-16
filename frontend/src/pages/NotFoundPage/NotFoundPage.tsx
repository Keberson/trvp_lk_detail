import React from 'react';
import {NavLink} from "react-router-dom";
import {Card, Container} from 'react-bootstrap'
import {useAppSelector} from "../../hooks/useAppSelector";

const NotFoundPage = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    return (
        <Container className={"h-100 d-flex justify-content-center align-items-center"}>
            <Card className={"w-50 align-items-center"}>
                <Card.Img variant={"top"} src={"error.png"}/>
                <Card.Body className={"text-center"}>
                    <Card.Title>Page not found</Card.Title>
                    <Card.Link as={NavLink} to={"/"}>
                        Go to {isAuth ? "Dashboard" : "Login"}
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default NotFoundPage;
