import classNames from 'classnames';
import salesData from '../../../constants/salesData';

const SaleClothes = () => {
    return (
        <section>
            <div className="container max-w-6xl">
                <div className="grid grid-cols-3 gap-0">
                    {salesData.map((item, index) => (
                        <div
                            key={index}
                            className={classNames(['col-span-1'], {
                                'animate-fadeLeftToRight':
                                    index === 0 || index === 3,
                                'animate-fadeRightToLeft':
                                    index === 2 || index === 5,
                                'animate-fadeUp': index === 4,
                                'animate-fadeDown': index === 1,
                            })}
                        >
                            <div className="relative group overflow-hidden translate3d transition-all duration-600 ease-in-out translate3d content-grid-effect">
                                <div className="relative z-0 scale-100 transition-all duration-2200 ease-in-out w-full h-full group-hover:scale-150 grid-effect-left backface-hidden">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            `/resources/images/${item.imgUrl}.jpg`
                                        }
                                        alt="sale productions"
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div className="absolute top-0 left-0 w-full h-full grid-effect-right">
                                    <div className="z-[2] opacity-0 group-hover:opacity-100 float-left transition-all duration-500 ease-in-out block relative p-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <h4 className="text-purple text-4xl uppercase">{`${item.offer}% offer`}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SaleClothes;
