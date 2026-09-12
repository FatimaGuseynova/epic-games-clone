import React, { useEffect, useState } from 'react'

import { FiInfo, FiEdit2, FiX } from 'react-icons/fi'

import { getCurrentUser } from './../../../api/GetCurrentUser'

import { displayNameValidation } from './../../../validation/NameValidation'

function AccountInf() {

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: ''
    })

    const [editType, setEditType] = useState(null)

    const [newName, setNewName] = useState('')
    const [checked, setChecked] = useState(false)
    const [nameError, setNameError] = useState('')
    const [termsError, setTermsError] = useState('')

    useEffect(() => {
        const getUser = async () => {
            try {
                const currentUser = await getCurrentUser()

                const emailParts = currentUser.email.split('@')
                const emailName = emailParts[0]
                const emailDomain = emailParts[1]

                let hiddenEmail = currentUser.email

                if (emailName.length > 2) {
                    hiddenEmail =
                        emailName.slice(0, 1) +
                        '***' +
                        emailName.slice(-1) +
                        '@' +
                        emailDomain
                }

                const savedUsername = localStorage.getItem('username')

                setUser({
                    id: currentUser.id,
                    name: savedUsername || currentUser.username,
                    email: hiddenEmail
                })
            } catch (error) {
                console.error(error)
            }
        }

        getUser()
    }, [])

    const handleEdit = (type) => {
        setEditType(type)

        if (type === 'name') {
            setNewName(user.name)
            setChecked(false)
            setNameError('')
            setTermsError('')
        }
    }

    const handleCloseModal = () => {
        setEditType(null)
        setNewName('')
        setChecked(false)
        setNameError('')
        setTermsError('')
    }

    const handleNameChange = async (e) => {
        const value = e.target.value

        setNewName(value)

        try {
            await displayNameValidation.validateAt('nickname', {
                nickname: value
            })

            setNameError('')
        } catch (error) {
            setNameError(error.message)
        }
    }

    const handleCheckboxChange = async (e) => {
        const value = e.target.checked

        setChecked(value)

        try {
            await displayNameValidation.validateAt('terms', {
                terms: value
            })

            setTermsError('')
        } catch (error) {
            setTermsError(error.message)
        }
    }

    const handleContinue = async () => {
        try {
            await displayNameValidation.validate(
                {
                    nickname: newName,
                    terms: checked
                },
                {
                    abortEarly: false
                }
            )

            localStorage.setItem('username', newName)

            setUser(prev => ({
                ...prev,
                name: newName
            }))

            handleCloseModal()
        } catch (error) {
            const errors = {}

            error.inner?.forEach(item => {
                errors[item.path] = item.message
            })

            setNameError(errors.nickname || '')
            setTermsError(errors.terms || '')
        }
    }

    const isValidName =
        newName.length >= 3 &&
        newName.length <= 16 &&
        /^[A-Za-zА-Яа-яЁё0-9\_-]+$/.test(newName)

    const canContinue = isValidName && checked

    return (
        <div className="text-white py-4">
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
                            <div className="h-[45px] flex-1 flex items-center px-3 rounded-[9px] border border-[#55565c] bg-[#1c1d20]">
                                <input
                                    type="text"
                                    value={user.name}
                                    readOnly
                                    className="w-full bg-transparent outline-none text-[14px] text-white"
                                />

                                <FiInfo className="text-[19px] text-white shrink-0" />
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
                            <div className="h-[45px] flex-1 flex items-center px-3 rounded-[9px] border border-[#55565c] bg-[#1c1d20]">
                                <input
                                    type="text"
                                    value={user.email}
                                    readOnly
                                    className="w-full bg-transparent outline-none text-[14px] text-white"
                                />

                                <FiInfo className="text-[19px] text-white shrink-0" />
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

            {editType === 'name' && (
                <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center px-4">

                    <div className="w-full max-w-[560px] max-h-[calc(100vh-70px)] overflow-y-auto bg-[#202125] rounded-[14px] border border-[#35363b] px-[48px] py-[44px]">

                        <div className="flex items-start justify-between mb-[26px]">
                            <h2 className="text-[27px] leading-[34px] font-bold">
                                Update your display name
                            </h2>

                            <button
                                onClick={handleCloseModal}
                                className="text-[#b7b7c0] hover:text-white transition"
                            >
                                <FiX className="text-[25px]" />
                            </button>
                        </div>

                        <p className="text-[18px] leading-[26px] text-[#c3c3ca] mb-[24px]">
                            If you changed your Epic Games Display Name, you can’t change it again for 2 weeks after you confirm this change.
                        </p>

                        <div className="bg-[#292a2e] border border-[#393a3f] rounded-[12px] px-[22px] py-[20px] mb-[38px]">
                            <ul className="list-disc pl-[20px] text-[17px] leading-[25px]">
                                <li className="mb-[12px]">
                                    Never use information that identifies you such as your real name, address, social media handle or phone number
                                </li>

                                <li>
                                    Display names must be at least 3 characters long
                                </li>
                            </ul>
                        </div>

                        <p className="text-[18px] text-[#c3c3ca] mb-[26px]">
                            Current display name:{' '}
                            <span className="font-bold text-white">
                                {user.name}
                            </span>
                        </p>

                        <label className="block text-[14px] text-[#c3c3ca] mb-[8px]">
                            New display name
                        </label>

                        <input
                            type="text"
                            value={newName}
                            onChange={handleNameChange}
                            className={`w-full h-[58px] px-4 rounded-[10px] bg-[#292a2e] border ${
                                nameError
                                    ? 'border-[#ff3d57]'
                                    : 'border-[#5a5b61]'
                            } outline-none text-white text-[17px]`}
                        />

                        {nameError && (
                            <p className="text-[#ff3d57] text-[13px] mt-[7px]">
                                {nameError}
                            </p>
                        )}

                        <label className="flex items-start gap-[10px] mt-[26px] cursor-pointer">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                className="w-[24px] h-[24px] mt-[1px] accent-[#20b5f5] cursor-pointer"
                            />

                            <span className="text-[17px] leading-[23px] text-white">
                                I understand I can not change my display name again for 2 weeks after this change
                            </span>
                        </label>

                        {termsError && (
                            <p className="text-[#ff3d57] text-[13px] mt-[7px] ml-[34px]">
                                {termsError}
                            </p>
                        )}

                        <div className="flex gap-[18px] mt-[38px]">
                            <button
                                onClick={handleCloseModal}
                                className="flex-1 h-[48px] rounded-[10px] bg-[#48494e] hover:bg-[#55565c] transition text-white font-semibold"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleContinue}
                                disabled={!canContinue}
                                className={`flex-1 h-[48px] rounded-[10px] font-semibold transition ${
                                    canContinue
                                        ? 'bg-[#20b5f5] hover:bg-[#18a9e8] text-[#111216]'
                                        : 'bg-[#3f4045] text-[#85868d] cursor-not-allowed'
                                }`}
                            >
                                Continue
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountInf