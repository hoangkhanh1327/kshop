import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useNavigation = () => {
    const [route, setRoute] = useState('Home');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setRoute('home');
        } else {
            setRoute(location.pathname.replace(/\//, ''));
        }
    }, [location]);

    const selectAction = useCallback(
        (option) => {
            if (route === option) return;
            setRoute(option);
        },
        [route]
    );
    return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
