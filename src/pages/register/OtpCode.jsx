import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { otpVerify } from "../../api/otpGet"


function OtpCode() {
    const userInf = localStorage.getItem("email")

    const [red, setRed] = useState(false)
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    const [timer, setTimer] = useState(3)
    const newOtp = [...otp];
    const allDigits = newOtp.every((digit) => digit !== "")

    useEffect(() => {
        if (timer === 0) return

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    const handleChange = (e, index) => {
        const value = e.target.value;

        newOtp[index] = value;
        setOtp(newOtp);

        if (newOtp.every((digit) => digit !== "")) {
            setRed(false);
        }

        if (value && index < otp.length - 1) {
            inputsRef.current[index + 1].focus();

        }
    };
    console.log(userInf)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const code = {
            "email": userInf,
            "otpCode": Number(otp.join(""))
        };

            const response = await otpVerify(code);

            console.log(response);
       
    };

    const handleKeyDown = (e, index) => {

        if (e.key === "Backspace") {
            setRed(true);
            if (!otp[index] && index > 0) {
                inputsRef.current[index - 1].focus();

            }
        }
    };

    return (
        <div className="bg-[#101014] block min-[480px]:flex max-[480px]:px-5 h-screen min-[480px]:p-10 min-[480px]:justify-center min-[480px]:items-center">
            <div className="min-[480px]:bg-[#18181C] overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col min-[480px]:rounded-[14px] min-[480px]:border min-[480px]:border-[#303033]">

                <div className="w-full">
                    <Link
                        to="/signin/register"
                        className="flex group items-center text-[15px]"
                    >
                        <IoIosArrowBack className="pr-1.5 duration-200 group-hover:mr-1.5 group-hover:text-white w-6 h-6 text-[#AEAEB0]" />
                        Back
                    </Link>
                </div>

                <div>
                    <h2 className="text-white font-semibold pt-3 py-4 text-[23px]">
                        Check your inbox
                    </h2>

                    <p className="text-[17px] py-5 text-[#A7A7A9]">
                        Enter the 6-digit security code we sent to{" "}
                        <span className="text-white font-semibold block">
                            {userInf &&
                                `${userInf.slice(0, 1)}***${userInf.slice(-11)}`
                            }
                        </span>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onChange={(e) => handleChange(e, index)}
                                className={`${red ? "border-[#FF6173]" : "border-[#5a5a5f]"} hover:border-[#9b9ba2] caret-white w-[20%] duration-150 py-4 border px-5 rounded-[7px] text-white text-center outline-none focus:border-white`}
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={!allDigits}
                        className="disabled:bg-[#444448] block text-center w-full my-6 mb-3 rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black"
                    >
                        Continue
                    </button>
                </form>
                {
                    <p className={`${timer === 0 && "hidden"} text-[17px] py-5 text-[#A7A7A9] text-center`}>Resend Email in {timer} </p>

                }

                <div className={`text-center py-5 ${timer === 0 ? "block" : "hidden"}`}>
                    <button className="text-[#2290C3] underline">Resend Email</button>
                </div>

            </div>
        </div>
    );
}

export default OtpCode;