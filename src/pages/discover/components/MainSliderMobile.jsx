import React, { useEffect, useRef, useState } from "react";
import { ProductsGet } from "../../../api/ProductsGet";
import { Link } from "react-router";

function MainSliderMobile() {
    const [products, setProducts] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const startX = useRef(0);
    const scrollStart = useRef(0);
    useEffect(() => {
        const getProducts = async () => {
            const res = await ProductsGet();
            setProducts(res.data || []);
        };
        getProducts();
    }, []);

    const handleMouseDown = (e) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        startX.current = e.pageX;
        scrollStart.current = sliderRef.current.scrollLeft;
    };
    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const distance = e.pageX - startX.current;
        sliderRef.current.scrollLeft =
            scrollStart.current - distance;
    };

    const handleMouseUp = () => {

        if (!sliderRef.current) return;
        setIsDragging(false);
        const slider = sliderRef.current;
        const card = slider.querySelector("[data-card]");
        if (!card) return;
        const cardWidth = card.offsetWidth;

        const gap = 12;

        const index = Math.round(
            slider.scrollLeft / (cardWidth + gap)
        );

        slider.scrollTo({
            left: index * (cardWidth + gap),
            behavior: "smooth",
        });

        setActiveIndex(index);

    };

    const handleScroll = () => {

        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        const card = slider.querySelector("[data-card]");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        const gap = 12;

        const index = Math.round(
            slider.scrollLeft / (cardWidth + gap)
        );

        setActiveIndex(index);

    };

    const goToSlide = (index) => {

        if (!sliderRef.current) return;

        const slider = sliderRef.current;

        const card = slider.querySelector("[data-card]");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        const gap = 12;

        slider.scrollTo({
            left: index * (cardWidth + gap),
            behavior: "smooth",
        });

        setActiveIndex(index);

    };

    return (
        <div className="min-[768px]:hidden">
            <div className="bg-[#121216]">
                <section className="w-full px-[5%] py-8">
                    <div
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onScroll={handleScroll}
                        className={`
                            overflow-x-auto
                            scrollbar-hide
                            select-none
                            touch-pan-x
                            ${isDragging
                                ? "cursor-grabbing snap-none"
                                : "cursor-grab snap-x snap-mandatory"}
                        `}
                    >
                        <div className="flex gap-3">
                            {products.slice(0, 10).map((item, index) => (
                                <div
                                    data-card
                                    key={item.id || index}
                                    className=" flex-none
                                        snap-start
                                        w-[90%]
                                        min-[500px]:w-[70%] "
                                >
                                    <Link to="/detail" state={{ product: item }} className="relative overflow-hidden rounded-[12px] bg-[#202024]">
                                        <img
                                            src={item.coverImage?.url}
                                            alt={item.name}
                                            draggable="false"
                                            className="
                                                w-full
                                                aspect-[0.75]
                                                object-cover
                                                pointer-events-none
                                            "
                                        />

                                        <div className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black
                                            via-black/10
                                            to-transparent
                                        " />

                                        <div className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-4
                                        ">

                                            <h3 className="
                                                text-white
                                                text-[17px]
                                                font-semibold
                                                py-2
                                            ">
                                                {item.name}
                                            </h3>

                                            <p className="
                                                text-white
                                                text-[16px]
                                            ">
                                                {item.description}
                                            </p>

                                            <p className="
                                                text-white
                                                text-[14px]
                                                mt-5
                                                font-medium
                                            ">
                                                ${item.price}
                                            </p>

                                        </div>

                                    </Link>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-3 mt-4">

                        {products.slice(0, 10).map((_, index) => (

                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`
                                    rounded-full
                                    transition-all
                                    duration-200
                                    ${activeIndex === index
                                        ? "w-[5px] h-[5px] bg-white"
                                        : "w-[4px] h-[4px] bg-[#666]"
                                    }
                                `}
                            />

                        ))}

                    </div>

                </section>

            </div>

        </div>
    );
}

export default MainSliderMobile;