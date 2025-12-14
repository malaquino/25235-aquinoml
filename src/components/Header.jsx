import React, {useContext} from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../context/CartContext';

export default function Header(){
    const {cart}=useContext(CartContext);
    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <span className="fs-5 fw-bold">ECommerce</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto text-center text-lg-start align-items-lg-center gap-2">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

                        <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-2 mt-lg-0">
                            <Button variant="outline-light" as={Link} to="/crud">
                                Administración
                            </Button>
                            <Button variant="outline-light" as={Link} to="/logout">
                                Logout
                            </Button>
                            <Link to="/carrito" className="text-white position-relative mt-2 mt-lg-0">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                {totalItems > 0 && (
                                    <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
