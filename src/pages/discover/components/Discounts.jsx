import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ProductsGet } from "../../../api/ProductsGet";
import "swiper/css";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

function Discounts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await ProductsGet();
            setProducts((res.data || []).filter(item => item.discount > 0));
        };
        getProducts();
    }, []);
    return (
        <div className='bg-[#121216]'>
            <div className="min-[1100px]:w-[77%] w-[93%] mx-auto">
                <div className="bg-[#101014] py-8">
                    <div >
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-4">
                                <Link className='font-semibold text-[23px] flex items-center group gap-2'>Featured Discounts <div className='duration-300 group-hover:translate-x-2'> <IoIosArrowForward /></div></Link>
                            </div>

                            <div className="flex gap-2">
                                <button className="featured-prev w-10 h-10 rounded-full bg-[#29292e] text-white flex items-center justify-center hover:bg-[#3a3a40] transition">
                                    <IoChevronBack size={19} />
                                </button>
                                <button className="featured-next w-10 h-10 rounded-full bg-[#29292e] text-white flex items-center justify-center hover:bg-[#3a3a40] transition">
                                    <IoChevronForward size={19} />
                                </button>
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".featured-prev",
                                nextEl: ".featured-next"
                            }}
                            spaceBetween={24}
                            slidesPerView={4}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 12
                                },
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 18
                                },
                                1100: {
                                    slidesPerView: 4,
                                    spaceBetween: 24
                                }
                            }}
                        >
                            {products.map(item => {
                                const oldPrice = Number(item.price);
                                const newPrice = Number(item.discount);

                                return (
                                    <SwiperSlide key={item.id}>
                                        <Link to="/detail" state={{ product: item }} className="group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                                            <div className="w-full max-h-[550px] overflow-hidden rounded-[9px]">
                                                <img
                                                    src={item.coverImage?.url}
                                                    alt={item.name}
                                                    className="w-full max-h-[400px] object-cover transition duration-300 group-hover:scale-105"
                                                />
                                            </div>

                                            <p className="text-[#a0a0a0] text-[15px] mt-3">
                                                {item.types[0].name}
                                            </p>

                                            <h3 className="text-white text-[19px] font-bold mt-1 leading-6 min-h-[48px]">
                                                {item.name}
                                            </h3>

                                            <div className="flex items-center gap-2 mt-3">
                                                <span className="bg-[#26b9ed] text-black text-[14px] font-medium px-3 py-1 rounded-full">
                                                    -{Math.round(100 - ((item.discount / item.price) * 100))}%
                                                </span>

                                                <span className="text-[#88888d] text-[16px] line-through">
                                                    ${oldPrice.toFixed(2)}
                                                </span>

                                                <span className="text-white text-[17px]">
                                                    ${newPrice.toFixed(2)}
                                                </span>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discounts