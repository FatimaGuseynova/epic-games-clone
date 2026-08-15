import React, { use, useState } from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io"

function RegisterBirth() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const [open, setOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleSelect = (month) => {
        setSelectedMonth(month);
        setOpen(false);
    };

    return (
        <div className='bg-[#101014] h-screen flex p-10 justify-center items-center '>
            <div className='min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] max-w-[96%] p-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033] '>
                <div>
                    <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Enter your date of birth</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Date of birth</p>
                </div>
                <div className='flex items-center gap-3 justify-between'>
                    <div className="relative">
                        <div
                            onClick={() => setOpen(!open)}
                            className="
            relative
            h-[50px]
            duration-150
            rounded-[18px]
            border border-[#5A5A5F]
            hover:border-[#c8c8d4]
            bg-[#242428]
            px-5
            flex items-center justify-between
            cursor-pointer
            text-[16px]
            text-[#a9a9ac]
        "
                        >
                            <span
                                className={`
                absolute
                left-2
                transition-all duration-200
                pointer-events-none
                ${selectedMonth || open
                                        ? "top-[-2px] px-2 text-[13px] "
                                        : "top-1/2 -translate-y-1/2 text-[16px] "
                                    }
            `}
                            >
                                Month
                            </span>
                            {selectedMonth && (
                                <span className="text-[16px]  w-[30%] text-white">
                                    {selectedMonth.slice(0, 3)}
                                </span>
                            )}

                            <IoIosArrowUp
                                className={`
                text-[#a9a9ac]
                ${selectedMonth ? "ml-10 " : "ml-17"}
                transition-transform duration-200
                ${open ? "rotate-0" : "rotate-180"}
            `}
                            />
                        </div>

                        {open && (
                            <div
                                className="
                absolute
                top-[58px]
                left-0
                z-50
                w-fit
                max-h-[375px]
                overflow-y-auto
                rounded-[10px]
                bg-[#303033f1]
                p-2
            "
                            >
                                {months.map((month) => (
                                    <div
                                        key={month}
                                        onClick={() => handleSelect(month)}
                                        className="
                        px-3
                        py-[12px]
                        rounded-[8px]
                        text-[15px]
                        text-white
                        cursor-pointer
                        hover:bg-[#383841]
                        transition-colors
                    "
                                    >
                                        {month}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <input type="text" placeholder='Day' className='hover:border-[#9b9ba2] w-[100%] duration-150 py-3 border-1 px-5 rounded-2xl border-[#5a5a5f]' />
                    <input type='text' placeholder='Year' className='hover:border-[#9b9ba2] w-[100%] duration-150 py-3 border-1 px-5 rounded-2xl border-[#5a5a5f]' />
                </div>
                <div className=''>
                    <Link to="/signin/email" className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</Link>
                </div>
                <div>
                    <p className='text-[15px] text-center py-5 text-[#A7A7A9]'>Already have an account? <Link to="/signin" className="text-[#2290C3] underline">Sign in</Link></p>
                </div>
                <div className='text-center pb-5'>
                    <Link to="/signin/privacy" className="text-[#2290C3] text-[15px] underline">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterBirth