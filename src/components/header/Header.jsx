import React, { useEffect, useState } from 'react'
import EpicDrawer from './dropdown/EpicDrawer';
import { Link } from 'react-router';
import HeaderDropdown from './dropdown/HeaderDropdown';
import HeaderDropdown1 from './dropdown/HeaderDropdown1';
import ChangeLanguage from './dropdown/ChangeLanguage';
import EpicDropdown from './dropdown/EpicDropdown';
import Hamburgermenu from './dropdown/Hamburgermenu';
import { getUsers } from '../../api/getUsers';
import UserDropdown from './dropdown/UserDropdown';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false)
    const [epicOpen, setEpicOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const email = localStorage.getItem("email");

        if (!accessToken && !refreshToken) {
            setUser(null);
            return;
        }

        const loadUser = async () => {
            try {
                const users = await getUsers();
                const currentUser = users.find(item => item.email === email);

                if (currentUser) {
                    setUser(currentUser);
                }
            } catch (error) {
                console.log(error);
            }
        };

        loadUser();
    }, []);

    return (
        <header className="header bg-[#121216] flex text-[#FEFEFE]">
            <div className='min-[720px]:hidden'>
                <EpicDrawer open={epicOpen} setOpen={setEpicOpen} menu={menuOpen} setMenu={setMenuOpen} />
            </div>
            <div className='max-[720px]:hidden'>
                <EpicDropdown />
            </div>
            <div className="mx-auto w-[93%] flex justify-between items-center h-16">
                <div className="flex items-center gap-3">
                    <div className={`duration-300 ${menuOpen ? "max-[720px]:-translate-x-10" : "max-[720px]:translate-x-0"}`}>
                        <Link to="/">
                            <img
                                className={`h-[32px] w-[54px] ${epicOpen ? "hidden" : "flex"}`}
                                src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhnx3wl407o5wzb06x28"
                                alt="store"
                            />
                        </Link>
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} max-[720px]:hidden`}>
                        <Link to="/support" className='hover:text-[#8b8b92]'>Support</Link>
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} min-[725px]:hidden max-[720px]:hidden`}>
                        <HeaderDropdown />
                    </div>
                    <div className={`${epicOpen ? "hidden" : "flex"} max-[725px]:hidden`}>
                        <HeaderDropdown1 />
                    </div>
                </div>
                <div className="flex items-center text-amber-50">
                    <div className={`${epicOpen ? "hidden" : "flex"} pt-1 mr-2 max-[720px]:hidden`}>
                        <ChangeLanguage open={langOpen} setOpen={setLangOpen} />
                    </div>
                    {user ? (
                        <div className="mr-2.5 max-[600px]:hidden">
                            <UserDropdown user={user} setUser={setUser} />
                        </div>
                    ) : (
                        <Link
                            to="/signin"
                            className={`px-2.5 py-1 ${epicOpen ? "opacity-0" : "opacity-100"} duration-200 max-[720px]:hidden cta-button cta-button-primary text-[14px] rounded-[6px] dark:bg-[#353539] dark:text-white mr-2.5 hover:bg-[#838383]`}
                        >
                            Sign in
                        </Link>
                    )}
                    <button className={`${epicOpen ? "hidden" : "flex"} max-[350px]:hidden p-2 px-3 text-[14px] rounded-[6px] dark:bg-[#26BBFF] dark:text-black duration-300 hover:bg-[#65ccfb]`}>
                        Download
                    </button>
                    <div className={`min-[720px]:hidden p-4 lg:hidden ${epicOpen ? "hidden" : "flex"}`}>
                        <Hamburgermenu menulOpen={menuOpen} setMenulOpen={setMenuOpen} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header