import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

const shippingMethods = [
    {
        id: 1,
        name: 'Standard Delivery',
        cost: 100,
    },
    {
        id: 2,
        name: 'Express Delivery',
        cost: 400,
    },
];

const demoPromoCodes = ['1309', '2710'];

const CartSummary = () => {
    const cartState = useSelector((state) => state.cartState);
    const [shippingMethod, setShippingMethod] = useState(
        shippingMethods[0].cost
    );
    const [promoCode, setPromoCode] = useState();

    const handleEnterPromoCode = () => {
        if (promoCode) {
        }
    };

    const calculateTotalAmount = useCallback(() => {
        return cartState.totalAmount + parseFloat(shippingMethod);
    }, [promoCode, shippingMethod]);

    return (
        <>
            <h3 className="text-purple text-2xl capitalize pb-7 font-bold border-purple border-b-2">
                order summary
            </h3>
            <div className="flex items-center justify-between my-2 mb-4 text-lg">
                <span className="font-semiBold text-gray-700">
                    Items:{cartState.totalQuantity}
                </span>
                <span className="font-bold">{`$ ${cartState.totalAmount}`}</span>
            </div>
            <div className="my-4 mb-8 text-lg">
                <h5 className="uppercase">Shipping Method</h5>
                <select
                    className="w-full outline-none border-2 px-2 rounded"
                    defaultValue={shippingMethods[0]}
                    onChange={(e) => setShippingMethod(e.target.value)}
                >
                    {shippingMethods.map((method) => (
                        <option value={method.cost} key={method.id}>
                            {method.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-4 mb-8 text-lg pb-5 border-purple border-b-2">
                <h5 className="uppercase">promo code</h5>
                <input
                    className="outline-none px-2 w-full border-2 rounded text-base mb-2"
                    type="text"
                    value={promoCode}
                    placeholder="Type 1309 or 2710 to see discount"
                    onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                    className="bg-green-300 px-2 py-1 w-1/3 ml-auto font-bold rounded shadow capitalize"
                    onClick={() => handleEnterPromoCode()}
                >
                    apply code
                </button>
            </div>
            <div className="flex items-center justify-between text-2xl font-bold mb-4">
                <span>Total Cost</span>
                <span>{`$ ${calculateTotalAmount()}`}</span>
            </div>
            <button className="w-full bg-green-400 rounded py-4 text-xl font-bold uppercase">
                Checkout !
            </button>
        </>
    );
};

export default CartSummary;
