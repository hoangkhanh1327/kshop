import CartItem from './CartItem';

const CardTable = ({ products }) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="text-lg">
                    <th className="w-2/5 py-5">Product Name</th>
                    <th className="py-5">Quantity</th>
                    <th className="py-5">Prices</th>
                    <th className="py-5">Total</th>
                    <th className="py-5"></th>
                </tr>
            </thead>
            <tbody>
                {products?.map((item) => (
                    <CartItem product={item} key={item.id} />
                ))}
            </tbody>
        </table>
    );
};

export default CardTable;
