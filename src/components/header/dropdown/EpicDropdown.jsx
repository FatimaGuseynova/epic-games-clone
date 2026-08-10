import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
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
import Logo from '../../ui/Logo';
import { IoIosArrowDown } from 'react-icons/io'

function EpicDropdown() {
    return (
        <Dropdown
            trigger={["hover"]}
            popupRender={() => (
                <div className="w-150 ml-3 text-white rounded-3xl font-semibold bg-gradient-to-br from-[#2b2b2fcd] to-[#555555cb] p-2 shadow-2xl">
                    <div className='flex  p-2 gap-2'>
                        <div>
                            <h4 className='font-bold text-[19px]'>Play</h4>
                            <ul className='my-2.5 flex flex-col justify-between'>
                                <li className='hover:bg-[#7d7d7d95] w-[80%] text-[15px] rounded-[7px] p-2 pl-0 flex items-center'>
                                    <Fortnite />
                                    Fortnite</li>
                                <li className='hover:bg-[#7d7d7d95] w-[80%] text-[15px] rounded-[7px] p-2 pl-1 flex items-center'>
                                    <Rocket />
                                    Rocket League</li>
                                <li className='hover:bg-[#7d7d7d95] pb-8 w-[80%] text-[15px] rounded-[7px] p-2 pl-1 flex items-center'>
                                    <Fallguys />                Fall Guys</li>
                            </ul>
                            <hr className='text-[#64646b] w-[240px]' ></hr>
                            <h4 className='font-bold pt-[25px] text-[19px]'>Discover</h4>
                            <ul className='my-2.5 flex flex-col justify-between'>
                                <li className='hover:bg-[#7d7d7d95] w-[80%] text-[15px] rounded-[7px] p-2 pl-2 flex items-center'>
                                    <div className='w-5 mr-3.5'>
                                        <Logo />
                                    </div> Epic Games Store
                                </li>
                                <li className='hover:bg-[#7d7d7d95] w-[80%] text-[15px] rounded-[7px] p-2 pl-2 flex items-center'>
                                    <img className='w-7  mr-3.5' src={skfab} alt="fab" />
                                    Fab</li>
                                <li className='hover:bg-[#7d7d7d95] w-[80%] text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-6 mr-3.5' src={chfab} alt="fab" />
                                    Sketchfab</li>
                                <li className='hover:bg-[#7d7d7d95] w-[80%]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={stfab} alt="fab" />
                                    ArtStation</li>
                            </ul>
                        </div>
                        <div className='h-[80px] absolute top-0 left-[45%] w-px h-full bg-[#64646b]'>    </div>
                        <div className='pl-6'>
                            <h4 className='font-bold text-[19px]'>Create</h4>
                            <ul>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={unreal} alt="unreal" />
                                    Unreal Engine</li>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-0 flex items-center'>
                                    <Fortnite />
                                    Create in Fortnite</li>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={meta} alt="meta" />

                                    MetaHuman</li>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={twin} alt="twinmotion" />
                                    Twinmotion</li>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={real} alt="scan" />
                                    RealityScan</li>
                                <li className='hover:bg-[#7d7d7d95] pl-2 text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <div className='w-5 mr-2.5'>
                                        <Logo />
                                    </div>
                                    Epic Online Services</li>
                                <li className='hover:bg-[#7d7d7d95] pl-2 text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <div className='w-5 mr-2.5'>
                                        <Logo />
                                    </div>
                                    Publish on Epic Games Store</li>
                                <li className='hover:bg-[#7d7d7d95]  text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <img className='w-5 mr-3.5' src={kids} alt="kids" />
                                    Kids Web Services</li>
                                <li className='hover:bg-[#7d7d7d95] pl-2 text-[15px] rounded-[7px] p-2 pl-1.5 flex items-center'>
                                    <div className='w-5 mr-2.5'>
                                        <Logo />
                                    </div>
                                    Developer Community</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        >
            <a className='flex items-center pr-0 pt-4 pl-5  group hover:text-[#8b8b92]'><Logo />  <IoIosArrowDown
                className={`mr-3 mt-1 transition-transform duration-200 group-hover:rotate-180`}
            /></a>
        </Dropdown>
    )
}

export default EpicDropdown