import React from "react";
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import {Container, Button, Table} from 'react-bootstrap';

export default function Cart(){
    const {cart} = useContext(CartContext);

    if (cart.length === 0) {
        return (
          <Container>
            <h2>Carrito de Compra</h2>

            <h4>Tu carrito está vacío</h4>
          </Container>
        );
    }

    return (
        <Container>
            <h2>Carrito de Compra</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.title}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.price}</td>
                        <td>{prod.price * prod.quantity}</td>
                        <td>
                            <Button
                                size="sm"
                                variant="danger"
                                /*onClick={() => handleDelete(prod.id)}*/
                                >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}