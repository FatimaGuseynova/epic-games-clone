import React, { useEffect, useState } from 'react'

import { LuExternalLink } from 'react-icons/lu'

import { getCurrentUser } from '../../api/GetCurrentUser'
import { CartsGet } from '../../api/CartsGet'
import { CartRemove } from '../../api/CartRemove'

import CartCard from './components/CartCard'
import Summary from './components/Summary'

function Cart() {
    const [balance, setBalance] = useState(0)
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartLoading, setCartLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then(user => {
                console.log("Current user:", user)
                console.log("User balance:", user.balance)

                setBalance(Number(user.balance) || 0)
            })
            .catch(error => {
                console.error("Get current user error:", error)
            })
            .finally(() => {
                setLoading(false)
            })

        CartsGet()
            .then(data => {
                console.log("Cart:", data)
                setCart(data.data || [])
            })
            .catch(error => {
                console.error("Get cart error:", error)
                setCart([])
            })
            .finally(() => {
                setCartLoading(false)
            })
    }, [])

    const handleRemove = async (item) => {
        console.log("Remove:", item)

        try {
            await CartRemove(item.id)

            setCart(prevCart =>
                prevCart.filter(cartItem => cartItem.id !== item.id)
            )
        } catch (error) {
            console.error("Remove from cart error:", error)
        }
    }

    const handleAddToWishlist = (product) => {
        console.log("Add to wishlist:", product)
    }

    return (
        <div className='bg-[#121216] pt-10 h-full pb-10'>
            <div className='min-[1100px]:w-[80%] max-[700px]:w-[95%] w-[90%] mx-auto'>

                <div className="flex flex-col gap-6 min-[798px]:flex-row min-[798px]:items-center min-[798px]:justify-between">

                    <h1 className="text-[32px] min-[798px]:text-[40px] font-extrabold leading-none">
                        My Cart
                    </h1>

                    <div className="flex flex-col gap-3 min-[798px]:flex-row min-[798px]:items-center min-[798px]:gap-7">

                        <div className="flex items-center gap-2">
                            <span className="text-[15px] min-[798px]:text-[19px] font-medium whitespace-nowrap">
                                Epic Rewards
                            </span>

                            <LuExternalLink
                                size={16}
                                className="min-[798px]:w-[19px] min-[798px]:h-[19px]"
                            />

                            <span className="border border-[#858589] rounded-full px-3 py-1 text-[13px] min-[798px]:text-[16px] font-bold whitespace-nowrap">
                                $0.00
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[15px] min-[798px]:text-[19px] font-medium whitespace-nowrap">
                                Account Balance
                            </span>

                            <LuExternalLink
                                size={16}
                                className="min-[798px]:w-[19px] min-[798px]:h-[19px]"
                            />

                            <span className="border border-[#858589] rounded-full px-3 py-1 text-[13px] min-[798px]:text-[16px] font-bold whitespace-nowrap">
                                {loading
                                    ? '$0.00'
                                    : `$${balance.toFixed(2)}`
                                }
                            </span>
                        </div>

                    </div>
                </div>

                <div className="border-t border-[#29292d] mt-7 min-[798px]:mt-8" />

            </div>

            <div className="mt-8 w-full">

                {cartLoading ? (
                    <div className="text-center text-[#b7b7bd] py-10">
                        Loading cart...
                    </div>
                ) : cart.length === 0 ? (
                    <div className="text-center text-[#b7b7bd] py-10">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="flex flex-col min-[1020px]:flex-row items-center min-[1020px]:items-start justify-center gap-5">

                        <div className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <CartCard
                                    key={item.id}
                                    product={item.product}
                                    cartItem={item}
                                    onRemove={handleRemove}
                                    onAddToWishlist={handleAddToWishlist}
                                />
                            ))}
                        </div>

                        <Summary cart={cart} />

                    </div>
                )}

            </div>
        </div>
    )
}

export default Cart