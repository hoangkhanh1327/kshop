import axios from 'axios';

const getAllProducts = async () => {
    try {
        const data = await axios.get('https://fakestoreapi.com/products');
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getProductsByCategory = async (category) => {
    try {
        const data = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getSingleProduct = async (id) => {
    try {
        const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { getAllProducts, getProductsByCategory, getSingleProduct };
