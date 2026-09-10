import React, { useEffect, useState } from 'react'

import { FiInfo, FiEdit2 } from 'react-icons/fi'

import { getUsers } from '../../../api/getUsers'

function AccountInf() {

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: ''
    })

    const [editType, setEditType] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await getUsers()

                const email = localStorage.getItem('email')

                const currentUser = data.find(
                    item => item.email === email
                )

                if (currentUser) {
                    setUser({
                        id: currentUser.id,
                        name: currentUser.username,
                        email: currentUser.email.slice(0,1) + "***" + currentUser.email.slice(currentUser.email.length - 11, currentUser.email.length)
                    })
                }
            } catch (error) {
                console.error(error)
            }
        }

        getUser()
    }, [])

    const handleEdit = (type) => {
        setEditType(type)
    }

    return (
        <div className=" text-white py-4">

            <div className="max-w-[695px]">

                <h1 className="text-[36px] font-bold mb-1">
                    Settings
                </h1>

                <p className="text-[#b9bac4] text-[15px] mb-[60px]">
                    Manage your account’s details.
                </p>

                <h2 className="text-[22px] font-semibold mb-1">
                    Account information
                </h2>

                <p className="text-[15px] text-white mb-[25px]">
                    ID: {user.id}
                </p>

                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">

                    <div>

                        <p className="text-[12px] text-[#aeb0ba] mb-[6px]">
                            Display name
                        </p>

                        <div className="flex gap-[8px]">

                            <div className="h-[45px] flex-1 flex items-center justify-between px-3 rounded-[9px] border border-[#55565c] bg-[#1c1d20]">

                                <span className="text-[14px] text-white">
                                    {user.name}
                                </span>

                                <FiInfo className="text-[19px] text-white" />

                            </div>

                            <button
                                onClick={() => handleEdit('name')}
                                className="w-[45px] h-[45px] flex items-center justify-center rounded-[9px] bg-[#20b5f5] hover:bg-[#18a9e8] transition"
                            >
                                <FiEdit2 className="text-[19px] text-[#111216]" />
                            </button>

                        </div>

                    </div>

                    <div>

                        <p className="text-[12px] text-[#aeb0ba] mb-[6px]">
                            Email address
                        </p>

                        <div className="flex gap-[8px]">

                            <div className="h-[45px] flex-1 flex items-center justify-between px-3 rounded-[9px] border border-[#55565c] bg-[#1c1d20]">

                                <span className="text-[14px] text-white">
                                    {user.email}
                                </span>

                                <FiInfo className="text-[19px] text-white" />

                            </div>

                            <button
                                onClick={() => handleEdit('email')}
                                className="w-[45px] h-[45px] flex items-center justify-center rounded-[9px] bg-[#20b5f5] hover:bg-[#18a9e8] transition"
                            >
                                <FiEdit2 className="text-[19px] text-[#111216]" />
                            </button>

                        </div>

                    </div>

                </div>

                <div className="border-t border-[#292a2e] mt-[59px]" />

            </div>

        </div>
    )
}

export default AccountInf