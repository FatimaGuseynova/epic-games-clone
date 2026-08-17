import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Search({ opened, setOpen }) {
    return (
        <div >
            <div className='max-[1023px]:hidden '>
                <div className="relative pr-8">
                    <div className="flex items-center  px-2.5 rounded-full bg-[#202024] hover:bg-[#3f3f44] transition-colors duration-200">
                         <IoMdSearch />
                        <input
                            type="text"
                            placeholder="Search store"
                            className="hover:bg-[#404044] py-2  duration-200 w-full pl-2.5 bg-transparent outline-none border-none text-[15px] text-white text-[#8a8a8f]"
                        />
                    </div>
                </div>
            </div>
            <div className={`min-[1023px]:hidden  flex  items-center ml-10 pt-5`}>
                <div onClick={() => setOpen(prev => !prev)} className={`text-[23px] hover:bg-[#7d7d7d95] p-2 px-2.5 duration-150 rounded-2xl w-fit ${opened ? "hidden" : ""}`}>
                    <IoMdSearch />
                </div>
                <div className={`w-[85vw] ${opened ? "flex" : "hidden"} pl-5 bg-[#1f1f24] flex items-center justify-between p-3`}>
                    <div className='text-[23px]'>
                        <IoMdSearch />
                    </div>
                    <input type="text" placeholder='Search store' className='pl-6 outline-none text-[#f1f1f1] text-[14px] py-3 w-full border-none' />
                    <IoMdClose className='text-[46px] pr-5' onClick={() => { setOpen(false) }} />

                </div>
            </div>
        </div>
    )
}

export default Search;