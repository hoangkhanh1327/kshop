import { cartActions } from '../../redux/actions';
import { FaTrashAlt } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const calculateSubTotal = useCallback(() => {
        return Math.round(product.price * product.quantity);
    }, [product]);
    return (
        <tr className="border-b">
            <td className="flex my-3">
                <div className="px-1 w-1/5">
                    <img
                        src={product.image}
                        alt="product"
                        className="max-h-[150px] inline-block"
                    />
                </div>
                <div className="px-2 w-4/5 flex flex-col justify-between">
                    <h5 className="font-bold line-clamp-1">{product.title}</h5>
                    <span className="line-clamp-2">{product.description}</span>
                </div>
            </td>
            <td>
                <div className="flex mx-auto items-center justify-evenly">
                    <button
                        onClick={() =>
                            dispatch(cartActions.subItemQuantity(product.id))
                        }
                        className="px-2 bg-gray-100"
                        disabled={product.quantity === 1}
                    >{`-`}</button>
                    <p className="text-center px-2">{product.quantity}</p>
                    <button
                        onClick={() =>
                            dispatch(cartActions.addQuantity(product.id))
                        }
                        className="px-2 bg-gray-100"
                    >{`+`}</button>
                </div>
            </td>
            <td>
                <p className="text-center">{product.price}</p>
            </td>
            <td>
                <p className="text-center">{calculateSubTotal()}</p>
            </td>
            <td>
                <button
                    onClick={() =>
                        dispatch(cartActions.removeItemFromCart(product.id))
                    }
                    className="text-center"
                >
                    <FaTrashAlt className="mx-auto inline-block" />
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
