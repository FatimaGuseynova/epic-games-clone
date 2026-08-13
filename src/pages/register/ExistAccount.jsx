import React from 'react'
import attention from "../../images/attention.png"
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";

function ExistAccount() {
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[85%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div className='w-full'>
                    <div>
                        <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <img className='w-19 h-18 my-7 ' src={attention} alt="attention" />
                    </div>
                    <div>
                        <h2 className=' text-white font-semibold pt-0 py-4 text-[23px]'>If you've played our games, you already have an account</h2>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>To access your progress and purchases, sign in with the
                            console account you normally play on.</p>
                        <p className='text-[17px] text-[#A7A7A9]'>If you play on PC or mobile, sign in with email.</p>
                    </div>
                    <div className=''>
                        <Link to="/signin" className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Sign in another way</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExistAccount