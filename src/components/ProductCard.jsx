import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <img
                src={product.image}
                alt={product.title}
            />

            <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.title}</h3>
                <p style={{ color: 'green', fontWeight: 'bold' }}>${product.price}</p>
            </div>

            <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Agregar al carrito
            </button>

            <Link to={`/product/${product.id}`}>
                Ver detalles
            </Link>
        </div>
    )
}

export default ProductCard;