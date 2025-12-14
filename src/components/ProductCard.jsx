import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
    const { addToCart } = useCart();
    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', width: '200px' }}>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <h3>{product.title}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${product.price}</p>

            <button onClick={() => addToCart(product)}
                style={{ marginRight: '10px', background: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
                Agregar al carrito
            </button>

            <Link to={`/product/${product.id}`}>
                Ver detalles
            </Link>
        </div>
    )
}

export default ProductCard;