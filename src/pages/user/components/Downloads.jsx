import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Downloads() {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleDeleteAccount = async () => {
        try {
            setLoading(true)
            setError("")

            const token = localStorage.getItem("accessToken")
            const email = localStorage.getItem("email")

            if (!token || !email) {
                throw new Error("User information not found")
            }

            const usersResponse = await fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json"
                }
            })

            const users = await usersResponse.json()

            if (!usersResponse.ok) {
                throw new Error(users?.message || "Failed to get user")
            }

            const currentUser = users.find(user => user.email === email)

            if (!currentUser) {
                throw new Error("Current user not found")
            }

            const deleteResponse = await fetch(
                `http://localhost:3000/api/users/${currentUser.id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json"
                    }
                }
            )

            const deleteData = await deleteResponse.json().catch(() => null)

            if (!deleteResponse.ok) {
                throw new Error(
                    deleteData?.message || "Failed to delete account"
                )
            }

            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("email")

            navigate("/")
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div className="w-full text-white pt-20">
            <section className="pb-13 border-b border-[#29292d]">
                <h2 className="text-[20px] leading-[36px] font-bold mb-[20px]">
                    Download account data
                </h2>

                <p className="leading-[28px] text-[#b7b7c0] max-w-[900px]">
                    Download a copy of available data you've shared with us. We'll email you once it's ready, and you'll have 15 days to download it.
                </p>

                <button
                    className="mt-[20px] bg-[#353539] hover:bg-[#414145] transition-colors rounded-[12px] px-4 py-3 font-semibold"
                >
                    Request download
                </button>
            </section>

            <section className="pt-[30px]">
                <h2 className="text-[20px] leading-[36px] font-bold mb-[20px]">
                    Delete account
                </h2>

                <p className="leading-[28px] text-[#b7b7c0] max-w-[900px]">
                    Delete your Epic Games account including all personal information, purchases, game progress, in-game content, your Epic account balance and Unreal projects. Your account will be permanently deleted in 30 days.
                </p>

                <button
                    onClick={() => {
                        setError("")
                        setShowModal(true)
                    }}
                    className="mt-[20px] bg-[#ff3d57] hover:bg-[#ff5269] transition-colors rounded-[12px] px-4 py-3 font-semibold text-black"
                >
                    Delete account
                </button>
            </section>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="w-full max-w-[500px] bg-[#18181b] rounded-[12px] p-6 shadow-2xl">
                        <h2 className="text-[22px] font-bold mb-4">
                            Delete your account?
                        </h2>

                        <p className="text-[#b7b7c0] leading-[26px] mb-6">
<p className='py-3'>Your personal information, purchases, game progress, in-game content, Epic account balance, and any Unreal projects will be permanently deleted.
</p>
<p className='pb-3'>You have 14 days to cancel this request by signing into your account.</p>

If you need help, contact <span className='text-[#26BBFF] underline'>Player Support.</span>                        </p>

                        {error && (
                            <p className="text-[#ff3d57] text-sm mb-4">
                                {error}
                            </p>
                        )}

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                disabled={loading}
                                className="bg-[#353539] hover:bg-[#414145] transition-colors rounded-[10px] px-5 py-3 font-semibold"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDeleteAccount}
                                disabled={loading}
                                className="bg-[#ff3d57] hover:bg-[#ff5269] transition-colors rounded-[10px] px-5 py-3 font-semibold text-black disabled:opacity-50"
                            >
                                {loading ? "Deleting..." : "Confirm"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Downloads