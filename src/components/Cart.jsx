import React from "react";
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';
import {Container, Button, Table} from 'react-bootstrap';

export default function Cart(){
    const {cart, setCart} = useContext(CartContext);

    const total = cart.reduce((acc, prod) => acc + Number(prod.price) * prod.quantity, 0);

    if (cart.length === 0) {
        return (
          <Container>
            <h2>Carrito de Compra</h2>

            <h4>Tu carrito está vacío</h4>
          </Container>
        );
    }

    const handleDelete = (id, title) => {
        if (!window.confirm(`¿Seguro que quieres eliminar el producto '${title}'?`)) return;

        setCart(prev => prev.filter(prod => prod.id !== id));
    };

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
                        <td>${Number(prod.price).toFixed(2)}</td>
                        <td>${Number(prod.price * prod.quantity).toFixed(2)}</td>
                        <td>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(prod.id, prod.title)}
                                >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
        </Container>
    );
}