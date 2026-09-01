
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function DetailSlider(product) {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [mainSwiper, setMainSwiper] = React.useState(null);
    const detailImages = [
        ...product.product.detailImage.filter(item => item.type === "VIDEO"),
        ...product.product.detailImage.filter(item => item.type !== "VIDEO")
    ]; return (<div className="mx-auto w-full">
        <div className="group relative">
            <Swiper modules={[Thumbs]} onSwiper={setMainSwiper} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, }} className="overflow-hidden rounded-xl"            >                {detailImages.map((item, index) => (<SwiperSlide key={index}>                        <div className="relative aspect-video overflow-hidden rounded-xl">                            {item.type === "VIDEO" ? (<video src={item.url} controls className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        w-[110%]
                                        h-[110%]
                                        object-cover
                                        scale-100
                                        "
            >                                </video>) : (<div>                                    <img src={item.url} alt="detail image" className="h-full w-full object-cover" />                                    <div className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    transition
                                    duration-300
                                    group-hover\:bg-black/20
                                "                                    />                                </div>)}                        </div>                    </SwiperSlide>))}            </Swiper>            <button onClick={() => mainSwiper?.slidePrev()} className="
            absolute
            left-4
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-white
            opacity-0
            transition-all
            duration-200
            group-hover\:opacity-100
            hover\:scale-110
            hover\:bg-black
          "            >                <IoChevronBack size={22} />            </button>            <button onClick={() => mainSwiper?.slideNext()} className="
            absolute
            right-4
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-white
            opacity-0
            transition-all
            duration-200
            group-hover\:opacity-100
            hover\:scale-110
            hover\:bg-black
          "            >                <IoChevronForward size={22} />            </button>        </div>        <div className="mt-4 flex items-center gap-3">            <button onClick={() => thumbsSwiper?.slidePrev()} className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#29292d]
            text-white
            transition
            hover\:bg-[#3a3a3f]
          "            >                <IoChevronBack size={18} />            </button>            <Swiper onSwiper={setThumbsSwiper} modules={[Thumbs]} spaceBetween={10} slidesPerView={4} watchSlidesProgress className="min-w-0 flex-1"            >                {detailImages.map((item, index) => (<SwiperSlide key={index}>                        <div className="
                  h-[65px]
                  cursor-pointer
                  overflow-hidden
                  rounded-md
                  opacity-50
                  transition
                  hover\:opacity-100
                  [&.swiper-slide-thumb-active]\:opacity-100
                  [&.swiper-slide-thumb-active]\:ring-2
                  [&.swiper-slide-thumb-active]\:ring-white
                "                        >                            {item.type === "VIDEO" ? (<video className="-1 h-full w-full object-cover" src={item.url}>                                </video>) : (<img src={item.url} alt="detail image" className="h-full w-full object-cover" />)}                        </div>                    </SwiperSlide>))}            </Swiper>            <button onClick={() => thumbsSwiper?.slideNext()} className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#29292d]
            text-white
            transition
            hover\:bg-[#3a3a3f]
          "            >                <IoChevronForward size={18} />            </button>        </div>    </div>);

}

export default DetailSlider;
