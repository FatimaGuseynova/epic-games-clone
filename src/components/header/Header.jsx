import React, { useState } from 'react'
import EpicDrawer from './dropdown/EpicDrawer';
import { Link } from 'react-router';
import Logo from '../ui/Logo';
import HeaderDropdown from './dropdown/HeaderDropdown';
import HeaderDropdown1 from './dropdown/HeaderDropdown1';
import ChangeLanguage from './dropdown/ChangeLanguage';
import EpicDropdown from './dropdown/EpicDropdown';
import Hamburgermenu from './dropdown/Hamburgermenu';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false)
    const [epicOpen, setEpicOpen] = useState(false);
    return (
        <header className="header bg-[#121216] flex text-[#FEFEFE]">
            <div className='min-[720px]:hidden'>
                <EpicDrawer open={epicOpen} setOpen={setEpicOpen} menu={menuOpen} setMenu={setMenuOpen} />
            </div>
            <div className='max-[720px]:hidden'>
                <EpicDropdown />
            </div>
            <div className="mx-auto w-[93%] flex justify-between items-center h-16 mx-auto">
                <div className="flex items-center gap-3">

                    <div className={` duration-300 ${menuOpen ? " max-[720px]:-translate-x-10" : "max-[720px]:translate-x-0"}`}>
                        <Link to="/" ><img className={`h-[32px] w-[54px] ${epicOpen ? "hidden" : "flex"}`} src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhnx3wl407o5wzb06x28" alt="store" /></Link>
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} max-[720px]:hidden`}>
                        <Link to="/" className='hover:text-[#8b8b92]' >Support</Link>
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} min-[725px]:hidden max-[720px]:hidden`}>
                        <HeaderDropdown />
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} max-[725px]:hidden`}>
                        <HeaderDropdown1 />
                    </div>
                </div>
                <div className="flex items-center text-amber-50  ">
                    <button className={`${epicOpen ? "hidden" : "flex"} mr-2  max-[720px]:hidden`} >  <ChangeLanguage open={langOpen} setOpen={setLangOpen} />
                    </button>
                    <button className={`px-2.5 py-1 ${epicOpen  ? "opacity-0" : "opacity-100"} duration-200 max-[720px]:hidden  cta-button cta-button-primary  text-[14px] rounded-[6px] dark:bg-[#353539] dark:text-white mr-2.5 hover:bg-[#838383] `}>Sign in</button>

                    <button className={`px-2.5 py-1 ${epicOpen ? "hidden" : "flex"} max-[350px]:hidden  cta-button cta-button-primary  text-[14px] rounded-[6px] dark:bg-[#26BBFF] dark:text-black duration-300 hover:bg-[#65ccfb]`}>Download</button>

                    <div className={`min-[720px]:hidden p-4 lg:hidden ${epicOpen ? "hidden" : "flex"}`}>
                        <Hamburgermenu  menulOpen={menuOpen} setMenulOpen={setMenuOpen}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header