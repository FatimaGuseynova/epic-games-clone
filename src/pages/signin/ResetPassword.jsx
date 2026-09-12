import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from "formik";
import { TbPointFilled } from "react-icons/tb";
import { HiCheckCircle } from "react-icons/hi2";
import { BiSolidError } from "react-icons/bi";
import { Eye, EyeOff } from "lucide-react";
import { NewPassword } from "../../api/NewPassword";

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const token = new URLSearchParams(window.location.search).get("token");

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            password: "",
            repeatPassword: ""
        },

        validate: (values) => {
            const errors = {};

            if (!values.password) {
                errors.password = "Password is required";
            } else if (!/[A-Za-z]/.test(values.password)) {
                errors.password = "Password must contain at least one letter";
            } else if (!/[0-9]/.test(values.password)) {
                errors.password = "Password must contain at least one number";
            } else if (values.password.length < 7) {
                errors.password = "Password must be at least 7 characters";
            }

            if (!values.repeatPassword) {
                errors.repeatPassword = "Please repeat your password";
            } else if (values.password !== values.repeatPassword) {
                errors.repeatPassword = "Passwords do not match";
            }

            return errors;
        },

        onSubmit: async (values) => {
            setLoading(true);

            try {
                if (!token) {
                    console.error("User token not found");
                    return;
                }

                const resetData = {
                    token: token,
                    newPassword: values.password,
                    repeatPassword: values.repeatPassword
                };

                console.log("Password data sent to backend:", resetData);

                const result = await NewPassword(resetData);

                console.log("Password reset result:", result);

                if (result?.statusCode >= 400 || result?.error) {
                    console.error("Password reset failed:", result);
                    return;
                }

                console.log("Password successfully changed");

                navigate("/signin");
            } catch (error) {
                console.error("Password reset error:", error);
            } finally {
                setLoading(false);
            }
        }
    });

    const hasLetter = /[A-Za-z]/.test(values.password);
    const hasNumber = /[0-9]/.test(values.password);
    const hasMinLength = values.password.length >= 7;

    return (
        <div className='bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center'>
            <div className='min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>

                <div>
                    <h2 className='text-white font-semibold pb-0 text-[23px]'>
                        Create New Password
                    </h2>

                    <p className='text-[17px] pt-2 py-5 text-[#A7A7A9]'>
                        Enter your new password for your Epic Games account.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <p className='text-[#A7A7A9] text-[15px] mb-3'>
                            New password
                        </p>

                        <div className="relative w-[100%]">
                            <input
                                onFocus={() => setOpen(true)}
                                onBlur={handleBlur}
                                autoComplete="new-password"
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                name="password"
                                onChange={handleChange}
                                className={`hover:border-[#9b9ba2] bg-[#242428] text-white w-[100%] duration-150 py-3 border px-5 rounded-[10px] outline-none ${
                                    touched.password && errors.password
                                        ? "border-[#FF6173]"
                                        : "border-[#5a5a5f]"
                                }`}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                tabIndex={-1}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff size={22} />
                                ) : (
                                    <Eye size={22} />
                                )}
                            </button>
                        </div>

                        {touched.password && errors.password && (
                            <p className='text-[#FF6173] flex items-center text-[13px] pt-1'>
                                <BiSolidError className='mr-1' />
                                {errors.password}
                            </p>
                        )}

                        <ul className={`pt-4 ${open ? "flex flex-col gap-3" : "hidden"}`}>
                            <li className={`${hasLetter ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2 text-[15px]`}>
                                {hasLetter ? (
                                    <HiCheckCircle className='text-[23px]' />
                                ) : (
                                    <TbPointFilled className='text-white' />
                                )}
                                At least one letter
                            </li>

                            <li className={`${hasNumber ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2 text-[15px]`}>
                                {hasNumber ? (
                                    <HiCheckCircle className='text-[23px]' />
                                ) : (
                                    <TbPointFilled className='text-white' />
                                )}
                                At least one number
                            </li>

                            <li className={`${hasMinLength ? "text-[#71D687]" : "text-[#b5b5b5]"} flex items-center gap-2 text-[15px]`}>
                                {hasMinLength ? (
                                    <HiCheckCircle className='text-[23px]' />
                                ) : (
                                    <TbPointFilled className='text-white' />
                                )}
                                Minimum 7 characters
                            </li>
                        </ul>
                    </div>

                    <div className='mt-7'>
                        <p className='text-[#A7A7A9] text-[15px] mb-3'>
                            Repeat new password
                        </p>

                        <div className="relative w-[100%]">
                            <input
                                type={showRepeatPassword ? "text" : "password"}
                                value={values.repeatPassword}
                                name="repeatPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="new-password"
                                className={`hover:border-[#9b9ba2] bg-[#242428] text-white w-[100%] duration-150 py-3 border px-5 rounded-[10px] outline-none ${
                                    touched.repeatPassword && errors.repeatPassword
                                        ? "border-[#FF6173]"
                                        : "border-[#5a5a5f]"
                                }`}
                            />

                            <button
                                type="button"
                                onClick={() => setShowRepeatPassword((prev) => !prev)}
                                tabIndex={-1}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                            >
                                {showRepeatPassword ? (
                                    <EyeOff size={22} />
                                ) : (
                                    <Eye size={22} />
                                )}
                            </button>
                        </div>

                        {touched.repeatPassword && errors.repeatPassword && (
                            <p className='text-[#FF6173] flex items-center text-[13px] pt-1'>
                                <BiSolidError className='mr-1' />
                                {errors.repeatPassword}
                            </p>
                        )}
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className={`block text-center w-full my-6 mb-3 rounded-[8px] duration-150 py-2 ${
                            loading
                                ? "bg-[#4a4a4e] text-[#151518]"
                                : "bg-[#26BBFF] text-black hover:bg-[#42c5ff]"
                        }`}
                    >
                        {loading ? "Creating..." : "Create Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword