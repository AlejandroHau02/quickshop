import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Nuestros Productos</h1>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home