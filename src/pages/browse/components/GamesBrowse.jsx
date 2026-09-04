import React, { useEffect, useMemo, useState } from 'react'
import { FaCrown } from "react-icons/fa";
import { ProductsGet } from "../../../api/ProductsGet";
import { Link, useSearchParams } from 'react-router';

function GamesBrowse({ sort = 1 }) {
    const [res, setRes] = useState({
        data: [],
        totalPages: 1,
        page: 1
    })

    const [currentPage, setCurrentPage] = useState(1)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const getProducts = async () => {
            const response = await ProductsGet(currentPage)
            setRes(response)
            console.log(response.data[0])
        }

        getProducts()
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [searchParams])

    const filters = useMemo(() => ({
        eventId: searchParams.getAll("eventId").map(Number),
        genreId: searchParams.getAll("genreId").map(Number),
        featureId: searchParams.getAll("featureId").map(Number),
        typeId: searchParams.getAll("typeId").map(Number),
        platformId: searchParams.getAll("platformId").map(Number),
        subscriptionId: searchParams.getAll("subscriptionId").map(Number)
    }), [searchParams])

    const matchesFilter = (items, selectedIds) => {
        if (selectedIds.length === 0) return true

        return items?.some(item =>
            selectedIds.includes(Number(item.id))
        )
    }

    const filteredGames = useMemo(() => {
        return res.data.filter(item => {
            return (
                matchesFilter(item.events, filters.eventId) &&
                matchesFilter(item.genres, filters.genreId) &&
                matchesFilter(item.features, filters.featureId) &&
                matchesFilter(item.types, filters.typeId) &&
                matchesFilter(item.platforms, filters.platformId) &&
                matchesFilter(item.subscriptions, filters.subscriptionId)
            )
        })
    }, [res.data, filters])

    const totalPages = res.totalPages

    const currentGames = useMemo(() => {
        const list = [...filteredGames]

        const getPrice = (item) =>
            item.discount > 0 ? item.discount : item.price

        switch (sort) {
            case 2:
                return list.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                )

            case 3:
                return list.sort(
                    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
                )

            case 4:
                return list.sort((a, b) =>
                    a.name.localeCompare(b.name)
                )

            case 5:
                return list.sort(
                    (a, b) => getPrice(b) - getPrice(a)
                )

            case 6:
                return list.sort(
                    (a, b) => getPrice(a) - getPrice(b)
                )

            default:
                return list
        }
    }, [filteredGames, sort])

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }

    const getPages = () => {
        if (totalPages <= 5) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            )
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5, "..."]
        }

        if (currentPage >= totalPages - 2) {
            return [
                "...",
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages
            ]
        }

        return [
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "..."
        ]
    }

    return (
        <div className='bg-[#121216] min-h-screen'>
            <div className='pt-10 flex items-start justify-center px-5'>
                <div className="max-[760px]:grid-cols-2 gap-4 min-[760px]:grid-cols-4 grid w-full max-w-[1400px]">
                    {currentGames.map((item, index) => (
                        <div key={item.id || index}>
                            <Link
                                to={item.ageRestriction === "18+" ? "/age" : "/detail"}
                                state={{ product: item }}
                            >
                                <div className="relative group w-fit">
                                    <img
                                        className="
                                            min-[760px]:w-[100%]
                                            transition
                                            duration-300
                                            group-hover:grayscale-[20%]
                                        "
                                        src={item.coverImage.url}
                                        alt="gameimage"
                                    />

                                    <div
                                        className="
                                            absolute
                                            h-[99%]
                                            min-[760px]:w-[100%]
                                            top-0
                                            left-0
                                            w-full
                                            bg-gray-300/10
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            duration-300
                                            pointer-events-none
                                        "
                                    />
                                </div>

                                <p className="text-[#9e9e9e] text-[15px] py-2 pb-1">
                                    {item.types?.[0]?.name === "Game"
                                        ? "Base Game"
                                        : item.types?.[0]?.name}
                                </p>

                                <h3 className="text-white pb-1 text-[17px] font-bold">
                                    {item.name}
                                </h3>

                                {item?.events?.[0]?.name && (
                                    <div
                                        className={`${item.events[0].name === "First Run"
                                            ? "w-fit mb-1.5 rounded-[4px] px-1 py-0.5 bg-[#343437] text-[14px] text-white"
                                            : ""
                                        }`}
                                    >
                                        {item.events[0].name === "First Run" && (
                                            <div className='flex items-center gap-1'>
                                                <FaCrown className='text-[#FFD15C]' />
                                                <span>First Run</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <h5
                                    className={`${item?.discount > 0 ? "flex" : "hidden"} items-center gap-2`}
                                >
                                    <div className='bg-[#26BAFE] px-1 py-0.5 text-black text-[14px] rounded-2xl'>
                                        {item?.discount > 0 &&
                                            `-${Math.round(100 - ((item.discount / item.price) * 100))}%`}
                                    </div>

                                    <div className='text-[15px] line-through text-[#ACA294]'>
                                        ${item.price}
                                    </div>

                                    <div className='text-white text-[15px]'>
                                        ${item.discount}
                                    </div>
                                </h5>

                                <h5
                                    className={`text-white text-[15px] ${item?.discount ? "hidden" : ""}`}
                                >
                                    {item.price === 0 ? "Free" : "$" + item.price}
                                </h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center py-10 mt-10 border-t border-[#29292d]">
                    <div className="flex items-center gap-5 text-[12px]">
                        {getPages().map((page, index) => (
                            page === "..." ? (
                                <span
                                    key={`dots-${index}`}
                                    className="text-[#9e9e9e]"
                                >
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={`
                                        transition
                                        ${currentPage === page
                                            ? "text-white"
                                            : "text-[#9e9e9e] hover:text-white"
                                        }
                                    `}
                                >
                                    {page}
                                </button>
                            )
                        ))}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="
                                flex
                                items-center
                                justify-center
                                w-5
                                h-5
                                rounded-full
                                bg-[#343437]
                                text-[#9e9e9e]
                                hover:text-white
                                disabled:opacity-30
                                transition
                            "
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GamesBrowse