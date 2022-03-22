import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    useEffect(() => {
        document.title = '404 - NotFound';
    }, []);
    return (
        <section className="py-16">
            <div className="container max-w-6xl">
                <div className="w-ful text-center">
                    <h3 className="text-center">Something went wrong !!</h3>
                    <Link className='text-purple' to="/">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
