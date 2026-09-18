import React, { useEffect, useState } from 'react'

import Search from './../components/search/Search'
import Discover from './../components/search/Discover'
import DiscoverDesktop from './../components/search/DiscoverDesktop'
import UserActions from './../components/search/UserActions'

import { getCurrentUser } from './../api/GetCurrentUser'

function Main() {

  const [opened, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {

    const checkAuth = async () => {

      const accessToken = localStorage.getItem('accessToken')

      if (!accessToken) {
        setUser(null)
        setIsAuthenticated(false)
        return
      }

      try {
        const currentUser = await getCurrentUser()

        setUser(currentUser)
        setIsAuthenticated(true)

      } catch (error) {

        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        setUser(null)
        setIsAuthenticated(false)
      }
    }

    checkAuth()

    const handleLogout = () => {
      setUser(null)
      setIsAuthenticated(false)
    }

    window.addEventListener('logout', handleLogout)

    return () => {
      window.removeEventListener('logout', handleLogout)
    }

  }, [])

  return (
    <div className="bg-[#121216] sticky z-999 top-0 py-1">

      <div className="min-[1010px]:w-[90%] w-[97%] mx-auto">

        <div className="bg-[#121216] flex items-center relative">

          <Search
            opened={opened}
            setOpen={setOpen}
          />

          <div className="w-full flex items-center justify-between">
            <div className="hidden min-[1200px]:block">
              <DiscoverDesktop />
            </div>

            <div className={`min-[1200px]:hidden ${isAuthenticated && "pl-4"} flex-1 flex justify-center`}>
              <Discover opened={opened} />
            </div>

            {isAuthenticated && (
              <UserActions user={user} setUser={setUser} opened={opened}/>
            )}
          </div>

        </div>

      </div>

    </div>
  )
}

export default Main