import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ChangeLanguage from '../dropdown/ChangeLanguage';


function Hamburgermenu() {
    const [menulOpen, setMenulOpen] = useState(false)
    const [open, setOpen] = useState(false)
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
                    <button className={` mr-2`} >  <ChangeLanguage open={open} setOpen={setOpen}/>
                    </button>
                    <button className={`${open ? " opacity-0" : "opacity-100"} duration-200 px-2.5 py-1 cta-button cta-button-primary  text-[14px] rounded-[6px] dark:bg-[#353539] dark:text-white mr-2.5 hover:bg-[#838383]`}>Sign in</button>

                </div>
            </div>
        </div>
    )
}

export default Hamburgermenu