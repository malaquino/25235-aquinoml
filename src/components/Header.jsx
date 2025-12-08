import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    const totalItems = 0;

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                    src="https://via.placeholder.com/40"
                    alt="Logo"
                    className="d-inline-block align-top me-2"
                    />
                    <h1>Bienvenidos a ECommerce</h1>
                </Navbar.Brand>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/productos" className="me-3">Productos</Nav.Link>
                    {/*<Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>*/}

                    <div className="d-flex align-items-center">
                    <Button variant="outline-light" as={Link} to="/crud" className="me-2">
                        Administración
                    </Button>
                    <Button variant="outline-light" as={Link} to="/logout" className="me-2">
                        Logout
                    </Button>
                    <Link to="/carrito" className="text-white position-relative">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        {totalItems > 0 && (
                        <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                            {totalItems}
                        </Badge>
                        )}
                    </Link>
                    </div>
                </Nav>

            </Container>
        </Navbar>
    );

}
