import React from 'react'
import background from '../../../images2/epic-savings.avif'
import savecard from '../../../images2/en-epic-savings-card.webp'

function MainSlider() {
  return (
    <div>
      <div className=' pt-10 max-[768px]:hidden'>
        <div className='flex items-center justify-center gap-5'>
<div
  className='relative z-10 w-[67vw] aspect-[16/9] max-w-[1500px] min-w-[300px] bg-contain bg-center bg-no-repeat rounded-[12px] overflow-hidden'
  style={{ backgroundImage: `url(${background})` }}
>
    <div className="absolute z-0  rounded-[12px] inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent">
 </div>
            <div className=' '>

              <div className='flex flex-col p-5 min-[890px]:pb-20 h-full justify-end absolute z-10  w-[50%]'>
   
                <h4 className='pl-19 text-[#F5FBFE]
                        font-black
                             text-[14px]
                             pt-6
                             uppercase
                             drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'>Epic</h4>
                <h2 className=' p-4 pt-0 text-[#F5FBFE]
                             font-black
                             text-4xl
                             uppercase
                             drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'>Savings</h2>
                <div className='p-4 pt-6 relative'>
                  <p className='text-[14px] pb-2 font-semibold'>AUGUST 6 - AUGUST 20</p>
                  <h6>Save big on must-play games and discover
                    new adventures.</h6>
                </div>

                <div className='relative'>
                  <button className="
                                         ml-4.5 bg-white
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
          <div>
            <ul>
              <li className='flex items-center gap-3'>
                <img className='w-full h-full' src={savecard} alt="savecard" />
                <p>Epic Savings</p>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSlider