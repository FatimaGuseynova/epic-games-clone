import React from 'react'

import { GrGift } from 'react-icons/gr'

import star from '../../../images2/star.png'

function WishlistCard({ product, onRemove, onAddToCart }) {

  if (!product) {
    return null
  }

  const isFree =
    product.isFree || Number(product.price) === 0

  const hasDiscount =
    !isFree &&
    Number(product.discount) > 0 &&
    Number(product.discount) < Number(product.price)

  const currentPrice = hasDiscount
    ? product.discount
    : product.price

  const discountPercent = hasDiscount
    ? Math.round(
        ((Number(product.price) - Number(product.discount)) /
          Number(product.price)) *
          100
      )
    : 0

  return (
    <div className="bg-[#202023] rounded-[16px] p-4 min-[768px]:p-6">

      <div className="flex gap-6">

        <div className="shrink-0">

          <img
            src={product.coverImage?.url}
            alt={product.name}
            className="w-[163px] h-[218px] object-cover rounded-[5px] max-[767px]:w-[56px] max-[767px]:h-[88px]"
          />

        </div>

        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between">

            <div className="min-w-0">

              <h2 className="text-white font-bold text-[18px] max-[767px]:text-[16px]">
                {product.name}
              </h2>

            </div>

            <p className="text-white font-bold text-[18px] shrink-0 max-[767px]:hidden">
              {isFree
                ? 'Free'
                : `$${Number(currentPrice).toFixed(2)}`
              }
            </p>

          </div>

          <div className="border border-[#48484c] rounded-[14px] p-4 mt-6 max-[767px]:mt-5 max-[767px]:p-2">

            <p className="text-white font-bold text-[14px] max-[767px]:text-[12px]">
              Description
            </p>

            <p className="text-[#b7b7bd] text-[12px] leading-5 mt-2 max-[767px]:text-[11px] max-[767px]:leading-5 max-[767px]:mt-1">
              {(product.description || '').slice(0, 2000)}
              {product.description?.length > 2000 && '...'}
            </p>

          </div>

          {hasDiscount && (
            <div className="flex items-center gap-2 mt-3 max-[767px]:mt-2">

              <span className="bg-[#26BAFE] px-1 py-0.5 text-black text-[14px] w-fit rounded-2xl">
                -{discountPercent}%
              </span>

              <span className="text-[14px] line-through text-[#ACA294]">
                ${Number(product.price).toFixed(2)}
              </span>

              <span className="text-white block text-[14px]">
                ${Number(product.discount).toFixed(2)}
              </span>

            </div>
          )}

          {!isFree && (
            <div className="flex items-center gap-2 mt-5 max-[767px]:mt-3">

              <img
                src={star}
                alt="star"
                className="w-6 h-6 max-[767px]:w-5 max-[767px]:h-5"
              />

              <span className="text-[#d9d65b] text-[14px] max-[767px]:text-[11px]">
                Earn 5% back in Epic Rewards
              </span>

            </div>
          )}

          <div className="flex justify-end items-center gap-3 mt-5 max-[767px]:hidden">

            <button
              onClick={() => onRemove?.(product)}
              className="text-[#bdbdc1] hover:text-white px-3 py-2 text-[14px]"
            >
              Remove
            </button>

            {isFree === false && (
              <button
                className="w-[50px] h-[50px] border border-[#66666a] rounded-[10px] flex items-center justify-center text-white"
              >
                <GrGift size={21} />
              </button>
            )}

            <button
              onClick={() => onAddToCart?.(product)}
              className="bg-[#26bbff] hover:bg-[#6dd1ff] text-black rounded-[9px] px-5 py-3 min-w-[145px] text-[14px]"
            >
              Add To Cart
            </button>

          </div>

          <div className="hidden max-[767px]:flex flex-col mt-4">

            <p className="text-white text-[13px] font-bold">
              {isFree
                ? 'Free'
                : `$${Number(currentPrice).toFixed(2)}`
              }
            </p>

            <div className="flex items-center gap-2 mt-3">

              {isFree === false && (
                <button
                  className="w-[32px] h-[32px] border border-[#66666a] rounded-[5px] flex items-center justify-center text-white shrink-0"
                >
                  <GrGift size={14} />
                </button>
              )}

              <button
                onClick={() => onAddToCart?.(product)}
                className="flex-1 bg-[#26bbff] text-black rounded-[4px] py-1.5 text-[12px]"
              >
                Add To Cart
              </button>

            </div>

            <button
              onClick={() => onRemove?.(product)}
              className="text-[#bdbdc1] text-[11px] mt-3 self-end"
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