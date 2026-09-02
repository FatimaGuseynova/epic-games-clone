import React from 'react'
import { Link } from 'react-router'

function FortniteGames() {
  return (
    <div className='bg-[#121216] py-8'>
      <Link className='h-[400px] max-[500px]:h-[340px] text-center flex flex-col justify-end max-[500px]:justify-center items-center w-full bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/fnbr-42-00-c7s4-egs-twifbanner-desktop-2912x800-2912x800-a7af6c880b8c.jpg?resize=1&w=1920&h=1080&quality=medium')" }}
      >
        <h2 className='text-[24px] font-semibold pb-1'>This Week in Fortnite</h2>
        <p className='text-[#A8A6B2]'>See what's new in Fortnite all in one place</p>
        <div className='bg-white max-[500px]:hidden
                             text-black
                             duration-150
                             px-5 my-6
                             w-fit
                             py-3
                             rounded-[10px]
                             text-[16px]
                             font-medium
                             hover:bg-gray-300'>Discover Now</div>
      </Link>

    </div>
  )
}

export default FortniteGames