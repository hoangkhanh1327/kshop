import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../redux/actions';

import { ProductCard, LoadingCard } from '../components/Products';

const ProductCatalogPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.productState);

    useEffect(() => {
        if (params.categoryName) {
            switch (params.categoryName) {
                case 'men':
                    dispatch(
                        productActions.getProductsByCategory("men's clothing")
                    );
                    break;
                case 'women':
                    dispatch(
                        productActions.getProductsByCategory("women's clothing")
                    );
                    break;
                default:
                    dispatch(productActions.getAllProducts());
            }
        }
    }, [params, dispatch]);

    return (
        <main>
            <section className="py-16">
                <div className="container max-w-6xl">
                    <h2 className="text-purple text-5xl text-center mb-4 font-PoiretOne font-bold">
                        Products
                    </h2>
                    <div className="relative grid grid-cols-4 gap-8">
                        <div className="col-span-3 py-4 grid grid-cols-3 gap-8">
                            {!loading ? (
                                products?.map((product, index) => (
                                    <div key={index} className="col-span-1">
                                        <ProductCard
                                            item={product}
                                            fixedHeight
                                        />
                                    </div>
                                ))
                            ) : (
                                <>
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                    <LoadingCard />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductCatalogPage;
