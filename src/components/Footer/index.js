import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Components
import { SubscribeForm } from '../Forms';

// Icons
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlus,
    FaLinkedin,
} from 'react-icons/fa';

import { footerData } from '../../constants';

const Footer = () => {
    let iconStyle = classnames('w-12 h-12 mr-2');
    let h3Style = classnames('text-4xl text-purple mb-2 font-PoiretOne font-bold');

    return (
        <footer className="border-t border-gray">
            {/* Footer Top */}
            <div className="container max-w-6xl">
                <div className="flex justify-between py-12">
                    {/* Social Links */}
                    <div className="w-1/2 px-4">
                        <h3 className={h3Style}>
                            Follow Me On
                        </h3>
                        <div>
                            <ul>
                                <li className="inline-block">
                                    <FaFacebook className={iconStyle} />
                                </li>
                                <li className="inline-block">
                                    <FaTwitter className={iconStyle} />
                                </li>
                                <li className="inline-block">
                                    <FaGooglePlus className={iconStyle} />
                                </li>
                                <li className="inline-block">
                                    <FaLinkedin className={iconStyle} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Social Links */}

                    {/* Subscribe Form */}
                    <div className="w-1/2 px-4">
                        <h3 className={h3Style}>
                            Newsletter
                        </h3>

                        <div className=" box-border">
                            <SubscribeForm />
                        </div>
                    </div>
                    {/* End Subscribe Form */}

                </div>
            </div>
            {/* End Footer Top */}

            {/* Footer Bottom */}
            <div className="py-16 bg-dark">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-4 gap-4">
                        {/* Footer Content */}
                        {footerData.map((item, index) => (
                            <div className="col-span-1" key={index}>
                                <h6 className="text-2xl capitalize font-PoiretOne text-purple font-bold mb-6">
                                    {item.title}
                                </h6>
                                <ul className="text-lightGray">
                                    {item.links.map((link, index1) => (
                                        <li
                                            key={index1}
                                            className="py-[0.2rem]"
                                        >
                                            <Link
                                                to={link.url}
                                                className="text-sm hover:text-white hover:pl-1 transition-all duration-200 ease-linear"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* End Footer Content */}

                        {/* Contact Information */}
                        <div className="col-span-1">
                            <h6 className="text-2xl capitalize font-PoiretOne text-purple font-bold mb-6">
                                our address
                            </h6>
                            <ul className="text-lightGray">
                                <li className="text-sm leading-normal py-[0.2rem]">
                                    <HiLocationMarker className="w-7 h-7 inline-block mr-2 border-2 rounded-full p-1" />
                                    {`6/1 Thanh Hoa, Hn3, Trang Bom, Dong Nai.`}
                                </li>
                                <li className="text-sm leading-normal py-[0.2rem]">
                                    <HiMail className="w-7 h-7 inline-block mr-2 border-2 rounded-full p-1" />
                                    {`khanhth1309@gmail.com`}
                                </li>
                                <li className="text-sm leading-normal py-[0.2rem]">
                                    <HiPhone className="w-7 h-7 inline-block mr-2 border-2 rounded-full p-1" />
                                    {`0902 364 524`}
                                </li>
                            </ul>
                        </div>
                        {/* End Connect Information */}

                        <p className="mt-8 text-lightGray text-center text-base">
                            {`© 2022 Youth Fashion`}
                        </p>
                    </div>
                </div>
            </div>
            {/* End Footer Bottom */}
        </footer>
    );
};

export default Footer;
