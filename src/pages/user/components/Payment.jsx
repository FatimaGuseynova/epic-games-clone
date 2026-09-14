import React, { useState } from 'react'

import { FiAlertCircle, FiPlus, FiCreditCard, FiGift } from 'react-icons/fi'

import AddFunds from './AddFunds'

function Payment() {

    const [agreed, setAgreed] = useState(false)
    const [addFundsOpen, setAddFundsOpen] = useState(false)

    const handleAgree = () => {
        setAgreed(true)
    }

    return (
        <div className="w-full text-white">

            <h1 className="text-[30px] leading-[58px] font-bold mb-[7px]">
                Payment settings
            </h1>

            <p className="text-[#b9bac4] text-[14px] leading-[30px]">
                Manage your account balance, transactions, and payment methods.{' '}
                <span className="text-[#20b5f5] pl-1 underline cursor-pointer">
                    View Privacy Policy.
                </span>
            </p>

            <section className="mt-[20px]">

                <h2 className="text-[23px] leading-[38px] font-bold mb-[20px]">
                    Account balance
                </h2>

                <p className="text-[#b9bac4] text-[14px] leading-[32px] max-w-[900px]">
                    Use your account balance to buy games, V-Bucks, and in-game items. Your balance is non-refundable.{' '}
                    <span className="text-[#20b5f5] pl-1 underline cursor-pointer">
                        View Terms
                    </span>
                </p>

                {!agreed && (
                    <div className="
                        mt-[52px]
                        w-full
                        min-h-[200px]
                        rounded-[20px]
                        border
                        border-[#8a6911]
                        bg-[#211e17]
                        px-[32px]
                        py-[30px]
                        flex
                        gap-[22px]
                    ">

                        <div className="flex-shrink-0 mt-[2px]">

                            <FiAlertCircle
                                className="text-[#f5b91b]"
                                size={25}
                            />

                        </div>

                        <div>

                            <p className="text-white text-[14px] max-w-[800px]">
                                To use your account balance, you’ll need to agree to the terms so that you can add and receive funds.
                            </p>

                            <p className="text-white text-[14px] mt-[15px]">
                                By selecting ‘I agree’, you agree to the{' '}
                                <span className="underline pl-1 cursor-pointer">
                                    Terms.
                                </span>
                            </p>

                            <button
                                onClick={handleAgree}
                                className="
                                    mt-[18px]
                                    bg-[#26bbff]
                                    hover:bg-[#65ccfb]
                                    transition-colors
                                    text-[#111216]
                                    text-[14px]
                                    font-medium
                                    rounded-[9px]
                                    px-[12px]
                                    py-[7px]
                                "
                            >
                                I agree
                            </button>

                        </div>

                    </div>
                )}

            </section>

            <section className="mt-[48px]">

                <h2 className="text-[26px] leading-[38px] font-bold">
                    Balance
                </h2>

                <p className="text-[70px] leading-[90px] font-light mt-[18px]">
                    $0.00
                </p>

                <div className="flex items-center gap-[30px] mt-[48px]">

                    <button
                        type="button"
                        onClick={() => setAddFundsOpen(true)}
                        className="
                            h-[46px]
                            px-[17px]
                            bg-[#26bbff]
                            hover:bg-[#65ccfb]
                            transition-colors
                            rounded-[10px]
                            flex
                            items-center
                            gap-[14px]
                            text-[#111216]
                            text-[17px]
                            font-medium
                        "
                    >
                        <FiPlus size={21} />
                        Add funds
                    </button>

                    <button
                        type="button"
                        className="
                            h-[46px]
                            px-[17px]
                            bg-[#353539]
                            hover:bg-[#414145]
                            transition-colors
                            rounded-[10px]
                            flex
                            items-center
                            gap-[14px]
                            text-white
                            text-[17px]
                            font-semibold
                        "
                    >
                        <FiGift size={20} />
                        Redeem gift card
                    </button>

                </div>

                <div className="mt-[40px]">

                    <span className="
                        text-[#20b5f5]
                        text-[14px]
                        underline
                        cursor-pointer
                    ">
                        View transactions
                    </span>

                </div>

            </section>

            <div className="
                border-t
                border-[#292a2e]
                mt-[41px]
                pt-[40px]
            ">

                <section>

                    <h2 className="
                        text-[23px]
                        font-bold
                        mb-[13px]
                    ">
                        Your Payment Methods
                    </h2>

                    <p className="
                        text-[#b9bac4]
                        text-[14px]
                        max-w-[930px]
                    ">
                        By saving your payment information, this payment method will be set as the default for all purchases made using your Epic Games Account on PC and mobile, including purchases on the Epic Games Store, in Fortnite, Rocket League, and Fall Guys.
                    </p>

                    <h3 className="
                        text-[21px]
                        font-bold
                        mt-[32px]
                        mb-[20px]
                    ">
                        Add a payment method
                    </h3>

                    <div className="flex flex-col gap-[13px]">

                        <button
                            type="button"
                            className="
                                w-full
                                h-[42px]
                                px-[12px]
                                rounded-[10px]
                                border
                                border-[#45464b]
                                bg-[#202125]
                                hover:bg-[#292a2e]
                                transition-colors
                                flex
                                items-center
                                gap-[20px]
                                text-left
                            "
                        >

                            <div className="
                                w-[35px]
                                h-[22px]
                                bg-white
                                rounded-[5px]
                                flex
                                items-center
                                justify-center
                            ">

                                <FiCreditCard
                                    size={20}
                                    className="text-[#202125]"
                                />

                            </div>

                            <span className="text-[14px] text-white">
                                Credit Card / Debit Card
                            </span>

                        </button>

                        <button
                            type="button"
                            className="
                                w-full
                                mb-[100px]
                                h-[42px]
                                px-[12px]
                                rounded-[10px]
                                border
                                border-[#45464b]
                                bg-[#202125]
                                hover:bg-[#292a2e]
                                transition-colors
                                flex
                                items-center
                                gap-[20px]
                                text-left
                            "
                        >

                            <div className="
                                w-[35px]
                                h-[22px]
                                bg-white
                                rounded-[5px]
                                flex
                                items-center
                                justify-center
                            ">

                                <span className="
                                    text-[#003087]
                                    text-[17px]
                                    font-bold
                                    italic
                                ">
                                    P
                                </span>

                            </div>

                            <span className="text-[14px] text-white">
                                PayPal
                            </span>

                        </button>

                    </div>

                </section>

            </div>

            {addFundsOpen && (
                <AddFunds
                    setOpen={setAddFundsOpen}
                />
            )}

        </div>
    )
}

export default Payment