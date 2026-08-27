import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import FiltersChoose from './FiltersChoose';
import { Link } from 'react-router';

function FilterGames() {
    const sortOptions = [
        { id: 1, name: "All" },
        { id: 2, name: "New Release" },
        { id: 3, name: "Coming Soon" },
        { id: 4, name: "Alpabetical" },
        { id: 5, name: "Price: High to Low" },
        { id: 6, name: "Price: Low to High" }
    ];

    const [selected, setSelected] = useState(1)
    const [filter, setFilter] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div> 
            <div className={`  flex gap-2 `}>
                <p className='text-[#aaaaaa] text-[15px]'>Show:</p>

                <div className={`  w-full flex justify-between`}>
                    <div className='relative w-[150px]'  >
                        <div className='flex gap-1 items-center text-[15px] cursor-pointer' onClick={() => setOpen(prev => !prev)}>
                            {sortOptions[selected].name}

                            {open ? (
                                <IoIosArrowUp className="ml-1 text-[16px]" />
                            ) : (
                                <IoIosArrowDown className="ml-1 text-[16px]" />
                            )}
                        </div>
                        <ul className={`absolute left-0 top-full w-full mt-1 z-10 ${open ? "block" : "hidden"} pt-3 text-[15px] bg-[#303034] p-1 rounded-[10px]`} >
                            {sortOptions.map((option, index) => (
                                <li onClick={() => {
                                    setSelected(option.id - 1);
                                    setOpen(false)
                                }} className={`duration-150 ${selected + 1 === option.id ? "bg-[#696971] rounded-[6px]" : "hover:bg-[#696971] rounded-[6px]"} ${open ? "block" : "hidden"} p-2 py-1.5`} key={index}>
                                    {option.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className=''>
                        <Link to="/filterchoose" onClick={() => setFilter(true)} className='flex hover:bg-[#696971] duration-150 bg-[#4f4f55] rounded-[10px] py-1 px-2  gap-3 items-center'><span>Filter</span> <LuListFilter />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterGames