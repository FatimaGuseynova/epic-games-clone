import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Logo from '../../ui/Logo'
import stfab from '../../../images/stfab.png'
import chfab from '../../../images/chfab.png'
import skfab from '../../../images/skfab.png'
import unreal from '../../../images/unreal.png'
import meta from '../../../images/meta.png'
import twin from '../../../images/twin.png'
import kids from '../../../images/kids.png'
import real from '../../../images/real.png'
import Fortnite from '../../../images/svgcodes/Fortnite'
import { IoMdClose } from "react-icons/io";
import Fallguys from '../../../images/svgcodes/Fallguys'
import Rocket from '../../../images/svgcodes/Rocket'

function EpicDrawer({ open, setOpen, menu, setMenu }) {
    const toggleEpic = () => {
        setOpen(!open)
    }
    return (
        <div >
            <div
                onClick={toggleEpic} className={`flex items-center justify-between pt-[16px] pl-[20px]  cursor-pointer  ${open ? "fixed z-[1000]   bg-[#121216] h-12 w-full" : " "}`}

            >
                <div className={`items-center ${menu ? "opacity-0 duration-100" : "flex opacity-100 duration-100"}`}>
                    <Logo />

                    <IoIosArrowDown
                        className={`mr-2 transition-transform duration-200 ${open ? "rotate-180" : ""
                            }`}
                    />
                </div>

                <div onClick={() => { setOpen(false) }} className={`${open ? "block" : "hidden"}`}>
                    <IoMdClose className='w-10 h-10 pr-3' />
                </div>
            </div>
            <div className={`z-9999 w-full absolute p-6 top-12 left-0 bg-[#121216] ${open ? " translate-y-0 opacity-100" : "  -translate-y-350 opacity-0  pointer-events-none"}`}>
                <h2 className='text-[34px] font-extrabold mb-6'>Epic Games</h2>
                <div>
                    <h4 className='font-bold text-[22px]'>Play</h4>
                    <ul className='my-2.5 flex flex-col justify-between'>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-1 flex items-center'>
                            <Fortnite />
                            Fortnite</li>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-1 flex items-center'>
                            <Rocket/>

                            Rocket League</li>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-1 flex items-center'>
                            <Fallguys />                 Fall Guys</li>
                    </ul>
                    <h4 className='font-bold pt-[18px] text-[22px]'>Discover</h4>
                    <ul className='my-2.5 flex flex-col justify-between'>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-2 flex items-center'>
                            <div className='w-6 mr-3.5'>
                                <Logo />
                            </div> Epic Games Store
                        </li>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-2 flex items-center'>
                            <img className='w-7  mr-3.5' src={skfab} alt="fab" />
                            Fab</li>
                        <li className='hover:bg-[#7d7d7d95] text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-7  mr-3.5' src={chfab} alt="fab" />
                            Sketchfab</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={stfab} alt="fab" />
                            ArtStation</li>
                    </ul>
                    <h4 className='font-bold pt-[18px] text-[22px]'>Create</h4>
                    <ul>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={unreal} alt="unreal" />
                            Unreal Engine</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <Fortnite />
                            Create in Fortnite</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={meta} alt="meta" />

                            MetaHuman</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={twin} alt="twinmotion" />
                            Twinmotion</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={real} alt="scan" />
                            RealityScan</li>
                        <li className='hover:bg-[#7d7d7d95] pl-2 text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <div className='w-6 mr-2.5'>
                                <Logo />
                            </div>
                            Epic Online Services</li>
                        <li className='hover:bg-[#7d7d7d95] pl-2 text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <div className='w-6 mr-2.5'>
                                <Logo />
                            </div>
                            Publish on Epic Games Store</li>
                        <li className='hover:bg-[#7d7d7d95]  text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <img className='w-6  mr-3.5' src={kids} alt="kids" />
                            Kids Web Services</li>
                        <li className='hover:bg-[#7d7d7d95] pl-2 text-[17px] rounded-[7px] p-3 pl-1.5 flex items-center'>
                            <div className='w-6 mr-2.5'>
                                <Logo />
                            </div>
                            Developer Community</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EpicDrawer