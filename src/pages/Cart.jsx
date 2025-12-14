import { useCart } from '../context/CartContext'

function Cart() {
    const { cart, removeFromCart } = useCart()

    return (
        <div style={{ padding: '20px' }}>
            <h1>Tu Carrito ({cart.length})</h1>

            {cart.length === 0 ? (
                <p>No tienes productos aún.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index}
                        style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid', padding: '10px' }}>
                        <img src={item.image} width="50" alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}
                            style={{ color: 'red' }}>
                            Eliminar
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart