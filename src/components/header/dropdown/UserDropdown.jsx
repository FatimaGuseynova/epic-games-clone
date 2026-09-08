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
                <div className="px-3 pt-3 pb-2 text-[14px] font-bold text-[#a8a8ad]">
                    STORE
                </div>
            ),
            disabled: true
        },
        {
            key: "achievements",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <Trophy size={19} />
                    My Achievements
                </div>
            )
        },
        {
            key: "rewards",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <CircleStar size={19} />
                    Epic Rewards
                </div>
            )
        },
        {
            key: "balance",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <WalletCards size={19} />
                    Account Balance
                </div>
            )
        },
        {
            key: "gifts",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <Gift size={19} />
                    Gifts
                </div>
            )
        },
        {
            key: "coupons",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <BadgeCheck size={19} />
                    Coupons
                </div>
            )
        },
        {
            key: "account",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <UserRound size={19} />
                    Account
                </div>
            )
        },
        {
            key: "redeem",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <CreditCard size={19} />
                    Redeem Code
                </div>
            )
        },
        {
            key: "fortnite",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
                    <GiftIcon size={19} />
                    Redeem Fortnite Gift Card
                </div>
            )
        },
        {
            key: "wishlist",
            label: (
                <div className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]">
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
                    className="flex items-center justify-between px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12]"
                >
                    <div className="flex items-center gap-3">
                        <CircleHelp size={19} />
                        Support
                    </div>
                    <ExternalLink size={17} />
                </Link>
            )
        },
        {
            key: "logout",
            label: (
                <div
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 text-[16px] text-white rounded-[7px] hover:bg-[#ffffff12] cursor-pointer"
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
                <div className="mt-2 w-[313px] rounded-[18px] overflow-hidden bg-gradient-to-b from-[#2b2b2f] to-[#302c31] border border-[#ffffff12] shadow-2xl">
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
                <div className="w-10 h-10 rounded-full bg-[#36363b] flex items-center justify-center text-[18px] font-semibold text-[#e5e5e5]">
                    {user?.username?.[0]?.toUpperCase()}
                </div>
                <span className="text-[16px] text-white">
                    {user?.username}
                </span>
            </button>
        </Dropdown>
    );
};

export default UserDropdown;