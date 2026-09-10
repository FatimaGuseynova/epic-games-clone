import React from 'react'
import Settings from './components/Settings'
import AccountInf from './components/AccountInf'
import PersonalDetails from './components/PersonalDetails'
import Downloads from './components/Downloads'

function UserMain() {
    return (
        <div className='bg-[#121216] h-full '>
            <div className='min-[1100px]:w-[80%] max-[700px]:w-[95%] w-[90%] mx-auto'>
                <div className='min-[1000px]:flex gap-4'>
                    <Settings />
                    <div className='max-[1000px]:pt-10'>
                        <AccountInf />
                    </div>
                </div>
                <PersonalDetails />
                <Downloads />
            </div>
        </div>

    )
}

export default UserMain