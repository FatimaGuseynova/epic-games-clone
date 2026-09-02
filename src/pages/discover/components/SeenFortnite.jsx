import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ProductsGet } from "../../../api/ProductsGet";
import "swiper/css";

function SeenFortnite() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await ProductsGet();
            setProducts(res.data || []);
        };
        getProducts();
    }, []);

    const slides = [];
    for (let i = 0; i < products.length; i += 6) {
        slides.push(products.slice(i, i + 6));
    }
    return (
        <div className="bg-[#121216] py-23">
            <div className="min-[1100px]:w-[77%] w-[93%] mx-auto">
                <div className="flex items-center max-[770px]:flex-col justify-between gap-11">
                    <div
                        className=" w-90 max-[770px]:w-full max-[770px]:h-[400px] shrink-0 flex justify-center items-end h-[330px] bg-cover bg-center bg-no-repeat rounded-[12px]"
                        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/egs-fortniteoverrideexperiencepage-brandedlist-1200x1200-v1-r3-1200x1200-8180053db5d3.png?resize=1&w=360&h=480&quality=medium')" }}
                    >
                        <Link
                            to="/"
                            className="text-center bg-white h-fit text-black duration-150 px-5 w-[60%] py-3 rounded-[10px] text-[16px] font-medium hover:bg-gray-300 mb-7"
                        >
                            Discover More
                        </Link>
                    </div>

                    <div className="w-full overflow-hidden">
                        <div className="flex justify-end gap-2 mb-4">
                            <button className="discover-prev w-8 h-8 rounded-full bg-[#29292e] flex items-center justify-center text-white">
                                <IoChevronBack size={17} />
                            </button>
                            <button className="discover-next w-8 h-8 rounded-full bg-[#29292e] flex items-center justify-center text-white">
                                <IoChevronForward size={17} />
                            </button>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{ prevEl: ".discover-prev", nextEl: ".discover-next" }}
                            slidesPerView={1}
                            spaceBetween={30}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                                        {slide.map((item) => (
                                            <Link to="/detail" state={{ product: item }}
                                                key={item.id}
                                                className="flex items-center gap-3"
                                            >
                                                <img
                                                    src={item.coverImage.url}
                                                    alt={item.name}
                                                    className="w-16 rounded-[3px] object-cover shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <p className="text-white text-[13px] font-semibold truncate">{item.name}</p>
                                                    <p className="text-white text-[12px] font-semibold mt-1">{item.price === 0 ? "Free" : item.discount > 0 ? "$" + item.discount : "$" + item.price} </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeenFortnite