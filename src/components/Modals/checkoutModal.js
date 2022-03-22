import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutModal = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const redirectToHomePage = setTimeout(() => {
            navigate('/');
        }, 8000);

        return () => clearTimeout(redirectToHomePage);
    }, [navigate]);
    return (
        <div className="fixed bg-[rgba(0,0,0,0.7)] top-0 left-0 w-screen h-screen z-[999]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 px-10 py-5 rounded">
                <h3 className="text-2xl text-purple select-none mb-3 border-b border-purple">
                    {`Checkout Successful`}
                </h3>
                <p className="text-lg mb-3">
                    Thank you for buying our products. Hope you please with our
                    services.
                </p>
                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-block mx-auto bg-green-300 rounded px-3 py-2"
                    >
                        Continue shopping.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
