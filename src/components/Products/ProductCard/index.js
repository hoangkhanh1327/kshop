import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/actions';
import { toast } from 'react-toastify';

const ProductCard = (props) => {
    const { item, style } = props;
    const dispatch = useDispatch();

    const convertCategory = useCallback(() => {
        let category;
        switch (item.category) {
            case "women's clothing":
                category = 'women';
                break;
            case "men's clothing":
                category = 'men';
                break;
            default:
                category = '';
        }

        return category;
    }, [item]);

    const handleAddToCart = () => {
        toast('Add 1 item to cart!');
        dispatch(cartActions.addItemToCart(item, 1));
    };

    return (
        <div
            className={classNames(
                'flex flex-col w-full h-full  rounded shadow-md max-h-[440px]',
                style
            )}
        >
            <div className="block relative basis-3/5 group">
                <img
                    src={item?.image}
                    alt={item?.title}
                    className="h-[264px] object-cover mx-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 rounded-t">
                    <Link
                        to={`/${convertCategory(item.category)}/${item.id}`}
                        className="capitalize block text-center border-4 border-purple px-4 py-2 rounded text-white"
                    >
                        view product
                    </Link>
                </div>
            </div>
            <div className="basis-2/5 bg-clothesCard flex flex-col py-4 px-2">
                <h3 className="text-center text-lg leading-none font-bold text-purple font-PoiretOne line-clamp-2">
                    {item?.title}
                </h3>
                <div className="flex flex-col flex-1 justify-between">
                    <h5 className="text-center my-3 text-xl">{`$${item?.price}`}</h5>
                    <button
                        onClick={() => handleAddToCart()}
                        className="capitalize w-1/2 mx-auto block bg-darkGray text-white text-sm rounded-sm px-[0.6rem] py-[0.3rem] hover:bg-purple cursor-pointer transition-all duration-500"
                    >
                        add to card
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.string,
};

ProductCard.defaultProps = {
    item: {},
    style: '',
};

export default ProductCard;
