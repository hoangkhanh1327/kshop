import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckoutModal, ConfirmModal } from '../components/Modals';
import { cartActions } from '../redux/actions';
import { CartSummary } from '../components/Cart';
import CardTable from '../components/Cart/CartTable';

const Checkout = () => {
    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.cartState);
    const [popup, togglePopup] = useState(false);
    const [isCheckedOut, setCheckedOut] = useState(false);

    const confirmedEmpty = () => {
        dispatch(cartActions.removeAllItemsInCart());
    };

    useEffect(() => {
        document.title = 'KShop - Checkout';
    }, []);

    useEffect(() => {
        if (popup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [popup]);

    return (
        <main className="bg-slate-50 py-16">
            {popup ? (
                <ConfirmModal
                    title="Do you want to delete all items in cart ?"
                    cancelAction={togglePopup}
                    show={popup}
                    confirmAction={confirmedEmpty}
                />
            ) : null}
            {isCheckedOut ? <CheckoutModal /> : null}
            <div className="container max-w-6xl">
                <div className="grid grid-cols-3 gap-1">
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
                            <CardTable products={cartState.items} />
                        ) : (
                            <div className="w-full h-full flex items-center justify-between">
                                <div className="w-full">
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
                    <div className="col-span-1 p-5 shadow">
                        <CartSummary checkoutAction={setCheckedOut} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
