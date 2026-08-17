import React, { useState } from 'react'
import Search from '../components/search/Search'
import Discover from '../components/search/Discover'
import Home from '../pages/home/BrowsePopular'
import DiscoverDesktop from '../components/search/DiscoverDesktop'
import MainDiscover from '../pages/discover/MainDiscover'

function Main() {
  const [opened, setOpen] = useState(false)
  return (
    <div className="bg-[#121216] h-[190vh] pt-10">

      <div className='w-[90%] mx-auto'>
        <div className='bg-[#121216] sticky z-999 top-0 flex  justify-between items-center '>
          <Search opened={opened} setOpen={setOpen} />
          <div className='w-full'>
            <DiscoverDesktop />
            <Discover opened={opened} />
          </div>
        </div>
        <div>
          <MainDiscover />
        </div>
      </div>
    </div>
  )
}

export default Main