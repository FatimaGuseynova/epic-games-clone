import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from 'formik'
import { getUsers } from "../../api/getUsers";
import { loginUsers } from "../../api/login";
import { BiSolidError } from "react-icons/bi";


function SigninPassword() {
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const emailSend = localStorage.getItem("email")
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await getUsers();

                console.log("ALL USERS:", data);

                setUsers(data);
            } catch (error) {
                console.error("Failed to get users:", error);
            }
        };

        loadUsers();
    }, []);
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            password: ""
        },
        // validationSchema:

        onSubmit: async (values) => {
            const obj = {
                email: emailSend,
                password: values.password
            }
            const response = await loginUsers(obj)
            response.error && setMessage(response.message)
            console.log(response)
            navigate("/signin/correct")
        }
    })

    const [show, setShow] = useState(false)
    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center '>
            <div className=' min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div>
                    <Link to="/signin" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Enter your password</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>You're signing in with <span className='text-white'>{emailSend}</span></p>
                    <p className='text-[15px] pb-1 pt-5 text-[#A7A7A9]'>Password </p>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='relative'>
                        <input name='password' onChange={(e) => handleChange(e)} value={values.password} type={show ? "text" : "password"} className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' />

                        <button type='button' className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {message != "" && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                        {message}</p>}

                    <div className=' py-2'>
                        <Link to="/signin/forgot" className="text-[#2290C3] underline">Forgot password?</Link>
                    </div>


                    <button type='submit' className='w-full my-6 rounded-[8px] bg-[#26BBFF] block text-center py-2 text-black'>Sign in</button>
                </form>

                <div className='text-center pb-5'>
                    <Link to="/signin/privacy" className="text-[#2290C3] text-[15px] underline">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default SigninPassword