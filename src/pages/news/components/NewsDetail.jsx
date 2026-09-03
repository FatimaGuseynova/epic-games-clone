import React from "react";
import { useLocation } from "react-router";

function NewsDetail() {
    const location = useLocation();
    const news = location.state?.news;

    if (!news) {
        return (
            <div className="min-h-screen bg-[#101014] flex items-center justify-center text-white">
                News not found
            </div>
        );
    }

    const image = news.media?.url;

    return (
        <div className="relative min-h-screen overflow-hidden text-white">

            <div
                className="fixed inset-0 z-0 scale-125 bg-cover bg-center blur-[70px]"
                style={{
                    backgroundImage: `url("${image}")`
                }}
            />

            <div className="fixed inset-0 z-0 bg-black/65" />

            <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/20 via-[#101014]/60 to-[#101014]" />

            <div className="relative z-10 w-full max-w-[1425px] mx-auto px-6 md:px-10 lg:px-0 pt-12 md:pt-16 pb-20">

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="w-full lg:w-[470px] min-h-[520px] bg-[#1b1b20]/95 border border-white/15 rounded-[20px] p-8 md:p-10 flex flex-col">

                        <div className="flex-1">

                            <span className="inline-flex items-center px-5 h-[32px] rounded-full bg-[#4b4b50] text-[#d875ff] text-[12px] font-bold tracking-[1.5px]">
                                ARTICLE
                            </span>

                            <h1 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold leading-[1.2] mt-9">
                                {news.title}
                            </h1>

                        </div>

                        <div className="border-t border-white/15 pt-6 mt-10 flex items-center justify-between">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-[#37373c] flex items-center justify-center text-[17px] font-bold">
                                    {news.author?.[0] || "B"}
                                </div>

                                <span className="text-[15px] font-medium">
                                    {news.author || "Epic Games"}
                                </span>

                            </div>

                            <span className="text-[#aaaab0] text-[14px]">
                                {new Date(news.createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </span>

                        </div>

                    </div>

                    <div className="w-full lg:flex-1">

                        <div className="w-full aspect-[16/9] lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">

                            <img
                                src={image}
                                alt={news.title}
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>

                </div>

                <div className="mt-14 lg:mt-20 lg:ml-[500px] max-w-[900px]">

                    <p className="text-[#eeeeee] text-[17px] md:text-[19px] leading-[1.8] whitespace-pre-line">
                        {news.description}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default NewsDetail;