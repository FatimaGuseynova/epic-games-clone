import React, { useState } from 'react'
import HeaderDropdown from '../../components/header/dropdown/HeaderDropdown'
import EpicDropdown from '../../components/header/dropdown/EpicDropdown'
import ChangeLanguage from '../../components/header/dropdown/ChangeLanguage'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function MainSupport() {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-[#160C2D] pb-6 mb-10 '>
      <div className='w-[94%] mx-auto '>
        <div className='flex justify-between '>
          <div className='flex'>
            <div className='pt-0.5 max-[900px]:pb-2 mr-2'>
              <EpicDropdown />
            </div>
            <div className='flex items-center gap-8 pt-2'>
              <h2 className='text-white max-[900px]:text-[22px] font-bold text-[32px]'>Support</h2>
              <div>
                <HeaderDropdown />
              </div>
            </div>
          </div>
          <div className='pt-1 flex items-center gap-4'>
            <div className='pt-1'>
              <ChangeLanguage />
            </div>

            <button className={`px-2.5 py-1 max-[350px]:hidden  cta-button cta-button-primary  text-[17px] rounded-[6px] dark:bg-[#26BBFF] dark:text-black duration-300 hover:bg-[#65ccfb]`}>Download</button>

          </div>
        </div>
      </div>
      <div
        className="relative min-h-screen mt-3 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cms-assets.unrealengine.com/AjTAN1C8SLWRn7fg4wnzlz/cmd6p3ms93gvb07ohupgls9ay')",
        }} >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>

        <div className="relative  ">
          <div className='top-8 border-l-4 border-[#F7D82B] p-2 rounded-[7px] bg-[#00000049] z-10 flex w-[70%] mx-auto items-center gap-3'>
            <div className="flex-1">
              <p className={`pt-2 ${open ? "line-clamp-4" : "line-clamp-2"} text-white line-clamp-2 text-[15px]`}>
                Due to the large number of inquiries, our responses may take longer than
                usual. Please do not submit new requests, as it will be faster for us to reply
                on the existing email inquiries.
                Thanks for your patience.
              </p>
            </div>

            <div onClick={() => setOpen(prev => !prev)} className="text-gray-400">
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>

          <div className='w-[84%] mx-auto'>
            <div className='h-[50vh] flex flex-col items-center justify-center'>
              <h3 className='max-[900px]:text-[21px] text-[30px] text-white'>Epic Games Support</h3>
              <h2 className='text-white font-bold max-[900px]:text-[32px] text-[42px]'>How can we help?</h2>
              <input type="text" placeholder='Describe your problem here' className='bg-[#dfdfdf2c] border-1 rounded-[10px] px-5 py-2 border-[#76688A] w-full' />
              <button><IoIosArrowRoundForward /></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default MainSupport