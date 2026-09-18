import React, { useEffect, useState } from 'react'
import { DeleteWishlist } from '../../../api/DeleteWishlist'
import { getCurrentUser } from './../../../api/GetCurrentUser'
import { LuExternalLink } from 'react-icons/lu'
import { IoMailOutline } from 'react-icons/io5'

import WishlistCard from './WishlistCard'

function Wishlist() {
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState([])
  const [wishlistLoading, setWishlistLoading] = useState(true)

  const loadWishlist = async () => {
    try {
      const token = localStorage.getItem('accessToken')

      if (!token) {
        throw new Error('Access token not found')
      }

      const response = await fetch('http://localhost:3000/api/wishlist', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to get wishlist')
      }

      const result = await response.json()

      console.log('Wishlist:', result)

      setWishlist(result.data || [])
    } catch (error) {
      console.error('Wishlist error:', error)
      setWishlist([])
    } finally {
      setWishlistLoading(false)
    }
  }

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        setBalance(Number(user.balance) || 0)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })

    loadWishlist()
  }, [])

  const handleRemove = async (product) => {
    try {
      const wishlistItem = wishlist.find(
        item => item.product?.id === product.id
      )

      if (!wishlistItem) {
        console.error('Wishlist item not found')
        return
      }

      await DeleteWishlist(wishlistItem.id)

      setWishlist(prev =>
        prev.filter(item => item.id !== wishlistItem.id)
      )

    } catch (error) {
      console.error('Failed to remove from wishlist:', error)
    }
  }

  const handleAddToCart = product => {
    console.log('Add to cart:', product)
  }

  return (
    <div className="pt-10">

      <div>

        <div className="flex flex-col min-[798px]:flex-row min-[798px]:items-center min-[798px]:justify-between">

          <div className="order-2 min-[798px]:order-1">
            <h1 className="text-[28px] min-[798px]:text-[40px] font-extrabold leading-none">
              My Wishlist
            </h1>
          </div>

          <div className="order-1 min-[798px]:order-2 flex flex-col min-[798px]:flex-row min-[798px]:items-center gap-2 min-[798px]:gap-7 mb-6 min-[798px]:mb-0">

            <div className="flex items-center gap-2">
              <span className="text-[13px] min-[798px]:text-[19px] font-medium">
                Epic Rewards
              </span>

              <LuExternalLink
                size={16}
                className="min-[798px]:w-[19px] min-[798px]:h-[19px]"
              />

              <span className="border border-[#858589] rounded-full px-3 py-1 text-[12px] min-[798px]:text-[16px] font-bold">
                $0.00
              </span>
            </div>

            <div className="flex items-center gap-2">

              <span className="text-[13px] min-[798px]:text-[19px] font-medium">
                Account Balance
              </span>

              <LuExternalLink
                size={16}
                className="min-[798px]:w-[19px] min-[798px]:h-[19px]"
              />

              <span className="border border-[#858589] rounded-full px-3 py-1 text-[12px] min-[798px]:text-[16px] font-bold">
                {loading
                  ? '$0.00'
                  : `$${balance.toFixed(2)}`
                }
              </span>

            </div>

          </div>

        </div>

        <div className="border-t border-[#29292d] mt-6 min-[798px]:mt-10 pt-3 min-[798px]:pt-0 min-[798px]:border-t-0">

          <div className="bg-[#202023] border-l-[4px] border-[#26bbff] rounded-[4px] min-[798px]:rounded-[5px] px-3 min-[798px]:px-7 py-3 min-[798px]:py-5">

            <div className="flex items-center justify-between gap-3">

              <div className="flex items-start min-[798px]:items-center gap-2 min-w-0">

                <IoMailOutline
                  size={23}
                  className="text-[#26bbff] shrink-0 min-[798px]:w-[27px] min-[798px]:h-[27px]"
                />

                <div className="text-[10px] min-[798px]:text-[17px] leading-[14px] min-[798px]:leading-normal">

                  <span>
                    You are subscribed to wishlist email notifications.
                  </span>

                  <a
                    href="#"
                    className="text-[#26bbff] ml-1.5 hover:underline inline-flex items-center gap-1"
                  >
                    Manage Preferences

                    <LuExternalLink
                      size={13}
                      className="min-[798px]:w-[18px] min-[798px]:h-[18px]"
                    />
                  </a>

                </div>

              </div>

              <button
                type="button"
                className="relative shrink-0 w-[23px] min-[798px]:w-[44px] h-[14px] min-[798px]:h-[24px] rounded-full bg-[#0bd66b]"
              >
                <span className="absolute right-[1px] min-[798px]:right-[2px] top-1/2 -translate-y-1/2 w-[12px] min-[798px]:w-[20px] h-[12px] min-[798px]:h-[20px] rounded-full bg-[#111114]" />
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-6 min-[768px]:mt-8 space-y-4 min-[768px]:space-y-5">

        {wishlistLoading ? (

          <div className="text-[#b7b7bd] text-center py-10">
            Loading wishlist...
          </div>

        ) : wishlist.length === 0 ? (

          <div className="text-[#b7b7bd] text-center py-10">
            Your wishlist is empty.
          </div>

        ) : (

          wishlist.map(item => (
            <WishlistCard
              key={item.id}
              product={item.product}
              onRemove={handleRemove}
              onAddToCart={handleAddToCart}
            />
          ))

        )}

      </div>

    </div>
  )
}

export default Wishlist