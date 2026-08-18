import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <header className="header">
            <nav>
                <Link to="/">Inicio </Link>
                <Link to="/plants">Plantas </Link>
                <Link to="/cart">
                    🛒 Carrito ({totalItems})
                </Link>
            </nav>
        </header>
    );
}

export default Header;