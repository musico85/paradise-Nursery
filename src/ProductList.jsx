import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";

const plants = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: 25,
        category: "Plantas verdes",
        image: "/plants/monstera.jpg"
    },
    {
        id: 2,
        name: "Pothos",
        price: 18,
        category: "Plantas verdes",
        image: "/plants/pothos.jpg"
    },
    {
        id: 3,
        name: "Orquídea",
        price: 30,
        category: "Plantas con flor",
        image: "/plants/orchid.jpg"
    },
    {
        id: 4,
        name: "Anturio",
        price: 28,
        category: "Plantas con flor",
        image: "/plants/anthurium.jpg"
    },
    {
        id: 5,
        name: "Aloe Vera",
        price: 15,
        category: "Suculentas",
        image: "/plants/aloe.jpg"
    },
    {
        id: 6,
        name: "Echeveria",
        price: 12,
        category: "Suculentas",
        image: "/plants/echeveria.jpg"
    }
];

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const categories = [
        "Plantas verdes",
        "Plantas con flor",
        "Suculentas"
    ];

    return (
        <div>
            <h1>Paradise Nursery - Plants</h1>

            {categories.map((category) => (
                <section key={category}>
                    
                    <h2>{category}</h2>

                    <div className="products-grid">
                        {plants
                            .filter((plant) => plant.category === category)
                            .map((plant) => (
                                <div
                                    key={plant.id}
                                    className="plant-card"
                                >
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="plant-image"
                                    />

                                    <h3>{plant.name}</h3>

                                    <p>${plant.price}</p>
                                    <button
                                        onClick={() => dispatch(addToCart(plant))}
                                        disabled={cartItems.some((item) => item.id === plant.id)}
                                    >
                                        {cartItems.some((item) => item.id === plant.id)
                                            ? "Added to Cart"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                    </div>

                </section>
            ))}
        </div>
    );
}

export default ProductList;