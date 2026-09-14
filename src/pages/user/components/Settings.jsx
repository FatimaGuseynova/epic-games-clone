import React, { useState } from 'react'
import {
    FiUser,
    FiShare2,
    FiMail,
    FiShield,
    FiFileText,
    FiCreditCard,
    FiClock,
    FiTag,
    FiDollarSign,
    FiStar,
    FiGift,
    FiUsers,
    FiChevronDown,
    FiChevronUp,
    FiX
} from 'react-icons/fi'
import { CiStar } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";

function Settings() {
    const [transactionsOpen, setTransactionsOpen] = useState(false)
    const [settingsOpen, setSettingsOpen] = useState(false)

    return (
        <div className='pt-5'>
            <div className="min-[1000px]:hidden w-full bg-[#202023] text-[#c9c9d1] overflow-hidden">

                <button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className="w-full h-[68px] px-10 flex items-center justify-between bg-[#17171a] text-white"
                >
                    <div className="flex items-center gap-4">
                        <FiUser className="text-[#00b7ff] text-[20px]" />
                        <span className="text-[15px] font-medium">Settings</span>
                    </div>

                    {settingsOpen ? (
                        <FiX className="text-[22px]" />
                    ) : (
                        <FiChevronDown className="text-[22px]" />
                    )}
                </button>

                {settingsOpen && (
                    <div className="bg-[#202023]">

                        <div className="px-5 py-7">
                            <h2 className="text-[14px] font-semibold text-white px-5 mb-2">
                                Account
                            </h2>

                            <div className="space-y-1">

                                <div className="flex items-center gap-4 h-[38px] px-5 rounded-[8px] bg-[#303034] text-white">
                                    <FiUser className="text-[#00b7ff] text-[21px]" />
                                    <span className="text-[14px]">Settings</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiShare2 className="text-[#00b7ff] text-[21px]" />
                                    <span className="text-[14px]">Linked accounts</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiMail className="text-[#00b7ff] text-[21px]" />
                                    <span className="text-[14px]">Communication preferences</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiShield className="text-[#00b7ff] text-[21px]" />
                                    <span className="text-[14px]">Password and security</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiFileText className="text-[#00b7ff] text-[21px]" />
                                    <span className="text-[14px]">Legal history</span>
                                </div>

                            </div>
                        </div>

                        <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-6">

                            <h2 className="text-[14px] font-semibold text-white px-5 mb-2">
                                Payment and rewards
                            </h2>

                            <div className="space-y-1">

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiCreditCard className="text-[#7770ff] text-[21px]" />
                                    <span className="text-[14px]">Payment settings</span>
                                </div>

                                <button
                                    onClick={() => setTransactionsOpen(!transactionsOpen)}
                                    className="w-full flex items-center justify-between h-[38px] px-5"
                                >
                                    <div className="flex items-center gap-4">
                                        <FiClock className="text-[#7770ff] text-[21px]" />
                                        <span className="text-[14px]">Transactions</span>
                                    </div>

                                    {transactionsOpen ? (
                                        <FiChevronUp className="text-[19px]" />
                                    ) : (
                                        <FiChevronDown className="text-[19px]" />
                                    )}
                                </button>

                                {transactionsOpen && (
                                    <div className="pl-[57px] py-1 space-y-1">

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            Purchases
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            In-island transactions
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            Gifts
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            Subscriptions
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            Account balance
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            Code redemptions
                                        </div>

                                        <div className="h-[38px] flex items-center text-[14px]">
                                            V-Bucks Card redemptions
                                        </div>

                                    </div>
                                )}

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiTag className="text-[#7770ff] text-[21px]" />
                                    <span className="text-[14px]">Subscriptions</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiDollarSign className="text-[#7770ff] text-[21px]" />
                                    <span className="text-[14px]">In-game currency</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiStar className="text-[#7770ff] text-[21px]" />
                                    <span className="text-[14px]">Epic rewards</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px] px-5">
                                    <FiGift className="text-[#7770ff] text-[21px]" />
                                    <span className="text-[14px]">Redeem code</span>
                                </div>

                            </div>
                        </div>

                        <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-7">

                            <h2 className="text-[14px] font-semibold text-white px-5 mb-2">
                                Parental controls
                            </h2>

                            <div className="flex items-center gap-4 h-[38px] px-5">
                                <FiUsers className="text-[#c348ff] text-[21px]" />
                                <span className="text-[14px]">Parental controls</span>
                            </div>

                        </div>

                        <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-7">

                            <h2 className="text-[14px] font-semibold text-white px-5 mb-2">
                                Creator & developer tools
                            </h2>

                            <div className="flex flex-col gap-1 px-5">

                                <div className="flex items-center gap-4 h-[38px]">
                                    <CiStar className="text-[#ff58de] text-[24px]" />
                                    <span className="text-[14px]">Programs</span>
                                </div>

                                <div className="flex items-center gap-4 h-[38px]">
                                    <IoStorefrontOutline className="text-[#ff58de] text-[22px]" />
                                    <span className="text-[14px]">Publisher profile</span>
                                </div>

                            </div>

                        </div>

                    </div>
                )}
            </div>
            <div className="min-[1000px]:block max-[1000px]:hidden w-[340px] bg-[#202023] text-[#c9c9d1] rounded-[20px] overflow-hidden">
                <div className="px-1 py-7">
                    <h2 className="text-[21px] font-semibold text-white px-5 mb-2">
                        Account
                    </h2>

                    <div className="space-y-1">
                        <div className="flex items-center gap-4 h-[50px] px-5 rounded-[10px] bg-[#303034] text-white">
                            <FiUser className="text-[#00b7ff] text-[25px]" />
                            <span className="text-[14px]">Settings</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiShare2 className="text-[#00b7ff] text-[25px]" />
                            <span className="text-[14px]">Linked accounts</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiMail className="text-[#00b7ff] text-[25px]" />
                            <span className="text-[14px]">Communication preferences</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiShield className="text-[#00b7ff] text-[25px]" />
                            <span className="text-[14px]">Password and security</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiFileText className="text-[#00b7ff] text-[25px]" />
                            <span className="text-[14px]">Legal history</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-6">
                    <h2 className="text-[21px] font-semibold text-white px-5 mb-2">
                        Payment and rewards
                    </h2>

                    <div className="space-y-1">
                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiCreditCard className="text-[#7770ff] text-[25px]" />
                            <span className="text-[14px]">Payment settings</span>
                        </div>

                        <button
                            onClick={() => setTransactionsOpen(!transactionsOpen)}
                            className="w-full flex items-center justify-between h-[50px] px-5"
                        >
                            <div className="flex items-center gap-4">
                                <FiClock className="text-[#7770ff] text-[25px]" />
                                <span className="text-[14px]">Transactions</span>
                            </div>

                            {transactionsOpen ? (
                                <FiChevronUp className="text-[23px]" />
                            ) : (
                                <FiChevronDown className="text-[23px]" />
                            )}
                        </button>

                        {transactionsOpen && (
                            <div className="pl-[57px] py-1 space-y-1">
                                <div className="h-[49px] flex items-center text-[14px]">
                                    Purchases
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    In-island transactions
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    Gifts
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    Subscriptions
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    Account balance
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    Code redemptions
                                </div>

                                <div className="h-[49px] flex items-center text-[14px]">
                                    V-Bucks Card redemptions
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiTag className="text-[#7770ff] text-[25px]" />
                            <span className="text-[14px]">Subscriptions</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiDollarSign className="text-[#7770ff] text-[25px]" />
                            <span className="text-[14px]">In-game currency</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiStar className="text-[#7770ff] text-[25px]" />
                            <span className="text-[14px]">Epic rewards</span>
                        </div>

                        <div className="flex items-center gap-4 h-[50px] px-5">
                            <FiGift className="text-[#7770ff] text-[25px]" />
                            <span className="text-[14px]">Redeem code</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-7">
                    <h2 className="text-[21px] font-semibold text-white px-5 mb-2">
                        Parental controls
                    </h2>

                    <div className="flex items-center gap-4 h-[50px] px-5">
                        <FiUsers className="text-[#c348ff] text-[25px]" />
                        <span className="text-[14px]">Parental controls</span>
                    </div>
                </div>
                <div className="border-t border-[#3b3b3f] px-5 pt-7 pb-7">
                    <h2 className="text-[21px] font-semibold text-white px-5 mb-2">
                        Creator & developer tools
                    </h2>

                    <div className="flex flex-col justify-center gap-4 h-[50px] px-5">
                        <div className='flex  pt-5 items-center gap-4 h-[50px]'>
                            <CiStar className="text-[#ff58de] text-[26px]" />
                            <span className="text-[14px]">Programs</span>
                        </div>
                        <div className='flex items-center gap-4 h-[50px]'>
                            <IoStorefrontOutline className="text-[#ff58de] text-[25px]" />
                            <span className="text-[14px]">Publisher profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings