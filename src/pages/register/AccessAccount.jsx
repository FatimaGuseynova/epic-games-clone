import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";

function AccessAccount() {
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[85%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div>
                    <div>
                        <Link to="/signin" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                    </div>
                    <div>
                        <h2 className=' text-white font-semibold py-4 text-[23px]'>Can't access your account?</h2>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>Enter your Epic Games account email address and we'll
                            send you a security code.</p>
                    </div>
                    <div>
                        <p className='text-[15px] py-5 text-[#A7A7A9]'></p>
                        <input type="text" className={`py-3 border-1 w-[100%] px-5 rounded-2xl border-[#5a5a5f]`} />
                    </div>
                    <div>
                        <Link className='w-full text-center my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</Link>
                    </div>
                    <div className='text-center pb-5'>
                        <Link to="/signin/privacy" className="text-[#2290C3] underline">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessAccount