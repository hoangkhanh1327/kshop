import { Link } from 'react-router-dom';

// Components
import Cart from './Cart';
import Navbar from './Navbar';
import Tabbar from './Tabbar';

import useNavigation from '../../hooks/useNavigation';
import { routes } from '../../constants';

const Header = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
    return (
        <header>
            {/* Top Header */}
            <div className="py-4 border-b border-b-header">
                <div className="container max-w-6xl">
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="pl-[2.5rem]">
                            <Link
                                to="/"
                                className="block text-4xl font-bold leading-none font-PoiretOne text-darkGray"
                                tabIndex="-1"
                            >
                                Youth{' '}
                                <span className="text-purple">Fashion</span>
                            </Link>
                        </div>
                        <div className="">
                            <Cart />
                        </div>
                        {/* <div className="">
                            <span className="flex items-center text-base text-darkGray leading-none">
                                <HiDeviceMobile className="w-5 h-5 mr-1 inline-block relative" />
                                {'0902 364 524'}
                            </span>
                            <p
                                className="cursor-pointer text-cart text-sm ml-1"
                                onClick={() => console.log('call')}
                            >
                                {' Call me!'}
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* End Top Header */}

            <div className="container max-w-6xl">
                <div className="py-2">
                    <div>
                        <Navbar
                            navigationData={routes}
                            currentRoute={currentRoute}
                            setCurrentRoute={setCurrentRoute}
                        />
                        <Tabbar
                            navigationData={routes}
                            currentRoute={currentRoute}
                            setCurrentRoute={setCurrentRoute}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
