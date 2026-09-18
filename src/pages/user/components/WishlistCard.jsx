import React from 'react'

import { FaWindows, FaApple, FaAndroid } from 'react-icons/fa'

import { GrGift } from 'react-icons/gr'

import star from '../../../images2/star.png'

function WishlistCard({ product, onRemove, onAddToCart }) {

  if (!product) {
    return null
  }

  const isFree =
    product.isFree || Number(product.price) === 0

  const hasDiscount =
    product.isDiscount &&
    Number(product.discountedPrice) > 0

  const currentPrice = hasDiscount
    ? product.discountedPrice
    : product.price

  const getPlatformIcon = platform => {
    switch (platform?.name) {
      case 'Windows':
        return <FaWindows size={15} />

      case 'Android':
        return <FaAndroid size={15} />

      case 'iOS':
        return <FaApple size={15} />

      default:
        return null
    }
  }

  return (
    <div className="bg-[#202023] rounded-[16px] p-4 min-[768px]:p-6">

      <div className="flex gap-6">

        <div className="shrink-0">

          <img
            src={product.coverImage?.url}
            alt={product.name}
            className="w-[163px] h-[218px] object-cover rounded-[5px] max-[767px]:w-[36px] max-[767px]:h-[58px]"
          />

          <div className="flex items-center gap-2 text-[#a7a7a9] mt-3 max-[767px]:mt-2">

            {product?.platforms?.map(platform => (
              <div key={platform.id}>
                {getPlatformIcon(platform)}
              </div>
            ))}

          </div>

        </div>

        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between">

            <div className="min-w-0">

              <div className="flex flex-wrap gap-2">

                {product?.types?.map(type => (
                  <span
                    key={type.id}
                    className="bg-[#4a4a4e] rounded-[4px] px-2 py-1 text-white text-[12px] max-[767px]:text-[9px] max-[767px]:px-1 max-[767px]:py-0.5"
                  >
                    {type.name}
                  </span>
                ))}

                {product?.events?.map(event => (
                  <span
                    key={event.id}
                    className="bg-[#4a4a4e] rounded-[4px] px-2 py-1 text-white text-[12px] max-[767px]:text-[9px] max-[767px]:px-1 max-[767px]:py-0.5"
                  >
                    {event.name}
                  </span>
                ))}

              </div>

              <h2 className="text-white font-bold text-[22px] mt-2 max-[767px]:text-[14px] max-[767px]:mt-1">
                {product.name}
              </h2>

            </div>

            <p className="text-white font-bold text-[21px] shrink-0 max-[767px]:hidden">

              {isFree
                ? 'Free'
                : `$${Number(currentPrice).toFixed(2)}`
              }

            </p>

          </div>

          <div className="border border-[#48484c] rounded-[14px] p-4 mt-6 max-[767px]:mt-5 max-[767px]:p-2">

            <div className="flex items-start gap-4 max-[767px]:gap-2">

              <div className="w-[59px] h-[59px] border-2 border-[#d8d8d8] shrink-0 flex flex-col items-center justify-center text-white max-[767px]:w-[31px] max-[767px]:h-[31px] max-[767px]:border-[1px]">

                <span className="text-[9px] tracking-[2px] leading-none max-[767px]:text-[5px] max-[767px]:tracking-[1px]">
                  IARC
                </span>

                <span className="text-[27px] font-bold leading-none max-[767px]:text-[14px]">
                  {product.ageRestriction || '16+'}
                </span>

              </div>

              <div>

                <p className="text-white font-bold text-[17px] max-[767px]:text-[10px]">
                  {product.ageRestriction || '16+'}
                </p>

                <p className="text-[#b7b7bd] text-[15px] mt-1 max-[767px]:text-[9px] max-[767px]:mt-0.5">
                  Strong Violence
                </p>

              </div>

            </div>

            <div className="border-t border-[#3b3b3f] mt-4 pt-4 text-[#b7b7bd] text-[15px] max-[767px]:mt-2 max-[767px]:pt-2 max-[767px]:text-[9px]">

              Users Interact, In-Game Purchases

              {product.ageRestriction === '18+' &&
                ' (Includes Random Items)'
              }

            </div>

          </div>

          {!isFree && (

            <div className="flex items-center gap-2 mt-5 max-[767px]:mt-3">

              <img
                src={star}
                alt="star"
                className="w-6 h-6 max-[767px]:w-5 max-[767px]:h-5"
              />

              <span className="text-[#d9d65b] text-[18px] max-[767px]:text-[10px]">
                Earn 5% back in Epic Rewards
              </span>

            </div>

          )}

          <div className="flex justify-end items-center gap-3 mt-5 max-[767px]:hidden">

            <button
              onClick={() => onRemove?.(product)}
              className="text-[#bdbdc1] hover:text-white px-3 py-2"
            >
              Remove
            </button>

            {!isFree && (

              <button
                className="w-[50px] h-[50px] border border-[#66666a] rounded-[10px] flex items-center justify-center text-white"
              >
                <GrGift size={21} />
              </button>

            )}

            <button
              onClick={() => onAddToCart?.(product)}
              className="bg-[#26bbff] hover:bg-[#6dd1ff] text-black rounded-[9px] px-5 py-3 min-w-[145px]"
            >
              Add To Cart
            </button>

          </div>

          <div className="hidden max-[767px]:flex flex-col mt-4">

            <p className="text-white text-[12px] font-bold">
              {isFree
                ? 'Free'
                : `$${Number(currentPrice).toFixed(2)}`
              }
            </p>

            <button
              onClick={() => onAddToCart?.(product)}
              className="w-full bg-[#26bbff] text-black rounded-[4px] py-1.5 mt-3 text-[11px]"
            >
              Add To Cart
            </button>

            <button
              onClick={() => onRemove?.(product)}
              className="text-[#bdbdc1] text-[10px] mt-3 self-end"
            >
              Remove
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default WishlistCard