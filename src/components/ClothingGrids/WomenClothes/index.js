import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard, LoadingCard } from '../../Products';
import imgStore from '../../../assets/img/11.jpg';
import classNames from 'classnames';

const WomenClothes = () => {
    const { products } = useSelector((state) => state.productState);

    const [firstItem, setFirstItem] = useState();
    const [restItems, setRestItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products.length > 0) {
            let items = products?.filter(
                (product) => product.category === "women's clothing"
            );
            setFirstItem(items.shift());
            setRestItem(items);
            setLoading(false);
        }
    }, [products]);

    return (
        <section>
            <div className="container max-w-6xl py-16">
                <div className="grid grid-cols-4 gap-8 py-4">
                    {!loading && firstItem ? (
                        <ProductCard
                            item={firstItem}
                            loading={loading}
                            fixedHeight="true"
                            // eslint-disable-next-line react/style-prop-object
                            style="animate-fadeLeftToRight"
                        />
                    ) : (
                        <LoadingCard />
                    )}

                    {/* Banner SaleOff */}
                    <div className="col-start-2 col-span-2 max-h-[440px] overflow-hidden animate-fadeDown">
                        <div className="relative">
                            <img
                                src={imgStore}
                                alt="saleOff"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 w-full text-center">
                                <h3 className="text-white text-6xl font-PoiretOne font-bold p-5 bg-shadowPurple">
                                    Flat 50% Offer
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* End Banner SaleOff */}

                    {!loading ? (
                        restItems?.map((item, index) => {
                            return (
                                <div
                                    className={classNames(['col-span-1'], {
                                        'animate-fadeRightToLeft':
                                            index === 3 ||
                                            index === 0 ||
                                            index === 4,
                                        'animate-fadeLeftToRight':
                                            index === 1 || index === 2,
                                    })}
                                    key={item.id}
                                >
                                    <ProductCard item={item} />
                                </div>
                            );
                        })
                    ) : (
                        <>
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WomenClothes;
