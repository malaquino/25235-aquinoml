import {useState,createContext} from 'react'

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

    const addToCart = (product) => {
        let newCart = cart;
        const productIndex = newCart.findIndex(item => item.id === product.id);

        if (productIndex >= 0)
        {
            newCart[productIndex].quantity += 1;
        }
        else
        {
            newCart.push({ id: product.id, quantity: 1 });
        }
        console.log(JSON.stringify(newCart));
        alert(`Producto '${product.title}' agregado al carrito`);
        setCart(newCart);
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}  >
            {children}
        </CartContext.Provider>
    );
};