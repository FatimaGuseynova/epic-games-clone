import React, { useEffect, useRef, useState } from "react";

import { ProductsGet } from "../../../api/ProductsGet";
import savemore from "../../../images2/savemore.avif";
import { Link } from "react-router";

function DealsOfWeek() {
    const [products, setProducts] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const sliderRef = useRef(null);
    const startX = useRef(0);
    const scrollStart = useRef(0);
    const hasMoved = useRef(false);

    useEffect(() => {
        const responsive = async () => {
            const res = await ProductsGet();

            setProducts(
                (res.data || []).filter(
                    item => item?.events?.[0]?.name === "Deals of the week"
                )
            );
        };

        responsive();
    }, []);

    const handleMouseDown = (e) => {
        if (e.button !== 0) return;

        setIsDragging(true);
        hasMoved.current = false;
        startX.current = e.pageX;
        scrollStart.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        e.preventDefault();

        const distance = e.pageX - startX.current;

        if (Math.abs(distance) > 5) {
            hasMoved.current = true;
        }

        sliderRef.current.scrollLeft = scrollStart.current - distance;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (e) => {
        if (hasMoved.current) {
            e.preventDefault();
            e.stopPropagation();
            hasMoved.current = false;
        }
    };

    return (
        <div className="bg-[#121216] py-23">
            <div className="w-[93%] min-[750px]:w-[90%] min-[1100px]:w-[77%] mx-auto">

                <div className="hidden min-[750px]:flex gap-3">
                    {products.slice(0, 2).map((item, index) => (
                        <Link
                            key={index}
                            to="/detail"
                            state={{ product: item }}
                            className="flex-1 relative min-w-0"
                        >
                            <div
                                className="shrink-0  flex items-end text-center w-full bg-no-repeat h-[200px] bg-center bg-contain rounded-[6px]"
                                style={{
                                    backgroundImage: `url(${item?.productLogo?.url})`
                                }}
                            >
                                <div className="w-full rounded-b-[6px] py-1 h-fit absolute bottom-20 bg-gradient-to-r from-[#160FF3] via-[#4C08F9] to-[#7A03FD]">
                                    <h5 className="text-[13px]  font-semibold">
                                        {item?.events?.[0]?.name}
                                    </h5>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[19px] py-3 font-semibold">
                                    {item?.name}
                                </h4>

                                <h5
                                    className={`${item?.discount > 0 ? "flex" : "hidden"
                                        } items-center gap-2`}
                                >
                                    <div className="bg-[#26BAFE] px-1 py-0.5 text-black text-[14px] rounded-2xl">
                                        {item?.discount > 0 &&
                                            `-${Math.round(
                                                100 -
                                                (item.discount / item.price) * 100
                                            )}%`}
                                    </div>

                                    <div className="text-[15px] line-through text-[#ACA294]">
                                        ${item?.price}
                                    </div>

                                    <div className="text-white text-[15px]">
                                        ${item?.discount}
                                    </div>
                                </h5>
                            </div>
                        </Link>
                    ))}

                    <div className="flex-1 min-w-0">
                        <img
                            className="w-full h-[200px] object-contain bg-center rounded-[6px]"
                            src={savemore}
                            alt="discounts"
                        />

                        <h4 className="text-[19px] py-3 pt-0 font-semibold">
                            Check out all the deals for this week.
                        </h4>

                        <Link
                            className="bg-[#343437] px-4 py-3 text-[15px] font-semibold rounded-[8px] duration-150 hover:bg-[#626269]"
                            to="/browse"
                        >
                            Browse
                        </Link>
                    </div>
                </div>

                <div className="min-[750px]:hidden overflow-hidden">
                    <div
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className={`overflow-x-auto scrollbar-hide select-none cursor-grab ${isDragging ? "cursor-grabbing" : ""
                            }`}
                    >
                        <div className="grid grid-flow-col auto-cols-[88%] gap-3">
                            {products.slice(0, 2).map((item, index) => (
                                <Link
                                    key={index}
                                    to="/detail"
                                    state={{ product: item }}
                                    draggable="false"
                                    onClick={handleClick}
                                    className="relative"
                                >
                                    <div
                                        className="flex items-end text-center w-full h-[200px] bg-center bg-cover rounded-[6px]"
                                        style={{
                                            backgroundImage: `url(${item?.productLogo?.url})`
                                        }}
                                    >
                                        <div className="w-full absolute bottom-18 rounded-b-[6px] py-1 h-fit bg-gradient-to-r from-[#160FF3] via-[#4C08F9] to-[#7A03FD]">
                                            <h5 className="text-[13px] font-semibold">
                                                {item?.events?.[0]?.name}
                                            </h5>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[19px] py-3 font-semibold">
                                            {item?.name}
                                        </h4>

                                        <h5
                                            className={`${item?.discount > 0
                                                    ? "flex"
                                                    : "hidden"
                                                } items-center gap-2`}
                                        >
                                            <div className="bg-[#26BAFE] px-1 py-0.5 text-black text-[14px] rounded-2xl">
                                                {item?.discount > 0 &&
                                                    `-${Math.round(
                                                        100 -
                                                        (item.discount /
                                                            item.price) *
                                                        100
                                                    )}%`}
                                            </div>

                                            <div className="text-[15px] line-through text-[#ACA294]">
                                                ${item?.price}
                                            </div>

                                            <div className="text-white text-[15px]">
                                                ${item?.discount}
                                            </div>
                                        </h5>
                                    </div>
                                </Link>
                            ))}

                            <div>
                                <img
                                    className="w-full h-[200px] object-cover rounded-[6px]"
                                    src={savemore}
                                    alt="discounts"
                                />

                                <h4 className="text-[19px] py-3 font-semibold">
                                    Check out all the deals for this week.
                                </h4>

                                <Link
                                    className="bg-[#343437] px-4 py-3 text-[15px] font-semibold rounded-[8px] duration-150 hover:bg-[#626269]"
                                    to="/browse"
                                >
                                    Browse
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-3">
                        {products.map((_, index) => (
                            <div
                                key={index}
                                className="w-[3px] h-[3px] rounded-full bg-[#777]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealsOfWeek;