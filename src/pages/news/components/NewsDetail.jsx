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

        <div className="relative min-h-screen overflow-hidden text-white bg-[#101014]">

            <div className="absolute top-0 left-0 right-0 h-[650px] overflow-hidden">

                <div
                    className="absolute inset-0 scale-125 bg-cover bg-center blur-[70px]"
                    style={{
                        backgroundImage: `url("${image}")`
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101014]/40 to-[#101014]" />

            </div>

            <div className="relative z-10 w-full max-w-[1005px] mx-auto pt-8 md:pt-5 pb-20">

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                    <div className="w-full lg:w-[360px] bg-[#1b1b20]/95 border border-white/15 rounded-[20px] p-8 md:p-10 flex flex-col">

                        <div className="flex-1">

                            <span className="inline-flex items-center px-3 h-[24px] rounded-full bg-[#4b4b50] text-[#d875ff] text-[10px] font-semibold tracking-[1.5px]">

                                ARTICLE

                            </span>

                            <h1 className="text-[21px] md:text-[23px] font-bold leading-[1.2] mt-9">

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

                        <div className="w-full h-full rounded-[20px] overflow-hidden">

                            <img
                                src={image}
                                alt={news.title}
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>

                </div>

                <div className="mt-14 w-full max-w-[1005px]">

                    <p className="text-[#d4d4d4] md:text-[18px] leading-[1.8] whitespace-pre-line">

                        {news.description}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default NewsDetail;