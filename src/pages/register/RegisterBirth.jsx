import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io"
import { useFormik } from 'formik'
import { birthRegister } from "../../validation/birthRegister";
import { BiSolidError } from "react-icons/bi";
import { Registration } from "../../api/Registration";

function RegisterBirth() {
    const birthPost = new Registration()

    const [birthReg, setBirthReg] = useState({})
    const token = localStorage.getItem('accessToken')

    useEffect(() => {
        async function getAllUsers() {
            const data = await birthPost.getUsers(token)

            console.log("ALL USERS:", data)
            console.log(token)
        }

        getAllUsers()
    }, [])

useEffect(() => {
    async function postBirth() {

        const userData = {
  "firstname": "fati672r4",
  "lastname": "fati452rr35",
  "username": "fati232rr45",
  "email": "fatimaguseynova0709@gmail.com",
  "password": "fati067423",
  "dateOfBirth": "2026-08-23T17:01:58.681Z",
  "country": "fati02rrr43"
}
        let data = await birthPost.postDataUser(userData)

        setBirthReg(data)
    }

    postBirth()
}, [])

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

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            month: '',
        },

        validationSchema: birthRegister,

        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                 <div>
                    <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Enter your date of birth</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Date of birth</p>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <div className='flex items-center gap-3 justify-between'>
                        <div className="relative">
                            <div
                                onClick={() => setOpen(!open)}
                                className={` relative
            h-[50px]
            duration-150
            rounded-[10px]
            border border-[#5A5A5F]
            hover:border-[#c8c8d4]
            bg-[#242428]
            px-6
            ${selectedMonth ? "pb-2 items-end " : "flex items-center justify-between"}
            flex justify-between
            cursor-pointer
            text-[16px]
            text-[#a9a9ac]`}


                            >
                                <span
                                    className={`
                absolute
                left-3
                transition-all duration-200
                pointer-events-none
                ${selectedMonth || open
                                            ? "top-[-1px] px-2 text-[13px] "
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
                        <input type="text" placeholder='Day' className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                        <input type='text' placeholder='Year' className='hover:border-[#9b9ba2] w-[100%] bg-[#242428] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                    </div>
                    {errors.month && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                        {errors.month}</p>}
                    <div className=''>
                        <Link to="/signin/email" className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</Link>
                    </div>
                </form>
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