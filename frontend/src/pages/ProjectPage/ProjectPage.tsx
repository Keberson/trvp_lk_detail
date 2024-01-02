import React from "react";
import {Button, Card, Container, ListGroup} from "react-bootstrap";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import {NavLink} from "react-router-dom";

const ProjectPage = () => {
    return (
        <Container className={"h-100 d-flex flex-column justify-content-between align-items-center"}>
            <Container className={"w-75 text-center"}>
                <CustomTitle>Employee dashboard</CustomTitle>
                <p className={"text-muted"}>
                    The application is a section of the employee dashboard responsible for order generation.
                    The section contains a list of orders with the ability to add an order to the list, remove it from the list and edit information about it.
                </p>
            </Container>
            <Card className={"p-3"}>
                <Card.Body>
                    <Card.Title as={CustomTitle}>Project Details</Card.Title>
                    <ListGroup className={"mt-5"}>
                        <ListGroup.Item>
                            The client side of the application is developed using HTML, SCSS, TypeScript, React.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            The server side of the application is developed using the JavaScript programming language, the Node.js platform and the Express framework.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Interaction between client and server is done through a designed REST-like API.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Server-side data is stored in a PostgreSQL database.
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <NavLink to={"/login"} className={"w-50"}>
                <Button className={"w-100"}>
                    Login
                </Button>
            </NavLink>
        </Container>
    )
};

export default ProjectPage;
