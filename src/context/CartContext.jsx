import {useState,createContext} from 'react';
import { toast } from "react-toastify";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

    const addToCart = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id);

        if (productIndex >= 0)
        {
            const newCart = cart.map((item, index) => 
                index === productIndex 
                    ? { ...item, quantity: item.quantity + 1, price: product.price }
                    : item
            );
            setCart(newCart);
        }
        else
        {
            setCart([...cart, { 
                id: product.id, 
                quantity: 1, 
                price: product.price, 
                title: product.title 
            }]);
        }
        //console.log(JSON.stringify(cart));
        toast.success("Producto '" + product.title + "' agregado al carrito!", {autoClose: 2000});
    };

    return(
        <CartContext.Provider value={{cart, addToCart, setCart}}  >
            {children}
        </CartContext.Provider>
    );
};