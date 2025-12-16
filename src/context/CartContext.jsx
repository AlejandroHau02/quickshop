import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    //inicializar si hay algo guardado
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('quickshop_cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    //guardar
    useEffect(() => {
        localStorage.setItem('quickshop_cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart([...cart, product])
        alert('Producto agregado al carrito')
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const value = { cart, addToCart, removeFromCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}