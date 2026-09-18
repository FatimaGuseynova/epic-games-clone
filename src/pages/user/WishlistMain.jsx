import React from 'react'
import Wishlist from './components/Wishlist'

function WishlistMain() {
    return (
        <div className='bg-[#121216] h-full pb-10  '>
            <div className='min-[1100px]:w-[80%] max-[700px]:w-[95%] w-[90%] mx-auto'>
            
                <Wishlist />
            </div>
        </div>
    )
}

export default WishlistMain