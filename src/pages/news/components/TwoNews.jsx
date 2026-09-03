import React, { useEffect, useState } from "react";
import { NewsGet } from "../../../api/NewsGet";
import { Link } from "react-router";

function getTimeAgo(date) {
    const now = new Date();
    const created = new Date(date);
    const diff = Math.floor((now - created) / 1000);

    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (days > 0) return `${days}D AGO`;
    if (hours > 0) return `${hours}H AGO`;

    const minutes = Math.floor(diff / 60);

    if (minutes > 0) return `${minutes}M AGO`;

    return "JUST NOW";
}

function TwoNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await NewsGet();
                setNews(res.data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#101014] flex items-center justify-center">
                <p className="text-white">Loading...</p>
            </div>
        );
    }

    return (
        <section className="bg-[#101014] text-white py-10">
            <div className="max-w-[1095px] mx-auto px-6 lg:px-10">

                <h2 className="text-[20px] md:text-[22px] font-bold mb-4">
                    Epic Games News
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">

                    {news.slice(0,2).map((item, index) => (
                        <article
                            key={item.id}
                            className="group border-b border-[#39393e] pb-8 md:border-0 md:pb-0"
                        >
                            <div className="flex flex-col md:block">

                                <div className="w-full aspect-[16/9] overflow-hidden rounded-[4px]">
                                    <img
                                        src={item.media?.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex items-center gap-3 mt-5 mb-5">
                                    <span className="text-[#a7a7ad] text-[11px] tracking-[1.5px]">
                                        {getTimeAgo(item.createdAt)}
                                    </span>
                                </div>

                                <h3 className="text-[17px] md:text-[18px] font-bold leading-[1.25] max-w-[600px]">
                                    {item.title}
                                </h3>

                                <p className="hidden md:block text-[#a5a5aa] text-[15px] leading-[1.5] mt-7 max-w-[560px] line-clamp-1">
                                    {item.description.slice(0, 130)}...
                                </p>

                                <Link to="/newsdetail" className="text-[16px] mt-6 border-b border-[#77777d] pb-[2px] hover:border-white w-fit transition-colors">
                                    Read more
                                </Link>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default TwoNews;