import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { productActions } from '../redux/actions';
import { HiStar, HiOutlineShoppingCart } from 'react-icons/hi';
import { BestSeller } from '../components/Widgets';
import { RecentlyProduct, SimilarProducts } from '../components/Products';
import { productApi } from '../apis';
import { sizeMap } from '../constants';

const Single = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchData = async (id) => {
            const { data } = await productApi.getSingleProduct(id);
            dispatch(productActions.getProductsByCategory(data.category));
            dispatch(productActions.setRecentlyProduct(data));
            if (data) {
                setProduct(data);
                setLoading(false);
            }
        };
        if (params.itemId) {
            setLoading(true);
            fetchData(params.itemId);
        }
    }, [params, dispatch]);

    const consume = useCallback(() => {
        if (product) {
            return quantity * product.price;
        }
    }, [product, quantity]);

    const renderRating = (rate) => {
        let unRateState = 5 - Math.floor(rate);
        let rateStars = [];
        for (let i = 1; i <= rate; i++) {
            rateStars.push(
                <li className="inline-block w-5 h-6" key={`rated${i}`}>
                    <HiStar
                        className="w-5 h-6 mr-1 last-of-type:mr:0"
                        fill="yellow"
                    />
                </li>
            );
        }
        for (let i = 1; i <= unRateState; i++) {
            rateStars.push(
                <li className="inline-block w-5 h-6" key={`unRate${i}`}>
                    <HiStar className="w-5 h-6 mr-1 last-of-type:mr:0" />
                </li>
            );
        }

        return rateStars;
    };

    return (
        <section className="py-16">
            <div className="container max-w-6xl">
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-3 flex">
                        <div className="px-4 w-5/12">
                            {!loading ? (
                                <img
                                    src={product?.image}
                                    alt=""
                                    className="border"
                                />
                            ) : (
                                <div className="w-full h-full animate-pulse bg-gray-400" />
                            )}
                        </div>
                        <div className="px-4 w-7/12">
                            {!loading ? (
                                <>
                                    <h2 className="text-purple text-2xl leading-normal font-PoiretOne font-bold">
                                        {`${product?.title}`}
                                    </h2>
                                    <p className="text-gray-400 text-base leading-7">
                                        {`${product?.description}`}
                                    </p>
                                    <div className="py-4 flex items-center">
                                        <ul className="flex items-center">
                                            {renderRating(
                                                product?.rating?.rate
                                            )}
                                        </ul>
                                        <span className='before:content-["/"] before:px-3'>{`${product.rating.count} reviews`}</span>
                                    </div>
                                    <span className="block text-4xl text-purple">{`$ ${product?.price}`}</span>
                                    <div className="pt-8 pb-4 mb-3">
                                        <div className="flex justify-between items-center mb-3">
                                            <p className="text-lg">
                                                Size:
                                                <span className="font-bold ml-3">
                                                    {`${sizeMap[size]}`}{' '}
                                                </span>
                                            </p>
                                            <div>
                                                <button
                                                    onClick={() => setSize('M')}
                                                    className={classNames(
                                                        'uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 first-of-type:ml-0',
                                                        {
                                                            'bg-blue-200':
                                                                size === 'M',
                                                        }
                                                    )}
                                                >
                                                    M
                                                </button>
                                                <button
                                                    className={classNames(
                                                        'uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 first-of-type:ml-0',
                                                        {
                                                            'bg-blue-200':
                                                                size === 'L',
                                                        }
                                                    )}
                                                    onClick={() => setSize('L')}
                                                >
                                                    L
                                                </button>
                                                <button
                                                    className={classNames(
                                                        'uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 first-of-type:ml-0',
                                                        {
                                                            'bg-blue-200':
                                                                size === 'XL',
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        setSize('XL')
                                                    }
                                                >
                                                    XL
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mb-3">
                                            <p className="text-lg">Quantity:</p>
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        if (quantity === 0)
                                                            return;
                                                        setQuantity(
                                                            quantity - 1
                                                        );
                                                    }}
                                                    className={
                                                        'uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 first-of-type:ml-0'
                                                    }
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className={
                                                        'text-center uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 appearance-none'
                                                    }
                                                    value={quantity}
                                                    onChange={({ target }) =>
                                                        setQuantity(
                                                            target.value
                                                        )
                                                    }
                                                />

                                                <button
                                                    className={
                                                        'uppercase leading-none w-10 py-[12px] bg-gray-200 ml-2 first-of-type:ml-0'
                                                    }
                                                    onClick={() =>
                                                        setQuantity(
                                                            quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <p className="flex justify-between items-center text-lg">
                                            Total:
                                            <span className="font-bold">{`${consume()} $`}</span>
                                        </p>
                                    </div>

                                    <div>
                                        <button className="bg-purple text-white w-full rounded py-4 font-bold relative">
                                            Add To Card
                                            <HiOutlineShoppingCart className="w-5 h-5 inline-block ml-3" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="py-4 animate-pulse bg-gray-400 mb-3" />
                                    <div className="py-28 animate-pulse bg-gray-400 mb-3" />
                                    <div className="py-4 animate-pulse bg-gray-400 mb-3" />
                                    <div className="py-4 animate-pulse bg-gray-400 mb-3" />
                                    <div className="py-4 animate-pulse bg-gray-400 mb-3" />
                                </>
                            )}
                        </div>
                    </div>
                    <div>
                        <BestSeller />
                    </div>
                </div>
                <div className="p-4">
                    <SimilarProducts />
                </div>
                <div className="p-4">
                    <RecentlyProduct />
                </div>
            </div>
        </section>
    );
};

export default Single;
