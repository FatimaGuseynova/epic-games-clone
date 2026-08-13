import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ChangeLanguage from '../dropdown/ChangeLanguage';
import { Link } from 'react-router';
import DistributeMobile from './DistributeMobile';

function Hamburgermenu({ menulOpen, setMenulOpen }) {
    const [open, setOpen] = useState(false);
    const [distOpen, setDistOpen] = useState(false);

    return (
        <div>

            {!menulOpen && (
                <button
                    type="button"
                    onClick={() => setMenulOpen(true)}
                    className="w-7 h-6"
                >
                    <svg
                        className="w-7 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            )}

            {menulOpen && (
                <button
                    type="button"
                    onClick={() => {
                        setMenulOpen(false);
                        setOpen(false);
                        setDistOpen(false);
                    }}
                    className="w-7 h-7"
                >
                    <IoMdClose className="w-7 h-7 text-white" />
                </button>
            )}

            {menulOpen && (
                <div
                    className="
                        fixed
                        top-[60px]
                        left-0
                        right-0
                        z-[1000]
                        bg-[#121216]
                        h-[calc(100vh-60px)]
                    "
                >

                
                    <div
                        className="
                            flex
                            items-center
                            justify-end
                            py-[10px]
                            bg-[#121216]
                        "
                    >

             

                        <div className="mr-4">
                            <ChangeLanguage
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>

                        <Link to="/signin"
                            type="button"
                            className={`
                                duration-200
                                px-2.5
                                py-1
                                cta-button
                                cta-button-primary
                                text-[16px]
                                rounded-[6px]
                                dark:bg-[#353539]
                                dark:text-white
                                mr-2.5
                                hover:bg-[#838383]
                                ${open ? "opacity-0" : "opacity-100"}
                            `}
                        >
                            Sign in
                        </Link>

                    </div>



                    <div
                        className="
                            w-[94%]
                            mx-auto
                            text-white
                        "
                    >

                        {!distOpen && (
                            <>
                                <h2
                                    className="
                                        font-extrabold
                                        pt-[15px]
                                        text-[31px]
                                        pb-6
                                    "
                                >
                                    Menu
                                </h2>

                                <Link
                                    to="/"
                                    className="
                                        text-[17px]
                                        w-full
                                        block
                                        hover:bg-[#7d7d7d95]
                                        rounded-[7px]
                                        p-3
                                        pl-1
                                        duration-200
                                    "
                                >
                                    Support
                                </Link>
                            </>
                        )}

                        <DistributeMobile
                            opend={distOpen}
                            setOpend={setDistOpen}
                        />

                    </div>

                </div>
            )}

        </div>
    );
}

export default Hamburgermenu;