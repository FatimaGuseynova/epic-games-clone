import React from "react"

function Summary({ cart }) {
    const total = cart.reduce((sum, item) => {
        return sum + Number(item.totalPrice || 0)
    }, 0)

    return (
        <div className="w-fit max-[1020px]:mr-3 max-[1020px]:w-[90vw] p-6">
            <h1 className="text-white text-3xl font-extrabold leading-tight mb-8">
                Games and Apps Summary
            </h1>

            <div className="flex justify-between items-center py-2">
                <span className="text-gray-300 text-base">
                    Price
                </span>

                <span className="text-white text-base">
                    ${total.toFixed(2)}
                </span>
            </div>

            <div className="flex justify-between items-center py-2">
                <span className="text-gray-300 text-base">
                    Taxes
                </span>

                <span className="text-white text-base">
                    Calculated at Checkout
                </span>
            </div>

            <div className="border-t border-gray-800 my-4" />

            <div className="flex justify-between items-center mb-6">
                <span className="text-white font-bold text-lg">
                    Subtotal
                </span>

                <span className="text-white font-bold text-lg">
                    ${total.toFixed(2)}
                </span>
            </div>

            <button className="w-full bg-sky-400 hover:bg-sky-500 transition-colors text-black font-semibold text-lg py-4 rounded-full">
                Check Out
            </button>
        </div>
    )
}

export default Summary