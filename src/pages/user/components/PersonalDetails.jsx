import React, { useEffect, useState } from 'react'

import { FiInfo, FiEdit2 } from 'react-icons/fi'

import { UpdateProfile } from "../../../api/UpdateProfile";

import { UsersGet } from '../../../api/UsersGet'

function PersonalDetails() {

    const [userId, setUserId] = useState('')

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        region: '',
        postalCode: '',
        country: ''
    })

    const [originalForm, setOriginalForm] = useState({
        firstname: '',
        lastname: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        region: '',
        postalCode: '',
        country: ''
    })

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [countryEdit, setCountryEdit] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await UsersGet()
                const email = localStorage.getItem('email')
                const currentUser = data.find(
                    item => item.email === email
                )

                if (currentUser) {
                    const userData = {
                        firstname: currentUser.firstname.slice(0, 1) + "***" + currentUser.firstname.slice(currentUser.firstname.length - 1) || '',
                        lastname: currentUser.lastname.slice(0, 1) + "***" + currentUser.lastname.slice(currentUser.lastname.length - 1) || '',
                        addressLine1: currentUser.addressLine1 || '',
                        addressLine2: currentUser.addressLine2 || '',
                        city: currentUser.city || '',
                        region: currentUser.region || '',
                        postalCode: currentUser.postalCode || '',
                        country: currentUser.country || ''
                    }

                    setUserId(currentUser.id)
                    setForm(userData)
                    setOriginalForm(userData)
                }
            } catch (error) {
                console.error('Error getting user:', error)
            } finally {
                setLoading(false)
            }
        }

        getUser()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const hasChanges = JSON.stringify(form) !== JSON.stringify(originalForm)

    const handleSave = async () => {
        try {
            setSaving(true)

            console.log('Sending data to backend...')
            console.log('User ID:', userId)
            console.log('Data:', form)

            const response = await UpdateProfile({
                firstname: form.firstname,
                lastname: form.lastname,
                addressLine1: form.addressLine1,
                addressLine2: form.addressLine2,
                city: form.city,
                region: form.region,
                postalCode: form.postalCode,
                country: form.country
            })

            console.log('Data successfully sent to backend')
            console.log('Backend response:', response)

            setOriginalForm(form)
        } catch (error) {
            console.error('Failed to send data to backend')
            console.error('Error:', error)
            console.error('Backend response:', error.response?.data)
            console.error('Status:', error.response?.status)
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className=" text-white">
            <div>
                <h1 className="text-[25px] font-bold mb-4">
                    Personal details
                </h1>

                <p className="text-[#b9bac4] text-[15px] leading-[1.4] mb-[28px]">
                    Manage your name and contact info. These personal details are private and will not be displayed to other users. View our <span className="text-[#20b5f5] underline cursor-pointer">Privacy Policy.</span>
                </p>

                <div className="grid grid-cols-2 gap-[25px] mb-[40px]">
                    <div>
                        <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                            First Name
                        </p>

                        <input
                            type="text"
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-[16px] text-white outline-none focus:border-[#20b5f5]"
                        />
                    </div>

                    <div>
                        <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                            Last Name
                        </p>

                        <input
                            type="text"
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                            className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-[16px] text-white outline-none focus:border-[#20b5f5]"
                        />
                    </div>
                </div>

                <h2 className="text-[21px] font-semibold mb-[25px]">
                    Address
                </h2>

                <div className="grid grid-cols-2 gap-[25px]">
                    <div>
                        <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                            Address Line 1
                        </p>

                        <input
                            type="text"
                            name="addressLine1"
                            value={form.addressLine1}
                            onChange={handleChange}
                            className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                        />
                    </div>

                    <div>
                        <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                            Address Line 2
                        </p>

                        <input
                            type="text"
                            name="addressLine2"
                            value={form.addressLine2}
                            onChange={handleChange}
                            className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                        />
                    </div>

                    <div>
                        <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                            City
                        </p>

                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-[25px]">
                        <div>
                            <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                                Region
                            </p>

                            <input
                                type="text"
                                name="region"
                                value={form.region}
                                onChange={handleChange}
                                className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                            />
                        </div>

                        <div>
                            <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                                Postal Code
                            </p>

                            <input
                                type="text"
                                name="postalCode"
                                value={form.postalCode}
                                onChange={handleChange}
                                className="w-full h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-[18px]">
                    <p className="text-[15px] text-[#b9bac4] mb-[7px]">
                        Country / Region
                    </p>

                    <div className="flex gap-[10px]">
                        {countryEdit ? (
                            <input
                                type="text"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                autoFocus
                                className="w-[380px] h-[61px] px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20] text-white outline-none focus:border-[#20b5f5]"
                            />
                        ) : (
                            <div className="w-[380px] h-[61px] flex items-center justify-between px-4 rounded-[10px] border border-[#5a5b60] bg-[#1c1d20]">
                                <span className="text-[16px] text-white">
                                    {form.country}
                                </span>

                                <FiInfo className="text-[22px] text-white" />
                            </div>
                        )}

                        <button
                            onClick={() => setCountryEdit(!countryEdit)}
                            className="w-[61px] h-[61px] flex items-center justify-center rounded-[10px] bg-[#20b5f5] hover:bg-[#18a9e8] transition"
                        >
                            <FiEdit2 className="text-[22px] text-[#111216]" />
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={!hasChanges || saving}
                    className={`mt-[40px] h-[61px] px-[26px] rounded-[10px] text-[16px] font-semibold transition ${hasChanges
                        ? 'bg-[#20b5f5] text-[#111216] hover:bg-[#18a9e8]'
                        : 'bg-[#292a2e] text-[#66676d]'
                        }`}
                >
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    )
}

export default PersonalDetails