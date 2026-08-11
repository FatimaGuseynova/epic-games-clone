import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function DistributeMobile({ opend, setOpend }) {
       const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {
        let timer;
        if (opend) {
           timer = setTimeout(() => {
                setShowPanel(true);
            }, 200); 
        } else {
            setShowPanel(false);
        }
        return () => clearTimeout(timer);
    }, [opend]);
    return (
        <div >
            <div onClick={() => { setOpend(prev => !prev) }} className={`duration-200 ${opend ? "opacity-0" : "opacity-100"}  text-[17px] w-full flex items-center justify-between hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1`}>
                Distribute <IoIosArrowForward />
            </div>
            <div className={`  ${opend ? "opacity-100" : "opacity-0"} duration-200 bg-[#121216] h-screen w-screen`}>
                <button onClick={() => setOpend(false)} className='min-[720px]:hidden  py-2 text-[17px] flex gap-4 items-center text-white'> <IoIosArrowBack />        Back</button>
                <h2 className=' font-extrabold pt-[15px] text-[31px] text-white pb-6'>Distribute</h2>
                <ul>
                    <li className=' text-[17px] w-full block hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1'>Distribute on Epic Games Store</li>
                    <li className=' text-[17px] w-full block hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1'>Developer Forums</li>
                    <li className=' text-[17px] w-full block hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1'>Documentation</li>
                    <li className=' text-[17px] w-full block hover:bg-[#7d7d7d95] rounded-[7px] p-3 pl-1'>Learning</li>
                </ul>
            </div>
        </div>
    )
}

export default DistributeMobile