import { Suspense, lazy } from 'react';

// Add loading effect to a component
const LazyLoadingComponent = (importComponent) => {
    const LazyComponent = lazy(importComponent);
    return (props) => (
        <Suspense fallback={<div className="animate-spin w-full h-full"></div>}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default LazyLoadingComponent;
