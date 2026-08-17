import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "./redux/CartSlice";

function CartItem() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const totalCart = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

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

                        <p>Total: ${item.price * item.quantity}</p>

                        <button
                            onClick={() => { 
                                dispatch(decreaseQuantity(item.id));
                            }}
                        >
                            -
                        </button>

                        <span> {item.quantity} </span>

                        <button
                            onClick={() => {
                                dispatch(increaseQuantity(item.id));
                            }}
                        >
                            +
                        </button>

                        <button
                            onClick={() =>
                                dispatch(removeFromCart(item.id))
                            }
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}

            <h2>Total del carrito: ${totalCart}</h2>
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