import React, { useEffect, useRef, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { GenresGet } from "../../../api/GenreGet";

function PopularGenres() {
    const [genres, setGenres] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const sliderRef = useRef(null);
    const startX = useRef(0);
    const scrollStart = useRef(0);

    useEffect(() => {
        const getGenres = async () => {
            const res = await GenresGet();
            setGenres(res);
        };

        getGenres();
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);

        startX.current = e.pageX;
        scrollStart.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        e.preventDefault();

        const distance = e.pageX - startX.current;

        sliderRef.current.scrollLeft =
            scrollStart.current - distance;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const next = () => {
        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const prev = () => {
        sliderRef.current.scrollBy({
            left: -sliderRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full px-[2%] lg:px-[5%] py-8">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-white text-[28px] font-extrabold">
                    Popular Genres
                </h2>

                <div className="flex gap-3">

                    <button
                        onClick={prev}
                        className="p-2 rounded-full bg-[#303034] flex items-center justify-center text-white hover:bg-[#3d3d42] transition"
                    >
                        <IoIosArrowBack size={16} />
                    </button>

                    <button
                        onClick={next}
                        className="p-2 rounded-full bg-[#303034] flex items-center justify-center text-white hover:bg-[#3d3d42] transition"
                    >
                        <IoIosArrowForward size={16} />
                    </button>

                </div>
            </div>

            <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`
                    overflow-x-auto
                    scrollbar-hide
                    select-none
                    cursor-grab
                    ${isDragging ? "cursor-grabbing" : ""}
                `}
            >

                <div className="        grid
grid-flow-col
auto-cols-[50%]
min-[725px]:auto-cols-[25%]">

                    {genres.slice(2).map((genre) => (

                        <div
                            key={genre.id}
                            className="
                            px-2
                            "
                        >

                            <div className="bg-[#202024] rounded-[14px] p-1  pb-5
                            duration-150
                            hover:bg-[#43434adb]">

                                <div className="flex h-[80px] overflow-hidden rounded-[4px] 
                         ">

                                    {genre.products?.slice(0, 3).map((product) => (

                                        <img
                                            key={product.id}
                                            src={product.coverImage?.url}
                                            alt={product.name}
                                            draggable="false"
                                            className="
                                                w-1/3
                                                h-full
                                                object-cover
                                                pointer-events-none
                                            "
                                        />

                                    ))}

                                </div>

                                <h3 className="text-white text-center  mt-7 truncate">
                                    {genre.name}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default PopularGenres;