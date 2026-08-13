import React, { useState } from 'react'
import Search from '../components/search/Search'
import Discover from '../components/search/Discover'
import Home from '../pages/home/Home'

function Main() {
  const [opened, setOpen] = useState(false)
  return (
    <div className="bg-[#121216] h-[190vh]">
      <div className='bg-[#121216] sticky z-999 top-0 flex  justify-between items-center '>
        <Search opened={opened} setOpen={setOpen} />
        <div className='w-full'>
          <Discover  opened={opened} />
        </div>
      </div>
      <Home/>
    </div>
  )
}

export default Main