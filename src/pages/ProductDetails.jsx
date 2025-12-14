import { useParams } from "react-router-dom"
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductDetails() {
    const { id } = useParams() //id de la url

    //buscar producto en la lista (convertir a numero)
    const product = products.find(p => p.id === parseInt(id))

    const { addToCart } = useCart()

    if (!product) {
        return <h2>Producto no encontrado</h2>
    }

    return (
        <div style={{ padding: '20px', display: 'flex', gap: '30px' }}>
            {/* izquierda: imagen */}
            <img
                src={product.image}
                alt={product.title}
                style={{ width: '300px', height: '300px', objectFit: 'contain' }}
            />

            {/* derecha: info */}
            <div>
                <h1>{product.title}</h1>
                <h2 style={{ color: 'green' }}>${product.price}</h2>
                <p>{product.description}</p>
                <p><strong>Categoría:</strong>{product.category}</p>

                <button
                    onClick={() => addToCart(product)}
                    style={{ background: 'black', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}
                >Agregar al carrito
                </button>

            </div>
        </div>
    )
}

export default ProductDetails