import React from 'react'

function Downloads() {
    return (
        <div className="w-full text-white pt-20">
            <section className="pb-13 border-b border-[#29292d]">
                <h2 className="text-[20px] leading-[36px] font-bold mb-[20px]">
                    Download account data
                </h2>

                <p className="leading-[28px] text-[#b7b7c0] max-w-[900px]">
                    Download a copy of available data you've shared with us. We'll email you once it's ready, and you'll have 15 days to download it.
                </p>

                <button className="mt-[20px] bg-[#353539] hover:bg-[#414145] transition-colors rounded-[12px] px-4 py-3 font-semibold">
                    Request download
                </button>
            </section>

            <section className="pt-[30px]">
                <h2 className="text-[20px] leading-[36px] font-bold mb-[20px]">
                    Delete account
                </h2>

                <p className=" leading-[28px] text-[#b7b7c0] max-w-[900px]">
                    Delete your Epic Games account including all personal information, purchases, game progress, in-game content, your Epic account balance and Unreal projects. Your account will be permanently deleted in 30 days.
                </p>

                <button className="mt-[20px] bg-[#ff3d57] hover:bg-[#ff5269] transition-colors rounded-[12px] px-4 py-3 font-semibold text-black">
                    Delete account
                </button>
            </section>
        </div>
    )
}

export default Downloads