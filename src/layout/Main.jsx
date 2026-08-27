import React, { useState, useEffect } from 'react'
import Search from '../components/search/Search'
import Discover from '../components/search/Discover'
import Home from '../pages/home/BrowsePopular'
import DiscoverDesktop from '../components/search/DiscoverDesktop'
import MainDiscover from '../pages/discover/MainDiscover'
import { getUsers } from "../api/getUsers";

function Main() {
  useEffect(() => {
        getUsers();
    }, []);
  const [opened, setOpen] = useState(false)
  return (
    <div className="bg-[#121216]">

      <div className='min-[1010px]:w-[90%] w-[97%] mx-auto'>
        <div className='bg-[#121216] sticky z-999 top-0 flex  justify-between items-center '>
          <Search opened={opened} setOpen={setOpen} />
          <div className='w-full'>
            <DiscoverDesktop />
            <Discover opened={opened} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main