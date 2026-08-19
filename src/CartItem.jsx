import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    updateQuantity,
    removeItem
} from "./redux/CartSlice";

function CartItem() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalCost = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce(
            (total, item) => total + calculateTotalCost(item),
            0
        );
    };

    const handleIncrement = (item) => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
            })
        );
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                })
            );
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.image}
                            alt={item.name}
                            width="100"
                        />

                        <h3>{item.name}</h3>

                        <p>Price: ${item.price}</p>

                        <p>Quantity: {item.quantity}</p>

                        <p>
                            Total: ${calculateTotalCost(item)}
                        </p>

                        <button
                            onClick={() => handleDecrement(item)}
                            disabled={item.quantity === 1}
                        >
                            -
                        </button>

                        <span> {item.quantity} </span>

                        <button
                            onClick={() => handleIncrement(item)}
                        >
                            +
                        </button>

                        <button
                            className="cart-item-delete"
                            onClick={() => dispatch(removeItem(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}

            <h2>
                Total del carrito: ${calculateTotalAmount()}
            </h2>

            <div>
                <Link to="/plants">
                    <button>Continue Shopping</button>
                </Link>

                <button onClick={() => alert("Próximamente")}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CartItem;