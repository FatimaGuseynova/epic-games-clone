import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from 'formik'
import { TbPointFilled } from "react-icons/tb";
import { nameRegister } from "../../validation/nameRegister";
import { HiCheckCircle } from "react-icons/hi2";
import { BiSolidError } from "react-icons/bi";
import { Eye, EyeOff } from "lucide-react";
import { HiMiniCheck } from "react-icons/hi2";
import { getUsers } from "../../api/getUsers";

function RegisterName() {
    const [showPassword, setShowPassword] = useState(false);
    const [existsUser, setExistUser] = useState(false)
    const [existsNick, setExistNick] = useState(false)


    const savedEmail = localStorage.getItem("email");
    const savedBirth = localStorage.getItem("birthDate")

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            email: savedEmail,
            name: "",
            lastname: "",
            password: "",
            terms: false,
            terms1: false,
            nickname: ""
        },

        validationSchema: nameRegister,

        onSubmit: async (values) => {

            try {
                const emailExists = users.some(
                    (user) => user.email === values.email
                );

                if (emailExists) {
                    console.log(existsUser);
                    return;
                }

                const usernameExists = users.some(
                    (user) => user.username === values.nickname
                );

                if (usernameExists) {

                    console.log(existsNick);
                    return;
                }

                const registerfinal = {
                    firstname: values.name,
                    lastname: values.lastname,
                    username: values.nickname,
                    email: values.email,
                    password: values.password,
                    dateOfBirth: String(savedBirth),
                    country: "string"
                };

                console.log("REGISTER DATA:", registerfinal);

            } catch (error) {
                console.error("Registration error:", error);
            }
        }
    });

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

    const hasMinLength = values.password.length >= 7;
    const hasLetter = /[A-Za-zА-Яа-яЁё]/.test(values.password);
    const hasNumber = /[0-9]/.test(values.password);


    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#101014] max-[480px]:block min-[480px]:flex max-[480px]:px-5  min-[480px]:p-10 min-[480px]:justify-center  '>
            <div className=' min-[480px]:bg-[#18181C]  overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
                <div>
                    <Link to="/signin/email" className='flex group items-center text-[15px]'><IoIosArrowBack className='pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]' /> Back</Link>
                </div>
                <div>
                    <h2 className=' text-white font-semibold  py-4 pb-0 text-[23px]'>Add your details</h2>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Email address</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='email' value={values.email} onChange={(e) => {
                        setExistUser(false);
                        handleChange(e);
                    }}
                        onBlur={handleBlur} className={`hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f] ${touched.email && errors.email && "border-[#FF6173]"}`} />
                    <div className='flex items-start gap-6'>
                        <div>
                            <p className='text-[17px] py-5 text-[#A7A7A9]'>First name</p>
                            <input
                                onBlur={handleBlur} type="text" value={values.name} name='name' onChange={handleChange} className={`hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f] ${touched.name && errors.name && "border-[#FF6173]"}`} />
                            {touched.name && errors.name && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                                {errors.name}</p>}
                        </div>
                        <div>
                            <p className='text-[17px] py-5 text-[#A7A7A9]'>Last name</p>
                            <input
                                onBlur={handleBlur} type="text" value={values.lastname} name='lastname' onChange={handleChange} className='hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f]' className={`hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f] ${touched.lastname && errors.lastname && "border-[#FF6173]"}`} />
                            {touched.lastname && errors.lastname && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                                {errors.lastname}</p>}
                        </div>
                    </div>
                    <p className='text-[17px] py-5 text-[#A7A7A9]'>Create password</p>
                    <div className="relative w-[100%]">
                        <input
                            onFocus={() => setOpen(true)}
                            onBlur={handleBlur}
                            autoComplete="new-password"
                            type={showPassword ? "text" : "password"}
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            className={`hover:border-[#9b9ba2] bg-[#242428] w-[100%] duration-150 py-3 border-1 px-5 rounded-[10px] border-[#5a5a5f] ${touched.password && errors.password && "border-[#FF6173]"}`} />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            tabIndex={-1}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>                    {touched.password && errors.password && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                        {errors.password}</p>}
                    <div>
                        <ul className={`pt-3 ${open ? "flex flex-col gap-3" : "hidden"}`}>
                            <li className={`text-[15px] ${hasLetter ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2`}>{hasLetter ? <HiCheckCircle className=' text-[23px]' /> : <TbPointFilled className={`${hasLetter ? "text-[#71D687]" : "text-white"}`} />}At least one letter</li>
                            <li className={`text-[15px] ${hasNumber ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2`}>{hasNumber ? <HiCheckCircle className=' text-[23px]' /> : <TbPointFilled className={`${hasNumber ? "text-[#71D687]" : "text-white"}`} />}At least one number</li>
                            <li className={`text-[15px] ${hasMinLength ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2`}>{hasMinLength ? <HiCheckCircle className=' text-[23px]' /> : <TbPointFilled className={`${hasMinLength ? "text-[#71D687]" : "text-white"}`} />}Minimum 7 characters</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>Display name</p>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>{values.nickname.length}/16</p>
                    </div>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        value={values.nickname}
                        name="nickname"
                        onChange={(e) => {
                            setExistNick(false);
                            handleChange(e);
                        }}
                        maxLength={16}
                        className={`hover:border-[#9b9ba2] bg-[#242428] w-full duration-150 py-3 border px-5 rounded-[10px] border-[#5a5a5f] ${touched.nickname && touched.nickname && errors.nickname ? "border-[#FF6173]" : "border-[#5a5a5f]"
                            }`}
                    />
                    {touched.nickname && errors.nickname ? (
                        <p className="text-[#FF6173] flex items-center text-[13px] pt-1">
                            <BiSolidError className="mr-1" />
                            {errors.nickname}
                        </p>
                    ) : <p className='text-[13px] pt-1 '>Use letters, numbers, underscores (_), hyphens (-), and periods (.).</p>}
                    <div className="flex flex-col items-start gap-5 pt-7">
                        <div className='flex gap-2 items-center'>
                            <div className="relative w-[30px] h-[30px] shrink-0">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={values.terms}
                                    onChange={handleChange}
                                    className="appearance-none w-[30px] h-[30px] border border-[#66666b] rounded-[5px] bg-transparent checked:bg-[#26BBFF] checked:border-[#26BBFF] cursor-pointer"
                                />

                                {values.terms && (
                                    <HiMiniCheck className="absolute inset-0 m-auto text-white pointer-events-none" />
                                )}
                            </div>
                            <p className="text-[15px] leading-[1.35]">
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
                        {touched.terms && errors.terms && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
                            {errors.terms}</p>}
                        <div className='flex gap-2 items-center'>
                            <div className="relative w-[30px] h-[30px] shrink-0">
                                <input
                                    type="checkbox"
                                    name="terms1"
                                    checked={values.terms1}
                                    onChange={handleChange}
                                    className="appearance-none w-[30px] h-[30px] border border-[#66666b] rounded-[5px] bg-transparent checked:bg-[#26BBFF] checked:border-[#26BBFF] cursor-pointer"
                                />

                                {values.terms1 && (
                                    <HiMiniCheck className="absolute inset-0 m-auto text-white pointer-events-none" />
                                )}
                            </div>
                            <p className="text-[15px] leading-[1.35]">Send news, surveys, and offers from Epic Games <span className='text-[15px] py-5 text-[#A7A7A9]'>(Optional)</span></p>
                        </div>
                    </div>


                    <button type='submit' className='block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</button>

                </form>
                <div className='text-center py-5'>
                    <Link to="/signin/privacy" className="text-[#2290C3] underline">Privacy Policy</Link>
                </div>

            </div>
        </div>
    )
}

export default RegisterName