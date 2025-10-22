import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Talento Tech 2025</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/productos">Productos</Nav.Link>
                        <Nav.Link href="/admin">Administracion</Nav.Link>
                        <Nav.Link href="/carrito" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}