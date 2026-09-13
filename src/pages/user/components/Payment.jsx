import React, { useState } from 'react'
import { FiAlertCircle, FiPlus, FiCreditCard, FiGift } from 'react-icons/fi'

function Payment() {
    const [agreed, setAgreed] = useState(false)

    const handleAgree = () => {
        setAgreed(true)
    }

    return (
        <div className="w-full text-white">

            <h1 className="text-[48px] leading-[58px] font-bold mb-[12px]">
                Payment settings
            </h1>

            <p className="text-[#b9bac4] text-[21px] leading-[30px]">
                Manage your account balance, transactions, and payment methods.{' '}
                <span className="text-[#20b5f5] underline cursor-pointer">
                    View Privacy Policy.
                </span>
            </p>

            <section className="mt-[78px]">

                <h2 className="text-[30px] leading-[38px] font-bold mb-[20px]">
                    Account balance
                </h2>

                <p className="text-[#b9bac4] text-[21px] leading-[32px] max-w-[900px]">
                    Use your account balance to buy games, V-Bucks, and in-game items. Your balance is non-refundable.{' '}
                    <span className="text-[#20b5f5] underline cursor-pointer">
                        View Terms
                    </span>
                </p>

                {!agreed && (
                    <div className="mt-[52px] w-full min-h-[240px] rounded-[20px] border border-[#8a6911] bg-[#211e17] px-[32px] py-[30px] flex gap-[22px]">

                        <div className="flex-shrink-0 mt-[2px]">
                            <FiAlertCircle
                                className="text-[#f5b91b]"
                                size={30}
                            />
                        </div>

                        <div>
                            <p className="text-white text-[18px] leading-[26px] font-medium max-w-[800px]">
                                To use your account balance, you’ll need to agree to the terms so that you can add and receive funds.
                            </p>

                            <p className="text-white text-[18px] leading-[26px] mt-[28px]">
                                By selecting ‘I agree’, you agree to the{' '}
                                <span className="underline cursor-pointer">
                                    Terms.
                                </span>
                            </p>

                            <button
                                onClick={handleAgree}
                                className="mt-[28px] bg-[#26bbff] hover:bg-[#65ccfb] transition-colors text-[#111216] text-[17px] font-medium rounded-[9px] px-[20px] py-[12px]"
                            >
                                I agree
                            </button>
                        </div>

                    </div>
                )}

            </section>

            <section className="mt-[48px]">

                <h2 className="text-[30px] leading-[38px] font-bold">
                    Balance
                </h2>

                <p className="text-[76px] leading-[90px] font-light mt-[18px]">
                    $0.00
                </p>

                <div className="flex items-center gap-[30px] mt-[48px]">

                    <button
                        className="h-[60px] px-[24px] bg-[#26bbff] hover:bg-[#65ccfb] transition-colors rounded-[10px] flex items-center gap-[14px] text-[#111216] text-[17px] font-medium"
                    >
                        <FiPlus size={25} />
                        Add funds
                    </button>

                    <button
                        className="h-[60px] px-[24px] bg-[#353539] hover:bg-[#414145] transition-colors rounded-[10px] flex items-center gap-[14px] text-white text-[17px] font-semibold"
                    >
                        <FiGift size={23} />
                        Redeem gift card
                    </button>

                </div>

                <div className="mt-[50px]">
                    <span className="text-[#20b5f5] text-[18px] underline cursor-pointer">
                        View transactions
                    </span>
                </div>

            </section>

            <div className="border-t border-[#292a2e] mt-[82px] pt-[80px]">

                <section>

                    <h2 className="text-[30px] leading-[38px] font-bold mb-[20px]">
                        Your Payment Methods
                    </h2>

                    <p className="text-[#b9bac4] text-[21px] leading-[32px] max-w-[930px]">
                        By saving your payment information, this payment method will be set as the default for all purchases made using your Epic Games Account on PC and mobile, including purchases on the Epic Games Store, in Fortnite, Rocket League, and Fall Guys.
                    </p>

                    <h3 className="text-[21px] font-bold mt-[42px] mb-[20px]">
                        Add a payment method
                    </h3>

                    <div className="flex flex-col gap-[13px]">

                        <button
                            className="w-full h-[62px] px-[20px] rounded-[15px] border border-[#45464b] bg-[#202125] hover:bg-[#292a2e] transition-colors flex items-center gap-[20px] text-left"
                        >
                            <div className="w-[45px] h-[32px] bg-white rounded-[5px] flex items-center justify-center">
                                <FiCreditCard
                                    size={23}
                                    className="text-[#202125]"
                                />
                            </div>

                            <span className="text-[20px] text-white">
                                Credit Card / Debit Card
                            </span>
                        </button>

                        <button
                            className="w-full h-[62px] px-[20px] rounded-[15px] border border-[#45464b] bg-[#202125] hover:bg-[#292a2e] transition-colors flex items-center gap-[20px] text-left"
                        >
                            <div className="w-[45px] h-[32px] bg-white rounded-[5px] flex items-center justify-center">
                                <span className="text-[#003087] text-[21px] font-bold italic">
                                    P
                                </span>
                            </div>

                            <span className="text-[20px] text-white">
                                PayPal
                            </span>
                        </button>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default Payment