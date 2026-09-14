import React, { useEffect } from 'react';

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function DistributeMobile({ opend, setOpend }) {

    useEffect(() => {
        if (opend) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [opend]);

    return (
        <div>

            <div
                onClick={() => setOpend(prev => !prev)}
                className={`
                    ${opend ? "opacity-0 pointer-events-none" : "opacity-100"}
                    text-[17px]
                    w-full
                    flex
                    items-center
                    justify-between
                    hover:bg-[#7d7d7d95]
                    rounded-[7px]
                    p-3
                    pl-1
                `}
            >
                Distribute
                <IoIosArrowForward />
            </div>

            <div
                className={`
                    fixed
                    top-16
                    left-0
                    z-[1100]
                    bg-[#121216]
                    h-screen
                    w-screen
                    p-4
                    overflow-y-auto
                    ${opend
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                `}
            >

                <button
                    onClick={() => setOpend(false)}
                    className="
                        min-[720px]:hidden
                        py-2
                        text-[17px]
                        flex
                        gap-4
                        items-center
                        text-white
                    "
                >
                    <IoIosArrowBack />
                    Back
                </button>

                <h2
                    className="
                        font-extrabold
                        pt-[15px]
                        text-[31px]
                        text-white
                        pb-6
                    "
                >
                    Distribute
                </h2>

                <ul>

                    <li
                        className="
                            text-[17px]
                            w-full
                            block
                            hover:bg-[#7d7d7d95]
                            rounded-[7px]
                            p-3
                            pl-1
                        "
                    >
                        Distribute on Epic Games Store
                    </li>

                    <li
                        className="
                            text-[17px]
                            w-full
                            block
                            hover:bg-[#7d7d7d95]
                            rounded-[7px]
                            p-3
                            pl-1
                        "
                    >
                        Developer Forums
                    </li>

                    <li
                        className="
                            text-[17px]
                            w-full
                            block
                            hover:bg-[#7d7d7d95]
                            rounded-[7px]
                            p-3
                            pl-1
                        "
                    >
                        Documentation
                    </li>

                    <li
                        className="
                            text-[17px]
                            w-full
                            block
                            hover:bg-[#7d7d7d95]
                            rounded-[7px]
                            p-3
                            pl-1
                        "
                    >
                        Learning
                    </li>

                </ul>

            </div>

        </div>
    );
}

export default DistributeMobile;