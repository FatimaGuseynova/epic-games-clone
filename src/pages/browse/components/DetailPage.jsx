import React from 'react'
import { Link, useLocation } from 'react-router'
import { SlBasketLoaded } from "react-icons/sl";
import { GrGift } from "react-icons/gr";
import { CiBookmark } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import star from '../../../images2/star.png'
import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { SiIos } from "react-icons/si";
import { CiShare2 } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

function DetailPage() {
  const location = useLocation()
  const product = location.state?.product

  return (
    <div className='bg-[#121216] h-full'>
      <div className='min-[900px]:w-[80%] max-[899px]:w-[89%] w-[95%] mx-auto'>
        <div>

          <h1 className='text-white font-bold text-[32px]'>{product.name}</h1>
          <div className='flex items-center gap-4'>
            <Link to="/detail" >Overview</Link>
            <Link to="/">FAQ</Link>
          </div>
        </div>
        <div className='flex flex-wrap gap-5'>

          <div className='w-full'>
            <div className='flex justify-center items-center'>
              <img src={product.productLogo.url} alt={product.name} />
            </div>
            <div className='border-1 rounded-2xl border-[#222226] p-5'>
              <p className='text-white text-[15px]'>{product.ageRestriction}</p>
              <p className='text-[#a0a0a0] text-[14px]'>Mild Swearing, Moderate Violence, Sexual Innuendo</p>
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <div className='bg-[#343437] rounded-[5px] my-5 px-2 py-0.5'>
                {product.types[0].name === "Game" ? "Base Game" : product.types[0].name}
              </div>
              {product?.events?.[0]?.name === "First Run" && <div className='bg-[#343437] rounded-[5px] my-5 px-2 py-0.5'><div className='flex items-center gap-1'><FaCrown /> <span>First Run</span></div></div>}
            </div>
            <div className='flex items-center justify-center '>
              <h5 className={`${product?.discount > 0 ? "flex" : "hidden"} items-center gap-3`}>
                <div className='bg-[#26BAFE] px-1.5  py-0.5 text-black text-[14px] rounded-2xl'>
                  {product?.discount > 0 && `-${Math.round(100 - ((product.discount / product.price) * 100))}%`}
                </div>
                <div className='text-[15px] line-through text-[#ACA294]'>
                  ${product.price}*
                </div>
                <div className='text-white text-[17px] font-semibold'>
                  ${product.discount}
                </div>
              </h5>
              <h5 className={`text-white text-[17px] font-semibold ${product?.discount && "hidden"}`}>
                {product.price === 0 ? "Free" : "$" + product.price}

              </h5>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <Link className='w-full my-6 rounded-[8px] bg-[#26BBFF] block text-center py-3 mb-3 text-black duration-150 hover:bg-[#6dd1ff]'>Buy Now</Link>
                <Link className='bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469]'><SlBasketLoaded /></Link>
              </div>
              <Link className='w-full flex items-center justify-center  rounded-[8px]  bg-[#343437] block text-center gap-2 py-3 text-white duration-150 hover:bg-[#646469]'><GrGift />  Gift</Link>
              <Link className='w-full flex items-center justify-center  rounded-[8px] my-3 bg-[#343437] block text-center gap-2 py-3 text-white duration-150 hover:bg-[#646469]'><CiBookmark />  WishList</Link>
            </div>
            <div>
              <ul>
                <li className='border-b-1 border-[#222226] pb-2 text-[#ACA294] flex justify-between items-center mb-2'>Epic Rewards <span className='flex text-white items-center gap-1'>Earn 5% Back <img className='w-5' src={star} alt="star" /></span></li>
                <li className='border-b-1 border-[#222226] pb-2 flex text-[#ACA294] justify-between items-center mb-2'>Refund Type <span className='flex items-center gap-1 text-white'>Self-Refundable <CiCircleQuestion size={19} /></span></li>
                <li className='border-b-1 border-[#222226] pb-2 flex text-[#ACA294] justify-between items-center mb-2'>Developer <span className='flex items-center gap-1 text-white'>{product.developer}</span></li>
                <li className='border-b-1 border-[#222226] pb-2 flex text-[#ACA294] justify-between items-center mb-2'>Publisher <span className='flex items-center gap-1 text-white'>{product.publisher}</span></li>
                <li className='border-b-1 border-[#222226] pb-2 flex text-[#ACA294] justify-between items-center mb-2'>Release Date <span className='flex items-center gap-1 text-white'>{product.createdAt.slice(5, 7)}/{product.createdAt.slice(8, 10)}/{product.createdAt.slice(2, 4)}</span></li>
                <li className='border-b-1 border-[#222226] pb-2 flex text-[#ACA294] justify-between items-center mb-2'>Platform <span className='flex items-center gap-1 text-white'>{product.platforms[0].name === "Windows" && <FaWindows size={20} />} {product.platforms[0].name === "Android" && <FaAndroid size={20} />}
                  {product.platforms[0].name === "iOS" && <SiIos size={20} />} {product.platforms[0].name === "Mac OS" && <div className='text-[13px] text-white'>Mac</div>}</span></li>
              </ul>
            </div>
            <div className='flex w-full items-center gap-2'>
              <button className='flex w-full justify-center items-center gap-1 bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469] font-semibold'><CiShare2 size={18} />Share</button>
              <button className='flex w-full justify-center items-center gap-1 bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469] font-semibold'><FaRegFlag />Report</button>

            </div>

          </div>
          <div>
            <p className='py-4'>{product.description}</p>
            <div className='py-6 flex items-center justify-between'>
              <div>
                <p className='text-[#989FA8] pb-2'>Genres</p>
                <div className='flex flex-wrap gap-2'>
                  {product.genres.map((item, index) => (
                    <div key={index} className='bg-[#343437] px-1 py-0.5 rounded-[6px]'>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className=' border-l-1 border-[#52565a] pl-3'>
                <p className='text-[#989FA8] pb-2'>Features</p>
                <div className='flex flex-wrap gap-2'>
                  {product.features.map((item, index) => (
                    <div key={index} className='bg-[#343437] px-1 py-0.5 rounded-[6px]'>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailPage