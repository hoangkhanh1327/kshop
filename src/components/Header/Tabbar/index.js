import classNames from 'classnames';
const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    return (
        <nav className="flex md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
            {navigationData.map((route, index) => (
                <span
                    key={index}
                    className={classNames([
                        'text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center',
                        currentRoute === route.pathName &&
                            'bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700',
                    ])}
                    onClick={() => setCurrentRoute(route.pathName)}
                >
                    {route.pathName}
                </span>
            ))}
        </nav>
    );
};

export default Tabbar;
