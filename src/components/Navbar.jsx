import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
            <Link to="/">Inicio</Link>
            <Link to="/cart">Carrito</Link>
        </nav>
    )
}
export default Navbar