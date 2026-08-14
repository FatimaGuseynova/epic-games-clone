import React from 'react'
import Logo from '../../components/ui/Logo'
import games from "../../images/games.png"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router';

function Register() {
    return (
    <div className='bg-[#101014] max-[480px]:block min-[480px]:flex max-[480px]:px-5 max-[480px]:h-screen min-[480px]:p-10 min-[480px]:justify-center  '>
      <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[85%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div className='animate-slide-in-left'>
                    <div>
                        <Link to="/signin" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Logo />
                        <h2 className='text-center text-white font-semibold py-4 text-[23px]'>Have you played any of these games on your console, mobile, or PC?</h2>
                    </div>
                    <div>
                        <img src={games} alt="games" />
                    </div>
                    <div className='w-full flex flex-col'>
                        <Link className='w-full text-center my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black' to="/signin/exist">Yes</Link>
                        <Link className='w-full text-center rounded-[8px] bg-[#303034] duration-150 hover:bg-[#54545d] py-2 text-white' to="/signin/birth">No</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register