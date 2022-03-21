import { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState();
    return (
        <>
            <input
                type="email"
                value={email}
                onChange={({ e }) => setEmail(e.target.value)}
                className="w-[65%] text-gray outline-none p-[0.6rem] bg-none border border-gray box-border text-base leading-none inline-block"
            />
            <button className="ml-1 uppercase w-[30%] text-[0.9rem] bg-dark py-[0.8rem] text-white box-border border-none outline-none leading-none">
                subscribe
            </button>
        </>
    );
};

export default SubscribeForm;
