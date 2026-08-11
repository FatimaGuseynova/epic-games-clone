import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ChangeLanguage from '../dropdown/ChangeLanguage';
import { Link } from 'react-router';
import DistributeMobile from './DistributeMobile';

function Hamburgermenu({ menulOpen, setMenulOpen }) {
    const [open, setOpen] = useState(false)
    const [distOpen, setDistOpen] = useState(false);
    const [visible, setVisible] = useState(true); 

    useEffect(() => {
        if (distOpen) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 200);

            return () => clearTimeout(timer);
        } else {
            setVisible(true);
        }
    }, [distOpen]);
    return (
        <div>
            <svg className={`w-7 h-6 dark:text-gray-800 ${!menulOpen ? "block" : "hidden"}`} onClick={() => setMenulOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className='text-white ' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <div onClick={() => { setMenulOpen(false) }} className={`${menulOpen ? "block" : "hidden"}`}>
                <IoMdClose className='w-7 h-7.5 ' />
            </div>
            <div className={`${menulOpen ? " block" : "hidden"} max-[720px]:absolute top-15 left-0`}>
                <div className='bg-[#121216] h-screen w-screen'>
                    <div className='flex items-center justify-end py-[10px]' >
                        <button className={`text-[21px] mr-4`} >  <ChangeLanguage open={open} setOpen={setOpen} />
                        </button>
                        <button className={`${open ? "opacity-0" : "opacity-100"}  duration-200 px-2.5 py-1 cta-button cta-button-primary  text-[16px] rounded-[6px] dark:bg-[#353539] dark:text-white mr-2.5 hover:bg-[#838383]`}>Sign in</button>

                    </div>
                    <div className={`w-[94%] mx-auto duration-200`}>
                        <h2 className={`font-extrabold pt-[15px] text-[31px] text-white pb-6 duration-200 ${distOpen ? "opacity-0" : "opacity-100"} ${!visible ? "hidden" : ""}`}>
                            Menu
                        </h2>
                        <Link
                            to="/"
                            className={`text-[17px] w-full block hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1 duration-200 ${distOpen ? "opacity-0" : "opacity-100"} ${!visible ? "hidden" : ""}`}
                        >
                            Support
                        </Link>
                        <div>
                            <DistributeMobile opend={distOpen} setOpend={setDistOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hamburgermenu