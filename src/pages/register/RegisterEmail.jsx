import React from 'react'
import { Link, useNavigate } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import google from "../../images/google.png"
import apple from "../../images/apple.png"
import autodesk from "../../images/autodesk.png"
import { signinEmail } from "../../validation/signinEmail";
import { useFormik } from 'formik';
import { BiSolidError } from "react-icons/bi";

function RegisterEmail() {
    const navigate = useNavigate()
    
    const {values, handleChange, errors, handleSubmit} = useFormik({
        initialValues:{
            email: ""
        },
        validationSchema: signinEmail,
        onSubmit:(values) =>{
            localStorage.setItem("email", values.email);
            const registerEmail = values.email
            console.log(registerEmail)
            navigate('/signin/name')
        }
    })
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                 <div>
                    <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>What's your email?</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Email address</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='email' onChange={handleChange} required className={`hover:border-[#9b9ba2] duration-150 py-3 border-1 w-[100%] px-5 rounded-2xl border-[#5a5a5f]`} />
                                {errors.email && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                                  {errors.email}</p>}
                    <button type='submit' className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</button>
                </form>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#303033] my-5 w-full h-px'></div>
                    <h2 className='text-[#67676e]'>or</h2>
                    <div className='bg-[#303033] my-5 w-full h-px'></div>
                </div>
                <ul className='flex flex-col gap-3.5'>
                    <li className='flex w-full items-center bg-[#202024] hover:bg-[#60606a] duration-150 rounded-4xl p-2'>
                        <img className='w-10 h-10' src={google} alt="google" />
                        <p className='text-center w-full'>Continue with Google</p>
                    </li>
                    <li className='flex w-full items-center bg-[#202024] hover:bg-[#60606a] duration-150 rounded-4xl p-2'>
                        <img className='w-10 h-10' src={apple} alt="apple" />
                        <p className='text-center w-full'>Continue with Apple</p>
                    </li>
                    <li className='flex w-full items-center bg-[#202024] hover:bg-[#60606a] duration-150 rounded-4xl p-2'>
                        <img className='w-10 h-10' src={autodesk} alt="autodesk" />
                        <p className='text-center w-full'>Continue with Autodesk</p>
                    </li>
                </ul>
                <div>
                    <p className='text-[15px] text-center py-5 text-[#A7A7A9]'>Already have an account? <Link to="" className="text-[#2290C3] underline">Sign in</Link></p>
                </div>
                <div className='text-center pb-5'>
                    <Link to="/signin/privacy" className="text-[#2290C3] text-[15px] underline">Privacy Policy</Link>
                </div>



            </div>
        </div>
    )
}

export default RegisterEmail