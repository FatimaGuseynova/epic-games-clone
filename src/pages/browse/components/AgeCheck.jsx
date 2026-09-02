import React, { useState } from 'react'

import { Link, useLocation } from 'react-router'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

function AgeCheck() {

    const months = [
        { id: 1, name: "January" },
        { id: 2, name: "February" },
        { id: 3, name: "March" },
        { id: 4, name: "April" },
        { id: 5, name: "May" },
        { id: 6, name: "June" },
        { id: 7, name: "July" },
        { id: 8, name: "August" },
        { id: 9, name: "September" },
        { id: 10, name: "October" },
        { id: 11, name: "November" },
        { id: 12, name: "December" }
    ]

    const years = Array.from(
        { length: 75 },
        (_, i) => 2024 - i
    )

    const [open, setOpen] = useState(false)
    const [openD, setOpenD] = useState(false)
    const [openY, setOpenY] = useState(false)

    const [selected, setSelected] = useState(null)
    const [selectedD, setSelectedD] = useState("")
    const [selectedY, setSelectedY] = useState("")

    const location = useLocation()
    const product = location.state?.product

    const calculateAge = (year, month, day) => {
        const today = new Date()

        let age = today.getFullYear() - year

        const birthdayThisYear = new Date(
            today.getFullYear(),
            month - 1,
            day
        )

        if (today < birthdayThisYear) {
            age--
        }

        return age
    }

    const age =
        selected &&
        selectedD &&
        selectedY
            ? calculateAge(
                selectedY,
                selected.id,
                selectedD
            )
            : null

    const isDateSelected =
        selected &&
        selectedD &&
        selectedY

    return (
        <div className="bg-[#101014] min-h-screen text-white">

            <div className="min-h-screen w-screen flex flex-col justify-center items-center">

                <div className="rounded-[10px] border border-[#2E2E32] p-1 bg-[#18181C]">

                    <img
                        className="w-80 rounded-[10px]"
                        src={product?.productLogo?.url}
                        alt="game"
                    />

                    <p className="font-extrabold text-[25px] pt-4 pl-4">
                        {product?.name}
                    </p>

                </div>

                <div className="text-center">

                    <h3 className="text-[22px] font-semibold pt-5 pb-2">
                        Enter your date of birth to continue
                    </h3>

                    <p className="pb-3">
                        View our{" "}
                        <Link
                            className="text-[#2290C3] underline"
                            to="/privacy"
                        >
                            privacy policy
                        </Link>
                    </p>

                </div>

                <div className="flex gap-4">

                    <div className="relative">

                        <div
                            onClick={() => setOpen(prev => !prev)}
                            className="p-2 pr-0 border border-white rounded-[4px] flex items-center gap-4 cursor-pointer"
                        >

                            <p>
                                {selected?.name.slice(0, 3) || "MM"}
                            </p>

                            <div className="p-2 border-l border-white">
                                {open
                                    ? <IoIosArrowUp />
                                    : <IoIosArrowDown />
                                }
                            </div>

                        </div>

                        {open && (

                            <div className="absolute top-full left-0 mt-1 w-full bg-[#18181C] border border-[#2E2E32] rounded-[4px] z-20 max-h-60 overflow-y-auto">

                                <ul className="flex flex-col">

                                    {months.map(item => (

                                        <li
                                            key={item.id}
                                            onClick={() => {
                                                setSelected(item)
                                                setOpen(false)
                                            }}
                                            className="px-3 py-2 cursor-pointer hover:bg-[#2E2E32]"
                                        >
                                            {item.name}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        )}

                    </div>

                    <div className="relative">

                        <div
                            onClick={() => setOpenD(prev => !prev)}
                            className="p-2 pr-0 border border-white rounded-[4px] flex items-center gap-4 cursor-pointer"
                        >

                            <p>
                                {selectedD || "DD"}
                            </p>

                            <div className="p-2 border-l border-white">

                                {openD
                                    ? <IoIosArrowUp />
                                    : <IoIosArrowDown />
                                }

                            </div>

                        </div>

                        {openD && (

                            <div className="absolute top-full left-0 mt-1 w-full bg-[#18181C] border border-[#2E2E32] rounded-[4px] z-20 max-h-60 overflow-y-auto">

                                <ul className="flex flex-col">

                                    {Array.from(
                                        {
                                            length:
                                                selected && selectedY
                                                    ? new Date(
                                                        selectedY,
                                                        selected.id,
                                                        0
                                                    ).getDate()
                                                    : 31
                                        },
                                        (_, i) => i + 1
                                    ).map(day => (

                                        <li
                                            key={day}
                                            onClick={() => {
                                                setSelectedD(day)
                                                setOpenD(false)
                                            }}
                                            className="px-3 py-2 cursor-pointer hover:bg-[#2E2E32]"
                                        >
                                            {day}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        )}

                    </div>

                    <div className="relative">

                        <div
                            onClick={() => setOpenY(prev => !prev)}
                            className="p-2 pr-0 border border-white rounded-[4px] flex items-center gap-4 cursor-pointer"
                        >

                            <p>
                                {selectedY || "YYYY"}
                            </p>

                            <div className="p-2 border-l border-white">

                                {openY
                                    ? <IoIosArrowUp />
                                    : <IoIosArrowDown />
                                }

                            </div>

                        </div>

                        {openY && (

                            <div className="absolute top-full left-0 mt-1 w-full bg-[#18181C] border border-[#2E2E32] rounded-[4px] z-20 max-h-60 overflow-y-auto">

                                <ul className="flex flex-col">

                                    {years.map(year => (

                                        <li
                                            key={year}
                                            onClick={() => {
                                                setSelectedY(year)
                                                setOpenY(false)
                                            }}
                                            className="px-3 py-2 cursor-pointer hover:bg-[#2E2E32]"
                                        >
                                            {year}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        )}

                    </div>

                </div>

                {age !== null && age < 18 && (

                    <h5 className="text-[20px] font-semibold py-4">
                        You can't view this content due to your age
                    </h5>

                )}

                <div className="block w-[40%]">

                    {isDateSelected && (

                        <Link
                            to={age >= 18 ? "/detail" : "/age"}
                            state={{ product }}
                            className="block text-center w-full my-6 mb-3 rounded-[8px] duration-150 hover:bg-[#65ccfb] bg-[#26BBFF] py-2 text-black"
                        >
                            Continue
                        </Link>

                    )}

                    <Link
                        to="/discover"
                        className="block border border-white text-center w-full my-6 mb-3 rounded-[8px] duration-150 hover:bg-[#18181c64] bg-transparent py-2 text-white"
                    >
                        Back to Store
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default AgeCheck