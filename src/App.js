import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LazyLoading from './utils/LazyLoading';

// Components
import { Footer, Header, BreadCrumb } from './components';

const Home = LazyLoading(() => import('./pages/home'));
const Products = LazyLoading(() => import('./pages/products'));
const Register = LazyLoading(() => import('./pages/register'));
const Single = LazyLoading(() => import('./pages/single'));
const Checkout = LazyLoading(() => import('./pages/checkout'));
const Cart = LazyLoading(() => import('./pages/cart'));

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <BreadCrumb />
                <Routes>
                    <Route path="/:categoryName">
                        <Route
                            path="/:categoryName/:itemId"
                            element={<Single />}
                        />
                        <Route index element={<Products />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
