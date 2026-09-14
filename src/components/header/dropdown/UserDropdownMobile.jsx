import React, { useEffect } from 'react';

import {
    IoChevronBack,
    IoTrophyOutline,
    IoSparklesOutline,
    IoWalletOutline,
    IoGiftOutline,
    IoPersonOutline,
    IoCardOutline,
    IoBookmarkOutline
} from "react-icons/io5";

import { MdConfirmationNumber } from "react-icons/md";

function UserDropdownMobile({ user, setProfileOpen }) {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            className="
                fixed
                top-[60px]
                left-0
                right-0
                bottom-0
                z-[1000]
                bg-[#121216]
                text-white
                overflow-y-auto
            "
        >
            <div className="px-4 pt-4 pb-6">

                <button
                    type="button"
                    onClick={() => setProfileOpen(false)}
                    className="
                        flex
                        items-center
                        gap-2
                        text-[18px]
                        mb-6
                    "
                >
                    <IoChevronBack className="text-[28px]" />

                    <span>
                        Back
                    </span>
                </button>

                <div className="flex items-center gap-3 mb-8">

                    <div
                        className="
                            w-[50px]
                            h-[50px]
                            rounded-full
                            bg-[#454549]
                            flex
                            items-center
                            justify-center
                            text-[22px]
                            flex-shrink-0
                        "
                    >
                        {user?.username?.charAt(0).toUpperCase()}
                    </div>

                    <span className="text-[20px]">
                        {user?.username}
                    </span>

                </div>

                <div
                    className="
                        text-[#a9a9ad]
                        text-[13px]
                        font-bold
                        tracking-wide
                        mb-2
                        pl-1
                    "
                >
                    STORE
                </div>

                <div className="flex flex-col">

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoTrophyOutline className="text-[24px]" />
                        <span>My Achievements</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoSparklesOutline className="text-[24px]" />
                        <span>Epic Rewards</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoWalletOutline className="text-[24px]" />
                        <span>Account Balance</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoGiftOutline className="text-[24px]" />
                        <span>Gifts</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <MdConfirmationNumber className="text-[24px]" />
                        <span>Coupons</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoPersonOutline className="text-[24px]" />
                        <span>Account</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoCardOutline className="text-[24px]" />
                        <span>Redeem Code</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoGiftOutline className="text-[24px]" />
                        <span>Redeem Fortnite Gift Card</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-3 min-h-[52px] text-left text-[18px]"
                    >
                        <IoBookmarkOutline className="text-[24px]" />
                        <span>Wishlist</span>
                    </button>

                </div>

            </div>
        </div>
    );
}

export default UserDropdownMobile;