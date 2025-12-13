import React from "react";
import { useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import {CartContext} from '../context/CartContext'

export default function ProductCard({product}){
    const {addToCart}=useContext(CartContext);

    return(
        <div>
            <Card style={{ width: "22rem" }}>
                <Card.Body>
                    <Card.Img src={product.image}></Card.Img>
                    <Card.Title style={{ color: "green" }}>
                        {product.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        $ {product.price}
                    </Card.Subtitle>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Link href={`/productos/${product.id}`}>Ver mas informacion</Card.Link>
                    <hr/>
                    <Button variant="primary" onClick={() => addToCart(product)}>
                        Agregar al carrito
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}