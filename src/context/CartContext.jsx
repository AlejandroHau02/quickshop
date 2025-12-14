import { createContext, useState, useContext } from 'react'

// 1- Crear el contexto (nube donde viven los datos)
const CartContext = createContext();

// 2- Crear el proveedor (componente que reparte los datos)
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Funcion para agregar un producto al carrito
    const addToCart = (product) => {
        setCart([...cart, product])
        alert("Producto agregado!")
    }

    // FUnction para borrar
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const value = {
        cart,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

// 3- crear un "hook" para usarlo facil
export function useCart() {
    return useContext(CartContext)
}