import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingCard from '../LoadingCard';
import { Link, useLocation } from 'react-router-dom';

const RecentlyProduct = () => {
    const { recentlyViewProducts } = useSelector((state) => state.productState);
    const location = useLocation();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (recentlyViewProducts.length > 0) {
            const fourthFirstItemInArray = recentlyViewProducts.slice(0, 4);
            setData(fourthFirstItemInArray);
            setLoading(false);
        }
    }, [recentlyViewProducts]);
    return (
        <>
            <h3 className="text-gray-700 font-semibold text-2xl mb-5">
                Recently Products
            </h3>

            <div className="hidden py-8 md:grid grid-cols-4 gap-2">
                {!loading ? (
                    data?.map((product) => (
                        <Link
                            to={location.pathname.replace(/\d+/, product.id)}
                            key={product.id}
                            className="col-span-1 flex flex-col overflow-hidden last-of-type:mr-0 shadow"
                        >
                            <div className="basis-3/5 ">
                                <img
                                    src={product.image}
                                    alt=""
                                    className="h-[264px] object-cover mx-auto bg-transparent"
                                />
                            </div>
                            <div className="basis-2/5 px-4 py-4 bg-gray-100 ">
                                <h5 className="text-lg leading-none text-dark font-semibold line-clamp-1 w-full">
                                    {product.title}
                                </h5>
                                <div className="text-right my-2">
                                    <span className="text-base text-right text-purple">
                                        {`$ ${product.price}`}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                )}
            </div>
        </>
    );
};

export default RecentlyProduct;
