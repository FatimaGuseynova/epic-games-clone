import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";


function NewPassword() {
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div className='w-full'>
                    <div>
                        <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewPassword