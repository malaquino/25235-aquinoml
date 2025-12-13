import {useState,createContext} from 'react'

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
        //alert(`Producto '${product.title}' agregado al carrito`);
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}  >
            {children}
        </CartContext.Provider>
    );
};