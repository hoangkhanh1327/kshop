import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { routes } from '../../constants';

const BreadCrumb = () => {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState();
    useEffect(() => {
        const result = routes.filter(
            (route) => route.routePath === location.pathname
        );
        setCurrentRoute(result[0]);
    }, [location]);

    if (currentRoute?.routeName?.toLowerCase() === 'home') return null;

    return (
        <div className="py-1.5 bg-breadcrumb">
            <div className="container max-w-6xl">
                <ol className="hidden md:block px-2 py-4 rounded">
                    <li className="text-gray-400 text-base inline-block">
                        <HiHome className="inline-block mr-4" fill="#fa03bb" />
                        <Link to="/" className="text-purple">
                            Home
                        </Link>
                    </li>

                    <li className='relative capitalize text-gray-400 text-base inline-flex items-center before:content-["/"] before:block before:relative before:px-4'>
                        {currentRoute?.routeName}
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default BreadCrumb;
