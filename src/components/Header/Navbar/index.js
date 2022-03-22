import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    return (
        <nav className="hidden md:flex  px-8 h-[4.5rem]">
            {/* togging nav */}
            <ul className="flex flex-row self-end h-12 mx-auto">
                {navigationData.map((route, index) => (
                    <li
                        key={index}
                        className={classNames([
                            'w-[5.5rem] text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center',
                            currentRoute === route.routeName &&
                                'text-gray-700 border-b-[3px] border-gray-700 bg-gradient-to-b from-white to-gray-100',
                        ])}
                    >
                        <Link
                            className="block w-full h-full text-center capitalize"
                            to={route.routePath}
                            onClick={() => setCurrentRoute(route.routeName)}
                        >
                            {route.routeName}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
