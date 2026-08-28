import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

function Discover({ opened }) {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const options = [
        {
            name: "Discover",
            path: "/discover",
        },
        {
            name: "Browse",
            path: "/browse",
        },
        {
            name: "News",
            path: "/news",
        },
    ];

    const selected =
        options.find(option => option.path === location.pathname)?.name
        || "Discover";

    const handleSelect = (option) => {
        setOpen(false);
        navigate(option.path);
    };

    return (
        <div
            className={`
                relative
                min-[1023px]:hidden
                items-center
                justify-center
                ${opened ? "hidden" : "flex"}
            `}
        >

            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="
                    h-[106px]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-[15px]
                    font-normal
                    duration-200
                    pt-4
                    pr-9
                "
            >
                <span>{selected}</span>

                {open ? (
                    <IoIosArrowUp className="ml-1 text-[15px]" />
                ) : (
                    <IoIosArrowDown className="ml-1 text-[15px]" />
                )}
            </button>


            {open && (
                <div
                    className="
                        absolute
                        top-full
                        right-10
                        w-full
                        z-50
                        px-[30px]
                        pb-[14px]
                        bg-[#101014]
                    "
                >

                    {options.map((option, index) => (

                        <button
                            key={option.path}
                            type="button"
                            onClick={() => handleSelect(option)}
                            className={`
                                w-full
                                h-[46px]
                                flex
                                items-center
                                text-left
                                text-[14px]
                                duration-200

                                ${
                                    selected === option.name
                                        ? "text-white"
                                        : "text-[#96969b]"
                                }

                                hover:text-white

                                ${
                                    index !== options.length - 1
                                        ? "border-b border-[#3b3b3f]"
                                        : ""
                                }
                            `}
                        >
                            {option.name}
                        </button>

                    ))}

                </div>
            )}

        </div>
    );
}

export default Discover;