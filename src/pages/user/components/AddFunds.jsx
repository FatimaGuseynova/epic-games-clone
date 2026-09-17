import React, { useState } from 'react'

import { useLocation } from 'react-router'
import { UpdateBalance } from '../../../api/UpdateBalance'
import { FiArrowLeft, FiX, FiHelpCircle } from 'react-icons/fi'
import { FaRegCreditCard } from 'react-icons/fa'
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si'
import { getCurrentUser } from '../../../api/GetCurrentUser'
import Logo from '../../../components/ui/Logo'

function AddFunds({ setOpen, product, onBalanceUpdate }) {

    const location = useLocation()

    const isDetailPage = location.pathname.includes('/detail')

    const [selectedAmount, setSelectedAmount] = useState(null)

    const [paymentMethod, setPaymentMethod] = useState(null)

    const [savePayment, setSavePayment] = useState(false)

    const amounts = [5, 10, 20, 50, 100]
    const [loading, setLoading] = useState(false)

const handleAddFunds = async () => {
    if (!selectedAmount || loading) return

    try {
        setLoading(true)

        const result = await UpdateBalance(selectedAmount)

        const newBalance = Number(result?.balance)

        if (!Number.isNaN(newBalance)) {
            onBalanceUpdate(newBalance)
        } else {
            const user = await getCurrentUser()
            onBalanceUpdate(Number(user.balance) || 0)
        }

        setOpen()
    } catch (error) {
        console.error(error)
    } finally {
        setLoading(false)
    }
}

    return (

        <div className='fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4'>

            <div className='bg-[#181819] w-full max-w-[1100px] max-h-[90vh] rounded-xl overflow-y-auto flex flex-col min-[760px]:flex-row'>

                <div className='min-[760px]:w-[25%] min-[760px]:border-r-1 border-[#2a2a2e] p-6'>

                    <div className='flex items-center gap-2 mb-8'>

                        <Logo />

                        <h2 className='text-white text-[18px] font-bold'>
                            Checkout
                        </h2>

                    </div>

                    {isDetailPage && (

                        <div className='relative w-fit'>

                            <button
                                onClick={() => setOpen()}
                                className='w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                            >

                                <FiArrowLeft
                                    className='text-black'
                                    size={18}
                                />

                            </button>

                        </div>

                    )}

                </div>

                <div className='min-[760px]:w-[75%] p-8 relative flex flex-col items-center'>

                    <button
                        onClick={() => setOpen()}
                        className='absolute top-6 right-6 text-[#a0a0a3] hover:text-white'
                    >

                        <FiX size={22} />

                    </button>

                    <div className='w-14 h-14 rounded-full bg-[#0f2e26] flex items-center justify-center mb-4'>

                        <span className='text-[#3ddc97] text-[24px]'>
                            ▤
                        </span>

                    </div>

                    <h3 className='text-white text-[24px] font-bold mb-2'>
                        Account Balance
                    </h3>

                    <p className='text-[#3ddc97] text-[36px] font-light mb-4'>
                        $0.00
                    </p>

                    <p className='text-[#b9bac4] text-[14px] text-center max-w-[500px] mb-8'>

                        Use your account balance to buy games, V-Bucks, and in-game items.

                        <br />

                        Your account balance is tied to this account, so make sure you're signed in to the right one!

                    </p>

                    <div className='w-full max-w-[700px] bg-[#202125] rounded-xl p-6'>

                        <h4 className='text-white text-[16px] font-semibold mb-4'>
                            How much do you want to add?
                        </h4>

                        <div className='flex flex-wrap gap-3'>

                            {amounts.map((amount) => (

                                <button
                                    key={amount}
                                    onClick={() => {
                                        setSelectedAmount(amount)
                                        setPaymentMethod(null)
                                    }}
                                    className={`flex-1 min-w-[90px] h-[46px] rounded-lg font-medium transition-colors ${selectedAmount === amount
                                        ? 'bg-[#26bbff] text-[#111216]'
                                        : 'bg-[#353539] hover:bg-[#414145] text-white'
                                        }`}
                                >

                                    ${amount}

                                </button>

                            ))}

                        </div>

                    </div>

                    {selectedAmount && (

                        <div className='w-full max-w-[700px] mt-6'>

                            <h4 className='text-[#c7c7c9] text-[15px] font-semibold mb-3'>
                                Payment method
                            </h4>

                            <div className='border border-[#414145] rounded-xl overflow-hidden'>

                                <button
                                    type='button'
                                    onClick={() => setPaymentMethod('card')}
                                    className={`w-full flex items-center justify-between px-5 py-4 text-white transition-colors ${paymentMethod === 'card'
                                        ? 'bg-[#303034]'
                                        : 'bg-[#202125] hover:bg-[#29292d]'
                                        }`}
                                >

                                    <span className='flex items-center gap-4'>

                                        <span className='w-11 h-7 bg-white rounded-md flex items-center justify-center'>

                                            <FaRegCreditCard
                                                size={21}
                                                className='text-[#222225]'
                                            />

                                        </span>

                                        <span className='text-[15px] font-medium'>
                                            Credit Card / Debit Card
                                        </span>

                                    </span>

                                    <span
                                        className={`w-7 h-7 rounded-full border flex items-center justify-center ${paymentMethod === 'card'
                                            ? 'border-[#26bbff] bg-[#26bbff]'
                                            : 'border-[#77777b]'
                                            }`}
                                    >

                                        {paymentMethod === 'card' && (

                                            <span className='w-2.5 h-2.5 bg-[#181819] rounded-full' />

                                        )}

                                    </span>

                                </button>

                                <button
                                    type='button'
                                    onClick={() => setPaymentMethod('paypal')}
                                    className={`w-full flex items-center justify-between px-5 py-4 text-white border-t border-[#414145] transition-colors ${paymentMethod === 'paypal'
                                        ? 'bg-[#303034]'
                                        : 'bg-[#202125] hover:bg-[#29292d]'
                                        }`}
                                >

                                    <span className='flex items-center gap-4'>

                                        <span className='w-11 h-7 bg-white rounded-md flex items-center justify-center'>

                                            <SiPaypal
                                                size={21}
                                                className='text-[#0070ba]'
                                            />

                                        </span>

                                        <span className='text-[15px] font-medium'>
                                            PayPal
                                        </span>

                                    </span>

                                    <span
                                        className={`w-7 h-7 rounded-full border flex items-center justify-center ${paymentMethod === 'paypal'
                                            ? 'border-[#26bbff] bg-[#26bbff]'
                                            : 'border-[#77777b]'
                                            }`}
                                    >

                                        {paymentMethod === 'paypal' && (

                                            <span className='w-2.5 h-2.5 bg-[#181819] rounded-full' />

                                        )}

                                    </span>

                                </button>

                            </div>

                            {paymentMethod === 'card' && (

                                <div className='mt-3'>

                                    <h4 className='text-white text-[15px] mb-2'>
                                        Card details
                                    </h4>

                                    <div className='border border-[#77777b] rounded-xl overflow-hidden'>

                                        <div className='h-[60px] flex items-center justify-between px-6 border-b border-[#77777b]'>

                                            <span className='text-[#b9bac4] text-[18px]'>
                                                0000 0000 0000 0000
                                            </span>

                                            <div className='flex items-center gap-1'>

                                                <span className='w-10 h-7 bg-white rounded-md flex items-center justify-center'>
                                                    <span className='text-[9px] font-bold text-blue-600'>
                                                        CB
                                                    </span>
                                                </span>

                                                <span className='w-10 h-7 bg-white rounded-md flex items-center justify-center'>
                                                    <SiMastercard
                                                        size={28}
                                                        className='text-[#eb001b]'
                                                    />
                                                </span>

                                                <span className='w-10 h-7 bg-white rounded-md flex items-center justify-center'>
                                                    <SiVisa
                                                        size={27}
                                                        className='text-[#1434cb]'
                                                    />
                                                </span>

                                                <span className='h-7 px-2 bg-[#555559] rounded-md flex items-center text-white text-[12px] font-medium'>
                                                    +1
                                                </span>

                                            </div>

                                        </div>

                                        <div className='flex h-[60px]'>

                                            <div className='w-1/2 flex items-center px-6 border-r border-[#77777b]'>

                                                <span className='text-[#b9bac4] text-[18px]'>
                                                    MM/YY
                                                </span>

                                            </div>

                                            <div className='w-1/2 flex items-center justify-between px-6'>

                                                <span className='text-[#b9bac4] text-[18px]'>
                                                    CVV
                                                </span>

                                                <FiHelpCircle
                                                    size={20}
                                                    className='text-[#a0a0a3]'
                                                />

                                            </div>

                                        </div>

                                    </div>

                                    <h4 className='text-white text-[15px] mt-5 mb-2'>
                                        Name on card
                                    </h4>

                                    <div className='h-[60px] border border-[#77777b] rounded-xl flex items-center px-6'>

                                        <span className='text-[#b9bac4] text-[18px]'>
                                            Name on card
                                        </span>

                                    </div>

                                </div>

                            )}

                            {paymentMethod && (

                                <div className='mt-5 flex items-start gap-4'>

                                    <button
                                        type='button'
                                        onClick={() => setSavePayment(!savePayment)}
                                        className={`w-[50px] h-[26px] shrink-0 rounded-full border border-[#77777b] flex items-center px-1 transition-colors ${savePayment
                                            ? 'bg-[#26bbff] justify-end'
                                            : 'bg-[#353539] justify-start'
                                            }`}
                                    >

                                        <span className='w-[20px] h-[20px] rounded-full bg-[#c7c7c9]' />

                                    </button>

                                    <div>

                                        <p className='text-white text-[18px] font-medium'>
                                            Save payment method for future purchases
                                        </p>

                                        <p className='text-[#c7c7c9] text-[15px] leading-[1.25] mt-2'>

                                            Saving this payment method will make it the default method for your Epic Games account purchases on PC and mobile.

                                            Edit saved payment methods at checkout or in Account/Payment settings.

                                            Read more about{' '}

                                            <span className='text-[#26bbff]'>
                                                deleting payment methods.
                                            </span>

                                        </p>

                                    </div>

                                </div>

                            )}

                            {paymentMethod && (

                                <button
                                    onClick={handleAddFunds}
                                    disabled={loading}
                                    className='w-full mt-7 py-3.5 rounded-xl text-[18px] font-semibold bg-[#26bbff] text-[#111216] hover:bg-[#3ac3ff] transition-colors disabled:opacity-50'
                                >
                                    {loading ? 'Processing...' : `Add $${selectedAmount}`}
                                </button>

                            )}

                            {paymentMethod && (

                                <p className='text-white text-[14px] mt-7 leading-relaxed'>

                                    By selecting 'Add ${selectedAmount}', you certify that you are over 18,
                                    are authorized to use this payment method, and agree to the{' '}

                                    <span className='text-[#26bbff]'>
                                        End User License Agreement
                                    </span>.

                                </p>

                            )}

                        </div>

                    )}

                </div>

            </div>

        </div>
    )
}

export default AddFunds