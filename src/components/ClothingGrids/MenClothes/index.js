import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard, LoadingCard } from '../../Products';

const MenClothes = () => {
    const { products } = useSelector((state) => state.productState);

    const [menProducts, setMenProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products.length > 0) {
            let items = products?.filter(
                (product) => product.category === "men's clothing"
            );
            setMenProducts(items);
            setLoading(false);
        }
    }, [products]);

    return (
        <section>
            <div className="container max-w-6xl py-16">
                <div className="grid grid-cols-4 gap-8 py-4">
                    {!loading ? (
                        menProducts?.map((product) => {
                            return (
                                <div className="col-span-1" key={product.id}>
                                    <ProductCard item={product} />
                                </div>
                            );
                        })
                    ) : (
                        <>
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

export default MenClothes;
