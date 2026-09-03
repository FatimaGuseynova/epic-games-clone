import React from 'react'
import { Link, useLocation, NavLink } from 'react-router'
import { SlBasketLoaded } from "react-icons/sl";
import { GrGift } from "react-icons/gr";
import { CiBookmark } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import star from '../../../images2/star.png'
import subsea from '../../../images2/subsea.png'
import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { SiIos } from "react-icons/si";
import { CiShare2 } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import DetailSlider from './DetailSlider';
import { FaFacebookF, FaXTwitter, FaInstagram, FaTwitch, FaDiscord, FaYoutube, FaRedditAlien } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import red from '../../../images2/red.png'

function DetailPage() {
  const location = useLocation()
  const product = location.state?.product

  return (
    <div className='bg-[#121216] h-full pt-7'>
      <div className='min-[900px]:w-[80%] max-[899px]:w-[89%] w-[95%] mx-auto'>
        <div>

          <h1 className='text-white font-bold text-[32px]'>{product.name}</h1>
          <div className='flex items-center gap-4 py-2'>
            <NavLink
              to="/detail"
              className={({ isActive }) =>
                `relative py-3 text-[20px] transition-colors ${isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#26BBFF]"
                  : "text-[#A7A7A9] hover:text-white"
                }`
              }
            >
              Overview
            </NavLink>

            <NavLink
              to="/detail"
              className={({ isActive }) =>
                `relative py-3 text-[20px] transition-colors ${isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#26BBFF]"
                  : "text-[#A7A7A9] hover:text-white"
                }`
              }
            >
              FAQ
            </NavLink>
          </div>
        </div>
        <div className='min-[760px]:grid-cols-[2fr_1fr] gap-5 grid grid-cols-1 '>

          <div className='min-[760px]:order-2  min-w-0 '>
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

            {product?.events?.[0]?.name === "EA Classic Games on Epic" && (
              <p className=' text-[13px] flex items-center gap-2'> <img src={subsea} alt="ea play" className='w-4 rounded-full' /> <span>Save 10% with <span className='underline'>EA Play</span></span></p>

            )}
            <div>
              <div className='flex items-center gap-2'>
                <Link className='w-full my-6 mt-2 rounded-[8px] bg-[#26BBFF] block text-center py-3 mb-3 text-black duration-150 hover:bg-[#6dd1ff]'>Buy Now</Link>
                <Link className='bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469]'><SlBasketLoaded /></Link>
              </div>
              <Link className='w-full flex items-center justify-center  rounded-[8px]  bg-[#343437] block text-center gap-2 py-3 text-white duration-150 hover:bg-[#646469]'><GrGift />  Gift</Link>
              <Link className='w-full flex items-center justify-center  rounded-[8px] my-3 bg-[#343437] block text-center gap-2 py-3 text-white duration-150 hover:bg-[#646469]'><CiBookmark />  WishList</Link>
            </div>
            <div>
              <ul>
                <li className='border-b-1 border-[#222226] text-[16px] min-[760px]:text-[13px]  pb-2 text-[#adaba7] flex justify-between items-center mb-2'>Epic Rewards <span className='flex text-white items-center gap-1'>Earn 5% Back <img className='w-5' src={star} alt="star" /></span></li>
                <li className='border-b-1 border-[#222226] text-[16px] min-[760px]:text-[13px] pb-2 flex text-[#adaba7] justify-between items-center mb-2'>Refund Type <span className='flex items-center gap-1 text-white'>Self-Refundable <CiCircleQuestion size={19} /></span></li>
                <li className='border-b-1 border-[#222226] text-[16px] min-[760px]:text-[13px] pb-2 flex text-[#adaba7] justify-between items-center mb-2'>Developer <span className='flex items-center gap-1 text-white'>{product.developer}</span></li>
                <li className='border-b-1 border-[#222226] text-[16px] min-[760px]:text-[13px] pb-2 flex text-[#adaba7] justify-between items-center mb-2'>Publisher <span className='flex items-center gap-1 text-white'>{product.publisher}</span></li>
                <li className='border-b-1 border-[#222226] text-[16px] min-[760px]:text-[13px] pb-2 flex text-[#adaba7] justify-between items-center mb-2'>Release Date <span className='flex items-center gap-1 text-white'>{product.createdAt.slice(5, 7)}/{product.createdAt.slice(8, 10)}/{product.createdAt.slice(2, 4)}</span></li>
                <li className="border-b border-[#222226] text-[16px] min-[760px]:text-[13px] pb-2 flex text-[#adaba7] justify-between items-center mb-2">
                  <span>Platform</span>

                  <span className="flex items-center gap-2 text-white">
                    {product.platforms?.map((platform) => (
                      <span key={platform.id} className="flex items-center gap-1">
                        {platform.name === "Windows" && <FaWindows size={20} />}
                        {platform.name === "Android" && <FaAndroid size={20} />}
                        {platform.name === "iOS" && <SiIos size={20} />}
                        {platform.name === "Mac OS" && (
                          <span className="text-[13px] text-white">Mac</span>
                        )}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
            <div className='flex w-full items-center gap-2'>
              <button className='flex w-full justify-center items-center gap-1 bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469] font-semibold'><CiShare2 size={18} />Share</button>
              <button className='flex w-full justify-center items-center gap-1 bg-[#343437] rounded-[8px] p-3 duration-150 hover:bg-[#646469] font-semibold'><FaRegFlag />Report</button>

            </div>

          </div>
          <div className='min-[760px]:order-1  min-w-0'>
            <DetailSlider product={product} />
            <div>
              <p className='py-4'>{product.description}</p>
              <div className='py-6 flex items-center justify-between'>
                <div className='pl-3'>
                  <p className='text-[#989FA8] pb-2'>Genres</p>
                  <div className='flex flex-wrap gap-2'>
                    {product.genres.map((item, index) => (
                      <div key={index} className='bg-[#343437] px-1 py-0.5 rounded-[6px]'>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className=' border-l-1 border-[#52565a] px-6 min-[1000px]:pr-30'>
                  <p className='text-[#989FA8] pb-2'>Features</p>
                  <div className='flex flex-wrap w-full gap-2'>
                    {product.features.map((item, index) => (
                      <div key={index} className='bg-[#343437] px-1 py-0.5 rounded-[6px]'>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {product?.events?.[0]?.name === "EA Classic Games on Epic" && (
              <div className='flex items-start gap-18 p-5 rounded-[7px] bg-[linear-gradient(135deg,#4E1C2E_0%,#341837_50%,#131242_100%)]'>
                <div className='flex items-center gap-1.5'>
                  <img className='w-10' src={red} alt="eaplay" />
                  <span className='text-[#FF4747] font-extrabold text-[21px]'>Play</span>
                </div>
                <div>
                  <h6 className='text-[17px]'>Unlock your thrill with EA Play.</h6>
                  <p className='text-[#a3a4a6] pb-2'>Get unlimited access to a collection of EA's top titles, trials of select new games, in-game member rewards, and 10% off EA digital purchases.</p>
                  <button className='border-1 rounded-[6px] border-[#a3a4a6] px-1.5 py-1 text-[14px]'>Explore</button>
                </div>
              </div>
            )}
            <div>
              <div className="mt-6">
                <h3 className="mb-3 text-[21px] font-extrabold text-white">
                  Follow Us
                </h3>

                <div className="flex items-center flex-wrap justify-center min-[760px]:max-[1000px]:gap-5 gap-10 rounded-lg bg-[#202023] px-5 py-8 ">
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <IoGlobeOutline size={26} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaXTwitter size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaFacebookF size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaTwitch size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaDiscord size={28} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaYoutube size={26} />
                  </a>
                  <a
                    href="#"
                    className="text-[#aaa] transition hover:text-white"
                  >
                    <FaRedditAlien size={26} />
                  </a>
                </div>
              </div>
              <p className='text-[13px] border-t-1 border-[#26262A] py-5 mt-5'>* The lowest price offered on The Epic Games Store in the last 30 days before discount</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailPage