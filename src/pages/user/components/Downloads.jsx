import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { getCurrentUser } from '../../../api/GetCurrentUser'
import { DeleteUser } from '../../../api/DeleteUser'

function Downloads() {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [confirmed, setConfirmed] = useState(false)

    const handleOpenModal = () => {
        setError("")
        setConfirmed(false)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        if (loading) return

        setShowModal(false)
        setConfirmed(false)
        setError("")
    }

    const handleDeleteAccount = async () => {
        if (!confirmed) {
            return
        }

        try {
            setLoading(true)
            setError("")

            const currentUser = await getCurrentUser()

            if (!currentUser?.id) {
                throw new Error("Current user not found")
            }

            await DeleteUser(currentUser.id)

            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("email")
            localStorage.removeItem("username")

            navigate("/")
        } catch (error) {
            console.error(error)
            setError(error.message || "Failed to delete account")
            setLoading(false)
        }
    }

    return (
        <div className="w-full mb-[100px] text-white pt-20">

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
                    onClick={handleOpenModal}
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
                            Your account will be permanently deleted in 30 days.

                            <span className="block py-3">
                                Your personal information, purchases, game progress, in-game content, Epic account balance, and any Unreal projects will be permanently deleted.
                            </span>

                            <span className="block pb-3">
                                You have 14 days to cancel this request by signing into your account.
                            </span>

                            If you need help, contact{" "}
                            <span className="text-[#26BBFF] underline">
                                Player Support.
                            </span>
                        </p>

                        <label className="flex items-start gap-3 cursor-pointer mb-5">
                            <input
                                type="checkbox"
                                checked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
                                disabled={loading}
                                className="mt-1 w-4 h-4 accent-[#26BBFF] cursor-pointer"
                            />

                            <span className="text-[#b7b7c0] text-sm leading-[22px]">
                                I understand that my account and all associated data will be permanently deleted.
                            </span>
                        </label>

                        {error && (
                            <p className="text-[#ff3d57] text-sm mb-4">
                                {error}
                            </p>
                        )}

                        <div className="flex justify-end gap-3">

                            <button
                                onClick={handleCloseModal}
                                disabled={loading}
                                className="bg-[#353539] hover:bg-[#414145] transition-colors rounded-[10px] px-5 py-3 font-semibold disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDeleteAccount}
                                disabled={loading || !confirmed}
                                className={` transition-colors rounded-[10px] px-5 py-3 font-semibold text-black ${
                                    confirmed && !loading
                                        ? "bg-[#ff3d57] hover:bg-[#ff5269]"
                                        : "bg-[#4a4a4f] text-[#888] cursor-not-allowed"
                                }`}
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