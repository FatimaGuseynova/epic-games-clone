import React, { useEffect, useState } from 'react'
import background from '../../../images2/epic-savings.avif'
import savecard from '../../../images2/en-epic-savings-card.webp'
import { ProductsGet } from "../../../api/ProductsGet";
import { Link } from 'react-router';

function MainSlider() {
  const [res, setRes] = useState({ data: [] })
  const [click, setClick] = useState(-1)
  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductsGet()
      setRes(response)
      console.log(response)
    }
    getProducts()

  }, [])
  return (
    <div className='min-[1100px]:w-[77%] w-[93%] mx-auto'>
      <div className=' pt-10 max-[768px]:hidden'>
        <div className='flex items-center justify-center gap-5'>
          <div
            className={`${click === -1 ? "block" : "hidden"}  relative z-10 w-[64vw] aspect-[16/9] max-w-[1500px] min-w-[300px] bg-cover bg-center bg-no-repeat rounded-[12px] overflow-hidden`}
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="absolute z-0  rounded-[12px] inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
            </div>
            <div className=' '>

              <div className='flex flex-col p-5 min-[890px]:pb-20 h-full justify-end absolute z-10  w-[50%]'>

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
                <div className='p-4 pt-6 relative'>
                  <p className='mac-[790px]:text-[14px] text-[13px] pb-2 font-semibold'>AUGUST 6 - AUGUST 20</p>
                  <h6 className='text-[14px]'>Save big on must-play games and discover
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
                             hover:bg-gray-300
                              ">Save Now</button>

                </div>


              </div>

            </div>
          </div>
          {res.data.slice(0, 5).map((item, index) => (
            <div key={index} className={`${click === index ? "block" : "hidden"} relative z-10 w-[64vw] h-[50vh] max-w-[1500px] min-w-[300px] bg-cover bg-center bg-no-repeat rounded-[12px] overflow-hidden`}
              style={{ backgroundImage: `url('${item.detailImage[0].url}')` }}
            >
              <div className="absolute z-0 !text-white rounded-[12px] inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
              </div>
              <div className='flex flex-col p-5 min-[890px]:pb-20 h-full justify-end absolute z-10  w-[50%]'>
                <h6 className='text-[14px] py-3'>{item.description}</h6>
                <p className='pb-2 pt-7'>${item.price}</p>
                <Link className=" bg-white
                             text-black
                             px-5
                             w-full
                             py-3
                             rounded-[10px]
                             text-[16px]
                             font-medium
                             hover:bg-gray-300">{item.price === 0 ? "Play now" : "Pre-Purchase Now"}</Link>
              </div>
            </div>

          ))}
          <div>
            <ul>
              <li onClick={() => setClick(-1)} className='hover:bg-[#4c4c4c87] duration-150 p-4 pl-2 py-2 rounded-[10px] flex items-center gap-3'>
                <img className='w-7 h-9.5 rounded-[5px]' src={savecard} alt="savecard" />
                <p>Epic Savings</p>
              </li>
              {res.data.slice(0, 5).map((item, index) => (
                <li onClick={() => setClick(index)} className='hover:bg-[#4c4c4c87] duration-150 p-4 pl-2 py-2 rounded-[10px] flex items-center gap-3' key={index}>
                  <img className='w-7  rounded-[5px]' src={item.coverImage.url} alt="popular game" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSlider