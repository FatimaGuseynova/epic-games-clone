import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";

function SigninPassword() {
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                  <div>
                    <Link to="/signin" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Enter your password</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>You're signing in with </p>
                    <p className='text-[15px] pb-1 pt-5 text-[#A7A7A9]'>Password </p>
                </div>
                <div>
                    <input type="password" className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                </div>
                <div className=' py-5 pb-2'>
                    <Link to="" className="text-[#2290C3] underline">Forgot password?</Link>
                </div>


                <div>
                    <Link to="" className='w-full my-6 rounded-[8px] bg-[#26BBFF] block text-center py-2 text-black'>Sign in</Link>

                </div>




                <div className='text-center pb-5'>
                    <Link to="/signin/privacy" className="text-[#2290C3] text-[15px] underline">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default SigninPassword