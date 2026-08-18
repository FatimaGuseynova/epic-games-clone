import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from 'formik'

function RegisterName() {
    const savedEmail = localStorage.getItem("email");
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: savedEmail,
            name: "",
            lastname: "",
            password: "",
            nickname: ""
        }

    })
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div>
                    <Link to="/signin/email" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Add your details</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Email address</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='email' value={values.email} onChange={handleChange} required className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                    <div className='flex items-center gap-6'>
                        <div>
                            <p className='text-[17px] py-5 text-[#A7A7A9]'>First name</p>
                            <input type="text" value={values.name} name='name' onChange={handleChange} required className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                        </div>
                        <div>
                            <p className='text-[17px] py-5 text-[#A7A7A9]'>Last name</p>
                            <input type="text" value={values.lastname} name='lastname' onChange={handleChange} required className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                        </div>
                    </div>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Create password</p>
                    <input type="password" value={values.password} name='password' onChange={handleChange} required className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Display name</p>
                    <input type="text" value={values.nickname} name='nickname' onChange={handleChange} required className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />

                    <div className="flex items-start gap-3 pt-7">
                        <input
                            type="checkbox"
                            name="terms"
                            onChange={handleChange}
                            className="mt-0.5 w-[30px] h-[30px] shrink-0 appearance-none border border-[#66666b] rounded-[5px] bg-transparent checked:bg-[#26BBFF] checked:border-[#26BBFF] cursor-pointer"
                        />

                        <p className="text-[17px] leading-[1.35]">
                            I have read and agree to the{" "}
                            <Link to="/signin/privacy"
                                
                                className="underline hover:text-white"
                            >
                                Terms of Service
                            </Link>{" "}
                            and the{" "}
                            <a
                                href="#"
                                className="underline hover:text-white"
                            >
                                Epic Games Store End User License Agreement
                            </a>
                            <span className="text-[#FF6173]"> *</span>
                        </p>
                    </div>


                    <button type='submit' className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</button>

                </form>

            </div>
        </div>
    )
}

export default RegisterName