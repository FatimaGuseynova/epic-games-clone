import React, { useEffect, useState } from 'react'
import background from '../../../images2/epic-savings.avif'
import savecard from '../../../images2/en-epic-savings-card.webp'
import { ProductsGet } from "../../../api/ProductsGet";
import { Link } from 'react-router';
import { CiBookmark } from "react-icons/ci";

function MainSlider() {
  const [loading, setLoading] = useState(true)
  const [res, setRes] = useState({ data: [] })
  const [click, setClick] = useState(-1)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)

      const response = await ProductsGet()
      setRes(response)
      console.log(response)

      setLoading(false)
    }
    getProducts()

  }, [])

  useEffect(() => {
    if (!res.data?.length) return

    setProgress(0)

    const duration = 7000
    const intervalTime = 50
    const step = (intervalTime / duration) * 100

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)

          setClick((prevClick) => {
            if (prevClick === -1) return 0
            if (prevClick === 4) return -1
            return prevClick + 1
          })

          return 100
        }

        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [click, res.data])

  return (
    loading ? (
      <div className='bg-[#121216]'>
        <div className='flex items-center justify-center gap-3 py-8 border-b border-[#29292d]'>
          <div className='w-5 h-5 rounded-full border-2 border-[#26BBFF] border-t-transparent animate-spin'></div>
          <span className='text-white text-[14px]'>Loading...</span>
        </div>
      </div>
    ) : (

      <div className='bg-[#121216]'>
        <div className='min-[1100px]:w-[77%] w-[93%] mx-auto'>
          <div className=' pt-10 max-[795px]:hidden'>
            <div className='flex items-center justify-center gap-5'>
              <div
                className={`${click === -1 ? "block" : "hidden"}  relative z-10 w-[64vw] aspect-[16/9] max-w-[1500px] min-w-[300px] bg-cover bg-center bg-no-repeat rounded-[12px] overflow-hidden`}
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="absolute z-0  rounded-[12px] inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                </div>
                <div className=' '>

                  <div className='flex flex-col p-5 min-[1110px]:pb-20 h-full justify-end absolute z-10  w-[50%]'>

                    <h4 className='pl-19 text-[#F5FBFE]
                        font-black
                        min-[1270px]:pl-35
                        min-[1270px]:text-[21px]
                             text-[13px]
                             pt-6
                             uppercase
                             drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'>Epic</h4>
                    <h2 className=' p-4 py-0 text-[#F5FBFE]
                             font-black
                             
                        min-[1270px]:text-[65px]
                             text-3xl
                             uppercase
                             drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'>Savings</h2>
                    <div className='p-4 pt-6 max-[840px]:pt-1 relative'>
                      <p className='max-[790px]:text-[14px] max-[840px]:w-[150%] text-[13px] pb-2 max-[840px]:pb-1 font-semibold'>AUGUST 6 - AUGUST 20</p>
                      <h6 className='max-[840px]:w-[150%] text-[14px]'>Save big on must-play games and discover
                        new adventures.</h6>
                    </div>

                    <div className='relative'>
                      <button className="
                             bg-white
                             text-black
                             px-5 
                             py-3
                             rounded-[10px]
                             text-[16px]
                             font-medium
                             ml-4
                             hover:bg-gray-300
                              ">Save Now</button>

                    </div>


                  </div>

                </div>
              </div>
              {res.data.slice(0, 5).map((item, index) => (
                <Link to="/detail" state={{ product: item }} key={index} className={`${click === index ? "block" : "hidden"} relative z-10 w-[64vw] aspect-[16/9] max-w-[1500px] min-w-[300px] bg-cover bg-center bg-no-repeat rounded-[12px] overflow-hidden`}
                  style={{ backgroundImage: `url('${item.detailImage?.[1]?.url || item.detailImage?.[0]?.url}')` }}
                >
                  <div className="absolute z-0 !text-white rounded-[12px] inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                  </div>
                  <div className='flex w-[85%] flex-col p-5 min-[1120px]:pb-20 h-full justify-end absolute z-10  w-[50%]'>
                    <h2 className=' font-semibold text-[17px]'>{item.name}</h2>
                    <h6 className='text-[14px] py-3 max-[900px]:py-1 w-full'>{item.description.split(' ').slice(0, 23).join(' ')}...</h6>
                    <p className='pb-2 pt-7 max-[910px]:pt-1'>{item.price === 0 ? "Free" : item.discount ? "$" + item.discount : "$" + item.price}</p>
                    <div className='flex gap-3'>
                      <div className=" bg-white
                             text-black
                             duration-150
                             px-5
                             w-fit
                             py-3
                             rounded-[10px]
                             text-[16px]
                             font-medium
                             hover:bg-gray-300">{item.price === 0 ? "Play now" : "Pre-Purchase Now"}</div>
                      <div className='bg-[#d2d2d236] rounded-[10px] duration-150 p-3 hover:bg-[#e9e9e979]'><CiBookmark size={20} /></div>
                    </div>
                  </div>
                </Link>

              ))}
              <div>
                <ul>
                  <li
                    onClick={() => setClick(-1)}
                    className={`${click === -1 && "bg-[#2b2b2f]"} relative overflow-hidden cursor-pointer flex items-center gap-3 p-2 rounded-[10px]`}
                  >
                    <img className='w-7 h-9.5 min-[960px]:w-10 relative z-11 h-full rounded-[5px]' src={savecard} alt="savecard" />
                    <p className="text-white text-[15px] h-full relative z-11 leading-[22px]">Epic Savings</p>
                    {click === -1 && (
                      <div
                        className="absolute z-0 top-0 left-0 h-full bg-[#5c5c5c]"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    )}
                  </li>
                  {res.data.slice(0, 5).map((item, index) => (
                    <li onClick={() => setClick(index)} key={index}
                      className={`relative overflow-hidden cursor-pointer flex items-center gap-3 p-2 rounded-[10px] ${click === index ? "bg-[#2b2b2f]" : ""
                        }`}>
                      <img className='w-7 min-[960px]:w-10 h-9.5 relative z-11 h-full rounded-[5px]' src={item.coverImage.url} alt="popular game" />
                      <p className="text-white text-[15px] h-full relative z-11 ">{item.name}</p>
                      {click === index && (
                        <div
                          className="absolute z-0 top-0 left-0 h-full bg-[#5c5c5c]"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
}

export default MainSlider