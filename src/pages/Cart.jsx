import { useCart } from '../context/CartContext'

function Cart() {
    const { cart, removeFromCart } = useCart()

    // SUMAR PRECIOS:
    // "acc" es el acumulador (empieza en 0)
    // "product" es cada producto que recorremos
    const total = cart.reduce((acc, product) => acc + Number(product.price), 0)

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '20px' }}>Tu Carrito ({cart.length})</h1>

            {cart.length === 0 ? (
                <p>No tienes productos aún.</p>
            ) : (
                <div>
                    {/* LISTA DE PRODUCTOS */}
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} width="50" alt={item.title} style={{ borderRadius: '5px' }} />

                            <div style={{ flexGrow: 1, marginLeft: '15px' }}>
                                <h4 style={{ margin: 0 }}>{item.title}</h4>
                                <p style={{ margin: 0, color: '#666' }}>${item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ background: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}

                    {/* TOTAL Y PAGAR */}
                    <div style={{ marginTop: '30px', borderTop: '2px solid #333', paddingTop: '20px', textAlign: 'right' }}>
                        <h2>Total a pagar: <span style={{ color: 'green' }}>${total.toFixed(2)}</span></h2>

                        <button className="btn btn-primary" style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Cart