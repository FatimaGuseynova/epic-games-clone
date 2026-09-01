import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GenresGet } from "../../../api/GenreGet";
import action from '../../../images2/action.png'
import actadv from '../../../images2/actadv.png'
import adv from '../../../images2/adv.png'
import casual from '../../../images2/casual.png'
import city from '../../../images2/city.png'
import coop from '../../../images2/coop.png'
import cross from '../../../images2/cross.png'
import dungeon from '../../../images2/dungeon.png'
import fantasy from '../../../images2/fantasy.png'
import horror from '../../../images2/horror.png'
import mac from '../../../images2/mac.png'
import achiv from '../../../images2/achiv.png'

function PopularGenres() {
    const images = [action, actadv, adv, casual, city, coop, cross, dungeon, fantasy, horror, mac, achiv]
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

                    {genres.slice(0,genres.length - 2).map((genre, index) => (
                        <div
                            key={genre.id}
                            className="px-2"
                        >
                            <div className="bg-[#202024] rounded-[14px] p-1 py-4 duration-150 hover:bg-[#43434adb]">
                                <div className="flex h-full overflow-hidden rounded-[4px]">
                                    <img
                                        className="w-[80%] mx-auto h-full object-contain"
                                        src={images[index]}
                                        alt={genre.name}
                                        draggable="false"
                                    />
                                </div>

                                <h3 className="text-white text-center mt-4 truncate">
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