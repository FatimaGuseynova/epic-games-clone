import React, { useEffect } from 'react';
import { IoCardOutline, IoClose } from "react-icons/io5";
import Logo from '../../../components/ui/Logo';

function AddFunds({ setOpen }) {
    const amounts = [5, 10, 20, 50, 100];
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";



        };
    }, []);
    return (
        <div className="
                fixed
                inset-0
                z-[9999]
                bg-black/60
                flex
                items-center
            justify-center
            h-screen
        ">

            <div className="
                relative
                w-[calc(100%-32px)]
                max-w-[1300px]
                h-[90vh]
                max-h-[830px]
                bg-[#17171b]
                text-white
                flex
                overflow-hidden

                max-[879px]:w-screen
                max-[879px]:h-screen
                max-[879px]:max-h-none
            ">

                <div className="
                    w-[170px]
                    bg-[#202125]
                    flex
                    flex-col
                    items-center
                    pt-10
                    flex-shrink-0

                    max-[879px]:hidden
                ">
                    <Logo />
                    <h2 className="text-[20px] pt-1 font-extrabold
                    ">
                        Checkout
                    </h2>

                </div>

                <div className="
                    flex-1
                    relative
                    flex
                    flex-col
                    items-center
                    px-10
                    pt-8
                    min-w-0
                    max-[879px]:px-4
                    max-[879px]:pt-4
                ">

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                            absolute
                            top-5
                            right-5
                            z-20
                            w-9
                            h-9
                            flex
                            items-center
                            justify-center
                            text-[#d6d6d6]
                            hover:text-white
                            hover:bg-[#303035]
                            rounded-full
                            duration-200

                            max-[879px]:top-3
                            max-[879px]:right-3
                        "
                    >
                        <IoClose className="text-[25px]" />
                    </button>

                    <div className="
                        w-full
                        flex
                        justify-start

                        max-[879px]:hidden
                    ">

                        <div className="
                            flex
                            items-center
                            gap-3
                        ">

                            <div className="
                                w-7
                                h-7
                                rounded-full
                                bg-[#454549]
                                flex
                                items-center
                                justify-center
                                text-[13px]
                            ">
                                M
                            </div>

                            <span className="
                                text-[15px]
                                font-semibold
                            ">
                                Mafla7
                            </span>

                        </div>

                    </div>

                    <div className="
                        flex
                        flex-col
                        items-center
                        mt-14

                        max-[879px]:mt-7
                    ">

                        <IoCardOutline
                            className="
                                text-[#63dca5]
                                text-[27px]
                                mb-3

                                max-[879px]:text-[20px]
                                max-[879px]:mb-1
                            "
                        />

                        <h1 className="
                            text-[25px]
                            font-extrabold

                            max-[879px]:text-[14px]
                        ">
                            Account Balance
                        </h1>

                        <div className="
                            text-[#63e49e]
                            text-[40px]
                            mt-1

                            max-[879px]:text-[25px]
                        ">
                            $0.00
                        </div>

                        <p className="
                            text-[#b8b8bd]
                            text-center
                            text-[14px]
                            mt-4
                            leading-[18px]
                            max-w-[720px]

                            max-[879px]:text-[13px]
                            max-[879px]:mt-2
                            max-[879px]:max-w-[350px]
                        ">
                            Use your account balance to buy games, V-Bucks, and in-game items.
                            <br />
                            Your account balance is tied to this account, so make sure you're
                            signed in to the right one!
                        </p>

                    </div>

                    <div className="
                        w-full
                        border
                        border-[#444449]
                        rounded-[18px]
                        p-7
                        mt-10

                        max-[879px]:mt-6
                        max-[879px]:p-3
                        max-[879px]:rounded-[9px]
                    ">

                        <h2 className="
                            text-[20px]
                            font-extrabold
                            mb-7

                            max-[879px]:text-[10px]
                            max-[879px]:mb-4
                        ">
                            How much do you want to add?
                        </h2>

                        <div className="
                            flex
                            gap-2
                            w-full
                        ">

                            {amounts.map((amount) => (

                                <button
                                    key={amount}
                                    type="button"
                                    className="
                                        flex-1
                                        h-[45px]
                                        rounded-[13px]
                                        bg-[#48484d]
                                        text-[15px]
                                        font-semibold
                                        hover:bg-[#55555a]
                                        duration-200
                                        min-w-0
                                        max-[879px]:h-[33px]
                                        max-[879px]:rounded-[5px]
                                        max-[879px]:text-[8px]
                                    "
                                >${amount}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFunds;