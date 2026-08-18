import "./App.css";
import AboutUs from "./AboutUs";
import plants from "./assets/plants2.jpg";
import ProductList from "./ProductList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import CartItem from "./CartItem";
import Header from "./Header";

function Home() {
    return (
        <div
            className="landing-page"
            style={{ backgroundImage: `url(${plants})` }}
        >
            <h1>Paradise Nursery</h1>

            <AboutUs />

            <Link to="/plants">
                <button>Get Started</button>
            </Link>
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