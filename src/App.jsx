import { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import CartItem from "./CartItem";
import Header from "./Header";

function Home() {
    const [showProducts, setShowProducts] = useState(false);

    return (
        <div className="landing-page">
            <h1>Paradise Nursery</h1>

            <AboutUs />

            <button onClick={() => setShowProducts(true)}>
                Get Started
            </button>

            {showProducts && <ProductList />}
        </div>
    );
}

function Cart() {
    return <CartItem />;
}

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/paradise-Nursery">

                <Header />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/plants"
                        element={<ProductList />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                </Routes>

            </BrowserRouter>
        </Provider>
    );
}

export default App;