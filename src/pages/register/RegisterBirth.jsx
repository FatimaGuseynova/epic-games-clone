import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";

function RegisterBirth() {
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
                <div>
                    <select name="month" id="">

                    </select>
                    <select name="day" id=""></select>
                    <select name="year" id=""></select>
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