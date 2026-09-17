import React, { useState } from 'react'

import { IoClose } from "react-icons/io5"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

import Payment from '../../user/components/Payment'
import AddFunds from '../../user/components/AddFunds'
import Logo from '../../../components/ui/Logo'

function CheckoutModal({ product, onClose }) {

    const price = product?.price ?? 0
    const vat = +(price * 0.18).toFixed(2)
    const subtotal = price
    const total = +(subtotal + vat).toFixed(2)
    const reward = +(total * 0.05).toFixed(2)

    const [openSection, setOpenSection] = useState(null)
    const [module, setModule] = useState(false)

    const toggleSection = (section) => {
        setOpenSection(prev => prev === section ? null : section)
    }

    return (
        <div>

            {module && (
                <AddFunds
                    product={product}
                    setOpen={() => setModule(false)}
                />
            )}

            {!module && (
                <div className='fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4'>
                    <div className='bg-[#181819] w-full max-w-[1100px] max-h-[90vh] rounded-xl overflow-y-auto flex flex-col min-[760px]:flex-row'>

                        <div className='min-[760px]:w-[45%] min-[760px]:border-r-1 border-[#2a2a2e] p-6'>

                            <div className='flex items-center gap-2 mb-6'>
                                <Logo />
                                <h2 className='text-white text-[20px] font-bold'>
                                    Checkout
                                </h2>
                            </div>

                            <div className='flex items-center gap-3 border-b-1 border-[#2a2a2e] pb-5 mb-5'>

                                <img
                                    src={product?.productLogo?.url}
                                    alt={product?.name}
                                    className='w-16 h-20 object-cover rounded-md'
                                />

                                <div className='flex justify-between items-start w-full'>

                                    <p className='text-white text-[15px] font-medium'>
                                        {product?.name}
                                    </p>

                                    <p className='text-white text-[15px] font-medium'>
                                        {price === 0
                                            ? "Free"
                                            : `$${price.toFixed(2)}`
                                        }
                                    </p>

                                </div>

                            </div>

                            <div className='space-y-2 text-[14px]'>

                                <div className='flex justify-between text-[#c7c7c9]'>
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                <div className='flex justify-between text-[#c7c7c9]'>
                                    <span>VAT included (18%)</span>
                                    <span>${vat.toFixed(2)}</span>
                                </div>

                            </div>

                            <div className='flex justify-between items-center border-t-1 border-[#2a2a2e] mt-4 pt-4'>

                                <span className='text-white text-[18px] font-bold'>
                                    Total
                                </span>

                                <span className='text-white text-[18px] font-bold'>
                                    ${total.toFixed(2)}
                                </span>

                            </div>

                            <div className='mt-4 inline-flex items-center gap-1 bg-[#0f2e26] text-[#3ddc97] text-[13px] px-3 py-1.5 rounded-full'>
                                <span className='text-[15px]'>⊕</span>
                                <span>
                                    Get ${reward.toFixed(2)} in Epic Rewards.
                                </span>
                            </div>

                        </div>

                        <div className='min-[760px]:w-[55%] p-6 relative'>

                            <button
                                onClick={onClose}
                                className='absolute top-6 right-6 text-[#a0a0a3] hover:text-white'
                            >
                                <IoClose size={22} />
                            </button>

                            <h3 className='text-white text-[20px] font-bold mb-5'>
                                Payment Details
                            </h3>

                            <div className='space-y-3'>

                                <div className='bg-[#232326] rounded-lg'>

                                    <button
                                        onClick={() => toggleSection('balance')}
                                        className='w-full flex items-center justify-between hover:bg-[#2c2c30] rounded-lg px-4 py-3 text-white'
                                    >

                                        <span className='flex items-center gap-3 text-[15px]'>
                                            <span className='text-[#3ddc97]'>▤</span>
                                            Account Balance
                                        </span>

                                        {openSection === 'balance'
                                            ? <FaChevronUp size={14} />
                                            : <FaChevronDown size={14} />
                                        }

                                    </button>

                                    {openSection === 'balance' && (
                                        <div
                                            onClick={() => setModule(true)}
                                            className='px-4 pb-4 pt-1 text-[#26BBFF] text-[14px] cursor-pointer hover:underline'
                                        >
                                            Add funds
                                        </div>
                                    )}

                                </div>

                                <div className='bg-[#232326] rounded-lg'>

                                    <button
                                        onClick={() => toggleSection('rewards')}
                                        className='w-full flex items-center justify-between hover:bg-[#2c2c30] rounded-lg px-4 py-3 text-white'
                                    >

                                        <span className='flex items-center gap-3 text-[15px]'>
                                            <span className='text-[#3ddc97]'>⊕</span>
                                            Epic Rewards
                                        </span>

                                        {openSection === 'rewards'
                                            ? <FaChevronUp size={14} />
                                            : <FaChevronDown size={14} />
                                        }

                                    </button>

                                    {openSection === 'rewards' && (
                                        <div className='px-4 pb-4 text-[#a0a0a3] text-[13px] leading-relaxed'>

                                            Start collecting 5% to 20% with every purchase.

                                            <br />

                                            <span className='underline cursor-pointer text-[#a0a0a3]'>
                                                Learn more
                                            </span>

                                        </div>
                                    )}

                                </div>

                                <label className='w-full flex items-center justify-between bg-[#232326] hover:bg-[#2c2c30] rounded-lg px-4 py-3 text-white cursor-pointer'>

                                    <span className='flex items-center gap-3 text-[15px]'>
                                        <span>💳</span>
                                        Credit Card / Debit Card
                                    </span>

                                    <input
                                        type="radio"
                                        name="payment"
                                        className='w-4 h-4 accent-[#26BBFF]'
                                    />

                                </label>

                                <label className='w-full flex items-center justify-between bg-[#232326] hover:bg-[#2c2c30] rounded-lg px-4 py-3 text-white cursor-pointer'>

                                    <span className='flex items-center gap-3 text-[15px]'>
                                        <span className='text-[#0070ba] font-bold'>
                                            PP
                                        </span>
                                        PayPal
                                    </span>

                                    <input
                                        type="radio"
                                        name="payment"
                                        className='w-4 h-4 accent-[#26BBFF]'
                                    />

                                </label>

                            </div>

                            <button className='mt-4 flex items-center gap-2 text-white text-[14px] bg-[#232326] hover:bg-[#2c2c30] px-4 py-2.5 rounded-lg'>
                                <span>+</span>
                                Creator Code
                            </button>

                            <button
                                disabled
                                className='w-full mt-6 bg-[#3a3a3d] text-[#7a7a7d] font-semibold py-3 rounded-lg cursor-not-allowed'
                            >
                                Pay Now
                            </button>

                            <p className='text-[#7a7a7d] text-[12px] mt-4 leading-relaxed'>
                                By selecting 'Pay Now', you certify that you are over 18,
                                are authorized to use this payment method, and agree to the{" "}

                                <span className='text-[#26BBFF] underline cursor-pointer'>
                                    End User License Agreement
                                </span>.
                            </p>

                            <p className='text-[#7a7a7d] text-[12px] mt-3 leading-relaxed'>
                                You are paying for a digital license for this product;
                                for terms, see{" "}

                                <span className='text-[#26BBFF] underline cursor-pointer'>
                                    purchase policy
                                </span>.
                            </p>

                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default CheckoutModal