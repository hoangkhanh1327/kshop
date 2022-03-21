import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConfirmModal } from '../components/Modals';
import { cartActions } from '../redux/actions';
import { CartSummary } from '../components/Cart';

const Checkout = () => {
    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.cartState);
    const [popup, togglePopup] = useState(false);

    const confirmedEmpty = () => {
        dispatch(cartActions.removeAllItemsInCart());
    };

    useEffect(() => {
        document.title = 'Checkout - KShop';
    }, []);

    if (popup)
        return (
            <ConfirmModal
                title="Do you want to delete all items in cart ?"
                cancelAction={togglePopup}
                show={popup}
                confirmAction={confirmedEmpty}
            />
        );

    return (
        <main className="bg-slate-50 py-16">
            <div className="container max-w-6xl">
                <div className="grid grid-cols-3">
                    <div className="col-span-2 bg-white p-5 shadow">
                        <div className="border-b-2 border-purple flex pb-4 justify-between">
                            <h2 className="font-bold text-2xl text-center text-purple mb-3 inline-block">
                                Shopping Cart
                            </h2>
                            <button
                                className="inline-block px-2 py-0.5 leading-none bg-red-400 rounded"
                                onClick={() => togglePopup(!popup)}
                            >
                                Empty Cart
                            </button>
                        </div>

                        {cartState.items.length > 0 ? (
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="w-2/5">Product Name</th>
                                        <th>Quantity</th>
                                        <th>Prices</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartState?.items.map((item) => (
                                        <tr key={item.id}>
                                            <td className="flex">
                                                <div className="px-2 w-1/5">
                                                    <img
                                                        src={item.image}
                                                        alt="product"
                                                        className="max-h-[150px] inline-block"
                                                    />
                                                </div>
                                                <div className="px-2 w-4/5 flex flex-col justify-between">
                                                    <h5 className="font-bold line-clamp-1">
                                                        {item.title}
                                                    </h5>
                                                    <span className="line-clamp-2">
                                                        {item.description}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-center">
                                                    {item.quantity}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="text-center">
                                                    {item.price}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="text-center">
                                                    {item.subTotalAmount}
                                                </p>
                                            </td>
                                            <td>Delete</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="w-full h-full flex items-center justify-between">
                                <div className='w-full'>
                                    <h3 className="text-2xl text-center w-full">
                                        You have not added any items into cart!!
                                    </h3>
                                    <Link
                                        to="/"
                                        className="text-center block text-purple font-bold"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-span-1 p-5">
                        <CartSummary />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
