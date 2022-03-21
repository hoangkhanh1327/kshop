import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Banner } from '../components';
import {
    WomenClothes,
    SaleClothes,
    MenClothes,
} from '../components/ClothingGrids';
import { productActions } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProducts());
    }, [dispatch]);
    return (
        <>
            <Banner />
            <WomenClothes />
            <SaleClothes />
            <MenClothes />
        </>
    );
};

export default Home;
