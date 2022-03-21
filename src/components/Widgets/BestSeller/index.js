import importAllImages from '../../../utils/getMultipleImages';
// Get all women clothes from local folder.
const images = importAllImages(
    require.context('../../../assets/img', false, /pr(.*)\.jpg$/)
);

const bestSellerData = [
    {
        productName: 'Lorem ipsum dolor sitamet consectetuer',
        price: '40.00',
        productImg: 'pr',
    },
    {
        productName: 'Lorem ipsum dolor sitamet consectetuer',
        price: '40.00',
        productImg: 'pr1',
    },
    {
        productName: 'Lorem ipsum dolor sitamet consectetuer',
        price: '40.00',
        productImg: 'pr2',
    },
    {
        productName: 'Lorem ipsum dolor sitamet consectetuer',
        price: '40.00',
        productImg: 'pr3',
    },
];

const BestSeller = () => {
    return (
        <div>
            <h3 className="text-purple text-2xl font-PoiretOne font-bold capitalize">
                best seller
            </h3>
            {bestSellerData.map((product, index) => (
                <div className="py-4 flex justify-between" key={index}>
                    <div className="w-1/4">
                        <img src={images[`${product.productImg}.jpg`]} alt="product" />
                    </div>
                    <div className="w-4/6">
                        <h6 className="text-base">{product.productName}</h6>
                        <span className="text-purple text-xl pt-[0.3rem]">{`$${product.price}`}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default BestSeller;
