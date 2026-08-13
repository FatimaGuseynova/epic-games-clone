import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function DistributeMobile({ opend, setOpend }) {
    const [showPanel, setShowPanel] = useState(false);

    // useEffect(() => {
    //     if (opend) {
    //         const timer = setTimeout(() => {
    //             setShowPanel(true);
    //         }, 0);

    //         return () => clearTimeout(timer);
    //     } else {
    //         setShowPanel(false);
    //     }
    // }, [opend]);

    return (
        <div className="relative">

            <div
                onClick={() => setOpend(prev => !prev)}
                className={`
                    
                    ${opend ? "opacity-0 pointer-events-none" : "opacity-100"}
                    text-[17px] w-full flex items-center justify-between
                    hover:bg-[#7d7d7d95]
                    rounded-[7px] p-3 pl-1
                `}
            >
                Distribute
                <IoIosArrowForward />
            </div>

            <div
                className={`
                     p-4
                    absolute
                    top-0
                    left-0

                    ${opend
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }

                    bg-[#121216]
                    h-screen
                    w-screen
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

                <h2 className="
                    font-extrabold
                    pt-[15px]
                    text-[31px]
                    text-white
                    pb-6
                ">
                    Distribute
                </h2>

                <ul>
                    <li className="
                        text-[17px]
                        w-full
                        block
                        hover:bg-[#7d7d7d95]
                        rounded-[7px]
                        p-3
                        pl-1
                    ">
                        Distribute on Epic Games Store
                    </li>

                    <li className="
                        text-[17px]
                        w-full
                        block
                        hover:bg-[#7d7d7d95]
                        rounded-[7px]
                        p-3
                        pl-1
                    ">
                        Developer Forums
                    </li>

                    <li className="
                        text-[17px]
                        w-full
                        block
                        hover:bg-[#7d7d7d95]
                        rounded-[7px]
                        p-3
                        pl-1
                    ">
                        Documentation
                    </li>

                    <li className="
                        text-[17px]
                        w-full
                        block
                        hover:bg-[#7d7d7d95]
                        rounded-[7px]
                        p-3
                        pl-1
                    ">
                        Learning
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default DistributeMobile;