import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../redux/actions';

const Filter = () => {
    const filterState = useSelector((state) => state.filterState);
    const dispatch = useDispatch();
    const [showPriceFilter, togglePriceFilter] = useState(true);

    return (
        <div className={classNames(['shadow transition-[height] ease-linear'])}>
            <button
                className="flex items-center justify-between py-3 px-5 w-full group z-10 text-2xl font-semibold bg-gray-50"
                onClick={() => togglePriceFilter(!showPriceFilter)}
            >
                <span>Price</span>
                {showPriceFilter ? (
                    <MdKeyboardArrowDown className="w-7 h-7 inline-block" />
                ) : (
                    <MdKeyboardArrowUp className="w-7 h-7 inline-block" />
                )}
            </button>
            <div
                className={classNames(
                    [
                        'px-6 py-3 pb-5 mt-2 bg-gray-50 animate-fadeDown duration-100',
                    ],
                    {
                        hidden: !showPriceFilter,
                        block: showPriceFilter,
                    }
                )}
            >
                <div className="flex items-center gap-x-5 relative lg:gap-x-3 mb-3">
                    <input
                        type="radio"
                        id="priceDesc"
                        value="0"
                        onChange={(e) =>
                            dispatch(filterActions.filterPrice(e.target.value))
                        }
                        className={classNames(
                            [
                                'appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer',
                            ],
                            {
                                'ring-2 bg-purple':
                                    filterState.filterPriceType === '0',
                            }
                        )}
                        checked={filterState.filterPriceType === '0'}
                    />
                    <label
                        htmlFor="priceDesc"
                        className="capitalize flex-1 cursor-pointer"
                    >
                        no filter
                    </label>
                </div>
                <div className="flex items-center gap-x-5 relative lg:gap-x-3 mb-3">
                    <input
                        type="radio"
                        id="priceASC"
                        value="2"
                        onChange={(e) =>
                            dispatch(filterActions.filterPrice(e.target.value))
                        }
                        className={classNames(
                            [
                                'appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer',
                            ],
                            {
                                'ring-2 bg-purple':
                                    filterState.filterPriceType === '2',
                            }
                        )}
                        checked={filterState.filterPriceType === '2'}
                    />
                    <label
                        htmlFor="priceASC"
                        className="capitalize flex-1 cursor-pointer"
                    >
                        descending
                    </label>
                </div>
                <div className="flex items-center gap-x-5 relative lg:gap-x-3 mb-3">
                    <input
                        type="radio"
                        id="price"
                        value="1"
                        className={classNames(
                            [
                                'appearance-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer',
                            ],
                            {
                                'ring-2 bg-purple':
                                    filterState.filterPriceType === '1',
                            }
                        )}
                        onChange={(e) =>
                            dispatch(filterActions.filterPrice(e.target.value))
                        }
                        checked={filterState.filterPriceType === '1'}
                    />
                    <label
                        htmlFor="price"
                        className="capitalize  flex-1 cursor-pointer"
                    >
                        ascending
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
