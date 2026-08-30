import React from 'react'
import Logo from '../../components/ui/Logo'
import HeaderDropdown from '../../components/header/dropdown/HeaderDropdown'
import EpicDropdown from '../../components/header/dropdown/EpicDropdown'
import ChangeLanguage from '../../components/header/dropdown/ChangeLanguage'

function MainSupport() {
  return (
    <div className='bg-[#160C2D] pb-4'>
      <div className='w-[94%] mx-auto '>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='pt-0.5 mr-2'>
              <EpicDropdown />
            </div>
            <div className='flex items-center gap-8 pt-2'>
              <h2 className='text-white  font-bold text-[32px]'>Support</h2>
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
    </div>
  )
}

export default MainSupport