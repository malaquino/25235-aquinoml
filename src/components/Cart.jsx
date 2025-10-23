import React from "react";
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';

export default function Cart(){
    const {cart} = useContext(CartContext);

    //Falta obtener informacion del carrito y cargarlo

    return (
        <div className="container">
            <h2>Carrito de Compra</h2>
        </div>
    );
}