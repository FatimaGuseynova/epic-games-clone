import React, { useEffect, useState } from "react";

import { Link } from "react-router";

import { IoIosArrowForward } from "react-icons/io";

import { ProductsGet } from "../../../api/ProductsGet";

import ComingSoon from "./ComingSoon";
import UpcomingWishlisted from "./UpcomingWishlisted";

function UpcomingGames() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let page = 1;
                let allProducts = [];

                while (true) {
                    const res = await ProductsGet(page);

                    if (!res?.data || res.data.length === 0) {
                        break;
                    }

                    allProducts = [...allProducts, ...res.data];
                    page++;
                }

                setProducts(allProducts);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    const upcomingWishlisted = products
        .filter(item => item.releaseDate && new Date(item.releaseDate) > new Date())
        .sort((a, b) => (b.wishlistCount || 0) - (a.wishlistCount || 0))
        .slice(0, 5);

    const newReleases = [...products]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    const formatDate = (date) => {
        if (!date) return "Coming Soon";

        return new Date(date).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit"
        });
    };

    const GameItem = ({ item, coming = false, discount = false }) => {
        const oldPrice = Number(item.price);
        const newPrice = Number(item.discount);

        return (
            <Link
    to="/detail"
    state={{ product: item }}
    className="flex items-center gap-4 min-w-0 p-3 rounded-[8px] hover:bg-[#202024] duration-200"
>
                <img
                    src={item.coverImage?.url}
                    alt={item.name}
                    className="w-[60px] h-[90px] rounded-[5px] object-cover shrink-0"
                />

                <div className="min-w-0">
                    <p className="text-white font-bold truncate">
                        {item.name}
                    </p>

                    {coming ? (
                        <p className="text-[#a0a0a0] text-[15px] mt-2">
                            Available {formatDate(item.releaseDate)}
                        </p>
                    ) : discount && item.discount > 0 ? (
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <span className="bg-[#26b9ed] text-black text-[12px] px-1 py-0.5 rounded-full">
                                -{Math.round(100 - (item.discount / item.price) * 100)}%
                            </span>

                            <span className="text-[#888] line-through text-[14px]">
                                ${oldPrice.toFixed(2)}
                            </span>

                            <span className="text-white text-[14px]">
                                ${newPrice.toFixed(2)}
                            </span>
                        </div>
                    ) : (
                        <p className="text-white text-[14px] mt-2">
                            {item.price === 0 ? "Free" : `$${item.price}`}
                        </p>
                    )}
                </div>
            </Link>
        );
    };

    return (
        <div className="bg-[#121216] py-8">
            <div className="min-[1100px]:w-[90%] w-[93%] mx-auto">
                <div className="grid grid-cols-1 min-[900px]:grid-cols-3">

                    <ComingSoon />

                    <UpcomingWishlisted />

                    <div className="px-5">
                        <Link className="flex items-center gap-2 text-white text-[21px] font-bold mb-7 group">
                            Top New Releases
                            <IoIosArrowForward className="duration-200 group-hover:translate-x-1" />
                        </Link>

                        <div className="flex flex-col gap-6">
                            {newReleases.map(item => (
                                <GameItem
                                    key={item.id}
                                    item={item}
                                    discount
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UpcomingGames;