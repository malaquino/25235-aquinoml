import {useState,useEffect,createContext} from 'react'

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productId) => {
        console.log('productId: ' + productId);
        let newCart = cart;
        if (!newCart)
        {
            newCart = [];
        }
        console.log('newCart: ' + newCart);
        const productIndex = newCart.findIndex(item => item.id === productId);

        console.log('productIndex: ' + productIndex);
        if (productIndex >= 0)
        {
            newCart[productIndex].quantity += 1;
        }
        else
        {
            newCart.push({ id: productId, quantity: 1 });
        }
        console.log(JSON.stringify(newCart));
        setCart(newCart);
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}  >
            {children}
        </CartContext.Provider>
    );
};