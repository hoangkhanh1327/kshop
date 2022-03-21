import { useState, useEffect } from 'react';
import Swipe from 'react-easy-swipe';

import bg1 from '../../assets/img/1.jpg';
import bg2 from '../../assets/img/2.jpg';
import bg3 from '../../assets/img/3.jpg';

const data = [
    {
        img: bg1,
        title: 'men & women',
        subTitle: 'trousers & chinos',
        saleOff: '50',
    },
    {
        img: bg2,
        title: 'men & women',
        subTitle: 'trousers & chinos',
        saleOff: '50',
    },
    {
        img: bg3,
        title: 'men & women',
        subTitle: 'trousers & chinos',
        saleOff: '50',
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [paused, setPaused] = useState(false);

    const preSlide = () => {
        let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    useEffect(() => {
        const changeSlide = setInterval(() => {
            if (paused === false) {
                let newSlide =
                    currentSlide === data.length - 1 ? 0 : currentSlide + 1;
                setCurrentSlide(newSlide);
            }
        }, 5000);

        return () => clearInterval(changeSlide);
    }, [currentSlide, paused]);

    return (
        <div className="overflow-hidden">
            <Swipe
                onSwipeLeft={() => nextSlide()}
                onSwipeRight={() => preSlide()}
            >
                {data.map((slide, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? 'block relative'
                                    : 'hidden'
                            }
                            key={index}
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        >
                            <img
                                src={slide.img}
                                alt="K-Shop Banner"
                                className="block relative w-full h-auto object-cover border-none"
                            />
                            <div className="absolute top-44 left-80">
                                <h2 className="text-6xl uppercase text-purple font-bold font-PoiretOne">
                                    {slide.title}
                                </h2>
                                <h3 className="m-4 text-3xl font-Roboto text-white text-right capitalize">
                                    {slide.subTitle}
                                </h3>
                                <h4 className="text-6xl text-center text-white mt-16 uppercase font-bold font-PoiretOne">{`upto ${slide.saleOff}%`}</h4>
                                <p className="uppercase text-purple m-4 text-right text-3xl">
                                    offer
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Swipe>
        </div>
    );
};

export default Slider;
