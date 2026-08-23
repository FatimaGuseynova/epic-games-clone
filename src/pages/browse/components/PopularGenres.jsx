import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PopularGenres() {

    const genres = [
        {
            name: "Action Games",
            images: [
                "/images/action1.jpg",
                "/images/action2.jpg",
                "/images/action3.jpg",
            ],
        },
        {
            name: "Action-Adventure Games",
            images: [
                "/images/adventure1.jpg",
                "/images/adventure2.jpg",
                "/images/adventure3.jpg",
            ],
        },
        {
            name: "Adventure Games",
            images: [
                "/images/adventure4.jpg",
                "/images/adventure5.jpg",
                "/images/adventure6.jpg",
            ],
        },
        {
            name: "Casual Games",
            images: [
                "/images/casual1.jpg",
                "/images/casual2.jpg",
                "/images/casual3.jpg",
            ],
        },
        {
            name: "RPG Games",
            images: [
                "/images/rpg1.jpg",
                "/images/rpg2.jpg",
                "/images/rpg3.jpg",
            ],
        },
        {
            name: "Strategy Games",
            images: [
                "/images/strategy1.jpg",
                "/images/strategy2.jpg",
                "/images/strategy3.jpg",
            ],
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        if (current < genres.length - 1) {
            setCurrent(current + 1);
        }
    };

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    return (
        <section className="w-full px-[5%] py-8">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-white text-4xl font-bold">
                    Popular Genres
                </h2>

                <div className="flex gap-3">

                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="w-10 h-10 rounded-full bg-[#303034] flex items-center justify-center text-white disabled:opacity-40 hover:bg-[#3d3d42] transition"
                    >
                        <IoIosArrowBack size={22} />
                    </button>

                    <button
                        onClick={next}
                        disabled={current === genres.length - 1}
                        className="w-10 h-10 rounded-full bg-[#303034] flex items-center justify-center text-white disabled:opacity-40 hover:bg-[#3d3d42] transition"
                    >
                        <IoIosArrowForward size={22} />
                    </button>

                </div>

            </div>


            {/* SLIDER */}

            <div className="overflow-hidden">

                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >

                    {genres.map((genre, index) => (

                        <div
                            key={index}
                            className="
                                shrink-0
                                w-1/2
                                md:w-1/3
                                lg:w-1/4
                                px-3
                            "
                        >

                            <div className="bg-[#202024] rounded-[14px] p-7">

                                {/* IMAGES */}

                                <div className="flex h-[180px] overflow-hidden rounded-[4px]">

                                    {genre.images.map((image, imageIndex) => (

                                        <img
                                            key={imageIndex}
                                            src={image}
                                            alt=""
                                            className="w-1/3 h-full object-cover"
                                        />

                                    ))}

                                </div>

                                {/* TITLE */}

                                <h3 className="text-white text-center text-xl mt-7">
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