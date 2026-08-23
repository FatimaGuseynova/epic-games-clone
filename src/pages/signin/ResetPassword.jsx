import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from 'formik'

function ResetPassword() {
    const [timer, setTimer] = useState(3)

    useEffect(() =>{
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
        return () => clearInterval(interval)


    }, [timer])

    const email = localStorage.getItem("email")
    const inputRefs = useRef([]);
    const [red, setRed] = useState(false)
    const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: {
            digit1: "",
            digit2: "",
            digit3: "",
            digit4: "",
            digit5: "",
            digit6: "",
        },
        onSubmit: async (values) => {
            const code =
                values.digit1 +
                values.digit2 +
                values.digit3 +
                values.digit4 +
                values.digit5 +
                values.digit6

            // const sendCode = await 

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
                        <h2 className='pt-3 text-white font-semibold pt-0 py-4 text-[23px]'>Check Your Inbox</h2>
                        <p className='text-[17px] py-5 text-[#A7A7A9]'>Enter the 6-digit security code we sent to <span className='text-white font-semibold'>{email.slice(0, 1)}***{email.slice(email.length - 11, email.length)}</span></p>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className='flex gap-3 justify-center items-center'>
                            {Object.keys(values).map((digit, index) => (
                                <input maxLength={1} name={digit} value={values[digit]}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        setFieldValue(digit, value);

                                        const newValues = {
                                            ...values,
                                            [digit]: value
                                        };

                                        if (Object.values(newValues).every(value => value !== "")) {
                                            setRed(false);
                                        }

                                        if (index < 5) {
                                            inputRefs.current[index + 1]?.focus();
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Backspace") {
                                            const newValues = {
                                                ...values,
                                                [digit]: ""
                                            };

                                            setFieldValue(digit, "");

                                            if (Object.values(newValues).some(value => value === "")) {
                                                setRed(true);
                                            }

                                            if (!values[digit] && index > 0) {
                                                const previousDigit = Object.keys(values)[index - 1];

                                                setFieldValue(previousDigit, "");
                                                inputRefs.current[index - 1]?.focus();
                                            }
                                        }
                                    }}
                                    key={index} type="text" inputMode='numeric' className={`hover:border-[#9b9ba2] ${red ? "border-red-400" : "border-[#7a7a82]"} bg-[#242428]  caret-white w-[50px] duration-150 py-4 border px-5 rounded-[7px] text-white text-center outline-none focus:border-white`}
                                />
                            ))}
                        </div>

                        <button disabled={!Object.values(values).every(value => value != "")} type='submit' className='disabled:bg-[#444448] block text-center w-full my-6 mb-3 hover: rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black'>Continue</button>
                    </form>
                    <div className='text-center'>
                        <p className='text-[15px]  text-[#A7A7A9]'>No email? Check the spam folder.</p>
                        <p className={`text-[15px] text-[#A7A7A9] ${timer === 0 ? "hidden" : "inline"}`}>Resend code in {timer}s </p>
                        <p className={`text-[15px] ${timer === 0 ? "inline" : "hidden"}`}><Link className='text-[#2290C3] underline'>Resend code </Link></p>
                        <span className='inline text-[15px] py-5 text-[#A7A7A9] '>or <Link className='text-[#2290C3] underline' to="/signin/forgot">enter a diffirent email address</Link></span>
                    </div>
                    <div className='py-6 text-center'>
                        <Link className='text-[#2290C3] underline text-[15px] '>Lost access to thes email address?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword