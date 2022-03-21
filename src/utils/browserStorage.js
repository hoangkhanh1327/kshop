const KEY = 'redux';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log('cant get data from localStorage');
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (error) {
        console.log('cant save data to localStorage');
    }
};
