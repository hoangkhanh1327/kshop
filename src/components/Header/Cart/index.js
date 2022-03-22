import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartImg from '../../../assets/img/cart.png';

const Cart = () => {
    const { totalQuantity } = useSelector((state) => state.cartState);

    return (
        <Link
            to="/checkout"
            className="relative text-base leading-none text-cart font-medium flex items-center justify-between"
            tabIndex="-1"
        >
            <img src={CartImg} alt="cart" className="ml-1 inline-block" />

            <div className="absolute -top-2 -right-2 px-1 py-0.5 bg-yellow-400 text-black rounded-full text-xs leading-none">
                {totalQuantity}
            </div>
        </Link>
    );
};

export default Cart;
