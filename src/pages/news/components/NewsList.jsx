import React, { useEffect, useState } from "react";
import { NewsGet } from "../../../api/NewsGet";
import { Link } from "react-router";

function getTimeAgo(date) {
    const now = new Date();
    const created = new Date(date);
    const diff = Math.floor((now - created) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (days > 0) {
        return `${days}D AGO`;
    }

    if (hours > 0) {
        return `${hours}H AGO`;
    }

    if (minutes > 0) {
        return `${minutes}M AGO`;
    }

    return "JUST NOW";
}

function NewsList() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);

            try {
                const res = await NewsGet(currentPage);

                setNews(res.data || []);
                setTotalPages(res.totalPages || 1);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, [currentPage]);

    const getPages = () => {
        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        if (currentPage <= 5) {
            return [1, 2, 3, 4, 5, "...", totalPages];
        }

        if (currentPage >= totalPages - 4) {
            return [
                1,
                "...",
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages
            ];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages
        ];
    };

    const handlePageChange = (page) => {
        if (page === "..." || page === currentPage) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#101014] flex items-center justify-center">
                <p className="text-white">Loading...</p>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-[#101014] text-white">

            <div className="w-full max-w-[1025px] mx-auto px-6 md:px-10 lg:px-0">

                {news.slice(2, news.length).map((item) => (
                    <div
                        key={item.id}
                        className="border-t border-[#3a3a3f] py-6 md:py-7"
                    >

                        <div className="flex flex-col sm:flex-row gap-6">

                            <div className="w-full sm:w-[250px] flex-shrink-0 overflow-hidden rounded-[5px]">

                                <img
                                    src={item.media?.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="flex flex-col flex-1 min-w-0">

                                <div className="flex items-center gap-3 mb-8">

                                    <span className="text-[#aaaab0] text-[11px] font-medium tracking-[1.5px]">
                                        {getTimeAgo(item.createdAt)}
                                    </span>

                                </div>

                                <h2 className="md:text-[20px] lg:text-[19px] font-bold leading-[1.3] max-w-[1050px]">
                                    {item.title}
                                </h2>

                                <Link to="/newsdetail" state={{news: item}} className="text-left text-white text-[14px] mt-7 w-fit border-b border-[#77777d] leading-[1.1] pb-[2px] hover:border-white transition-colors">
                                    Read more
                                </Link>

                            </div>

                        </div>

                    </div>
                ))}

                {news.length === 0 && (
                    <div className="border-t border-[#3a3a3f] py-10 text-gray-400">
                        No news found
                    </div>
                )}

                {totalPages > 1 && (
                    <div className="flex items-center gap-1 py-8">

                        {getPages().map((page, index) => (
                            <button
                                key={`${page}-${index}`}
                                onClick={() => handlePageChange(page)}
                                disabled={page === "..."}
                                className={`min-w-[32px] h-[32px] px-2 flex items-center justify-center rounded-full text-[14px] transition-colors ${
                                    currentPage === page
                                        ? "text-[#26b9ff]"
                                        : page === "..."
                                        ? "text-[#aaaab0] cursor-default"
                                        : "text-white hover:bg-[#2a2a2f]"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {currentPage < totalPages && (
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="w-[32px] h-[32px] ml-1 rounded-full bg-[#303035] flex items-center justify-center text-white hover:bg-[#3a3a40] transition-colors"
                            >
                                ›
                            </button>
                        )}

                    </div>
                )}

            </div>

        </div>
    );
}

export default NewsList;