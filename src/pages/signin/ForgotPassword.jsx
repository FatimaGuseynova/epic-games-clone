import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { signinEmail } from "../../validation/signinEmail"
import { useFormik } from 'formik'
import { ForgotPass } from "../../api/Forgot"


function ForgotPassword() {
    const emailSignin = localStorage.getItem("email")

    const { values, handleSubmit, handleChange, touched, errors } = useFormik({
        initialValues: {
            email: emailSignin
        },
        validationSchema: signinEmail,
        onSubmit: async () => {
            const obj = {
                email: emailSignin,
                callbackURL: "http://localhost:5173/signin/reset"
            }
            const sendForgot = await ForgotPass(obj)
            console.log(sendForgot)
        }
    })

    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div className='w-full'>
                    <div>
                        <Link to="/signin/register" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                    </div>

                    <div>
                        <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Reset Your Password</h2>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>Enter your Epic Games account email address and we'll
                            send you a security code. </p>
                        <p className='text-[15px] pb-1 pt-5 text-[#A7A7A9]'>Email address </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => handleChange(e)} value={values.email} name="email" type="text" className={`hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f] ${touched.email && errors.email && "border-[#FF6173]"}`} />

                        <button type='submit' className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</button>

                    </form>

                    <div className='text-center py-5'>
                        <Link to="/signin/privacy" className="text-[#2290C3] underline">Privacy Policy</Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ForgotPassword