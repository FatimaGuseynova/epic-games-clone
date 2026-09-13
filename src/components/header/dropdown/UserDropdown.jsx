import React from 'react';
import { Dropdown } from 'antd';
import { Link } from 'react-router';
import {
    Trophy,
    CircleStar,
    WalletCards,
    Gift,
    BadgeCheck,
    UserRound,
    CreditCard,
    GiftIcon,
    Bookmark,
    CircleHelp,
    LogOut,
    ExternalLink
} from 'lucide-react';

const UserDropdown = ({ user, setUser }) => {
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("email");
        setUser(null);
    };

    const items = [
        {
            key: "title",
            label: (
                <div className="px-2 pt-1 text-[13px] font-bold text-[#a8a8ad]">
                    STORE
                </div>
            ),
            disabled: true
        },
        {
            key: "achievements",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <Trophy size={19} />
                    My Achievements
                </div>
            )
        },
        {
            key: "rewards",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <CircleStar size={19} />
                    Epic Rewards
                </div>
            )
        },
        {
            key: "balance",
            label: (
                <Link to="/balance" className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <div className='text-white flex items-center gap-2'>
                        <WalletCards size={19} />
                        Account Balance
                    </div>
                </Link>
            )
        },
        {
            key: "gifts",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <Gift size={19} />
                    Gifts
                </div>
            )
        },
        {
            key: "coupons",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <BadgeCheck size={19} />
                    Coupons
                </div>
            )
        },
        {
            key: "account",
            label: (
                <Link to="/account" className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <div className="flex text-white items-center gap-3">
                        <UserRound size={19} />
                        Account
                    </div>
                </Link>
            )
        },
        {
            key: "redeem",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <CreditCard size={19} />
                    Redeem Code
                </div>
            )
        },
        {
            key: "fortnite",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <GiftIcon size={19} />
                    Redeem Fortnite Gift Card
                </div>
            )
        },
        {
            key: "wishlist",
            label: (
                <div className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <Bookmark size={19} />
                    Wishlist
                </div>
            )
        },
        {
            type: "divider"
        },
        {
            key: "support",
            label: (
                <Link
                    to="/support"
                    className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"

                >
                    <div className="flex text-white items-center gap-3">
                        <CircleHelp size={19} />
                        Support
                    </div>
                    <div className='text-white w-full flex items-end justify-end'>
                        <ExternalLink size={17} />
                    </div>
                </Link>
            )
        },
        {
            key: "logout",
            label: (
                <div
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-2 py-1 text-[14px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
                >
                    <LogOut size={19} />
                    Sign Out
                </div>
            )
        }
    ];

    return (
        <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            menu={{
                items,
                style: {
                    background: "transparent",
                    boxShadow: "none",
                    padding: 0
                }
            }}
            popupRender={(menu) => (
                <div className=" w-fit rounded-[18px] overflow-hidden bg-gradient-to-b from-[#2b2b2ff4] to-[#302c31f4] border border-[#ffffff12] shadow-2xl">
                    {React.cloneElement(menu, {
                        style: {
                            background: "transparent",
                            boxShadow: "none"
                        }
                    })}
                </div>
            )}
        >
            <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
            >
                <div className="w-7 h-7 rounded-full bg-[#36363b] flex items-center justify-center text-[14px] font-semibold text-[#e5e5e5]">
                    {user?.username?.[0]?.toUpperCase()}
                </div>
                <span className="text-[15px] max-[720px]:hidden text-white">
                    {user?.username}
                </span>
            </button>
        </Dropdown>
    );
};

export default UserDropdown;