import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function FilterGames() {
    const sortOptions = [
        "All",
        "New Release",
        "Coming Soon",
        "Alphabetical",
        "Price: High to Low",
        "Price: Low to High"
    ];

    const [ open, setOpen] = useState(false)

    return (
        <div>
            <div className='flex gap-3'>
                <p>Show</p>

                <div>
                    <div className='flex gap-1 items-center' onClick={() => setOpen(prev => !prev)}>
                        New Release                 
                        
                        {open ? (
                    <IoIosArrowUp className="ml-1 text-[16px]" />
                ) : (
                    <IoIosArrowDown className="ml-1 text-[16px]" />
                )}
                    </div>
                    <ul className=''>
                        {sortOptions.map((option, index) => (
                            <li className={`${open ? "block" : "hidden"}`} key={index}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterGames