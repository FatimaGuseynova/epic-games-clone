import React from 'react'
import { Link } from 'react-router'
import { CiBookmark } from 'react-icons/ci'
import { GrGift } from 'react-icons/gr'
import { SlBasketLoaded } from 'react-icons/sl'

function UserActions({ opened }) {
    const accessToken = localStorage.getItem("accessToken")

    if (!accessToken || opened) {
        return null
    }

    return (
        <div className="flex items-center gap-5">
            <Link to="/wishlist" className="text-[#a7a7aa] hover:text-white transition-colors">
                <CiBookmark size={22} />
            </Link>
            <button className="text-[#a7a7aa] hover:text-white transition-colors">
                <GrGift size={20} />
            </button>
            <Link to="/" className="relative text-[#a7a7aa] hover:text-white transition-colors">
                <SlBasketLoaded size={21} />
            </Link>
        </div>
    )
}

export default UserActions