import { useRef } from 'react';

const ConfirmModal = ({ show, cancelAction, confirmAction, title }) => {
    let contentRef = useRef();
    const handleClick = (e) => {
        if (e.target !== contentRef.current) {
            cancelAction(!show);
        }
    };
    return (
        <div
            className="fixed bg-[rgba(0,0,0,0.7)] top-0 left-0 w-screen h-screen z-[999]"
            onClick={(e) => handleClick(e)}
        >
            <div
                ref={contentRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 px-10 py-5 rounded"
            >
                <h3 className="text-2xl text-purple select-none mb-3">{title}</h3>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-red-400 rounded px-4 py-1"
                        onClick={() => cancelAction(!show)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-400 rounded px-4 py-1"
                        onClick={() => confirmAction()}
                    >
                        Sure
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmModal.defaultProps = {
    title: '',
};

export default ConfirmModal;
