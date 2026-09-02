import React, { useEffect, useState } from 'react'
import { FaCrown } from "react-icons/fa";
import { ProductsGet } from "../../../api/ProductsGet";
import { Link } from 'react-router';

function GamesBrowse() {

    const [res, setRes] = useState({ data: [] })

    useEffect(() => {

        const getProducts = async () => {
            const response = await ProductsGet()
            setRes(response)
            console.log(response)
        }

        getProducts()

    }, [])

    return (
        <div className='bg-[#121216] h-full'>
            <div className='pt-10 flex items-start justify-start'>

                <div className="max-[760px]:grid-cols-2 gap-4 min-[760px]:grid-cols-4 grid">

                    {res.data.map((item, index) => (

                        <div key={index}>
                            <Link to={item.ageRestriction === "18+" ? "/age" : "/detail"}state={{product: item}}>
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
                                    {item.types[0].name === "Game" ? "Base Game" : item.types[0].name}
                                </p>

                                <h3 className="text-white pb-1 text-[17px] font-bold">
                                    {item.name}
                                </h3>
                                {item?.events[0]?.name && <div className={`${item.events[0].name === "First Run" && "w-fit mb-1.5 rounded-[4px] px-1 py-0.5 bg-[#343437] text-[14px] text-white"}`}>{item.events[0].name === "First Run" && (<div className='flex items-center gap-1'><FaCrown className='text-[#FFD15C]' /> <span>First Run</span></div>)}</div>}

                                <h5 className={`${item?.discount > 0 ? "flex" : "hidden"} items-center gap-2`}>
                                    <div className='bg-[#26BAFE] px-1  py-0.5 text-black text-[14px] rounded-2xl'>
                                        {item?.discount > 0 && `-${Math.round(100 - ((item.discount / item.price) * 100))}%`}
                                    </div>
                                    <div className='text-[15px] line-through text-[#ACA294]'>
                                        ${item.price}*
                                    </div>
                                    <div className='text-white text-[15px]'>
                                        ${item.discount}
                                    </div>
                                </h5>
                                <h5 className={`text-white text-[15px] ${item?.discount && "hidden"}`}>
                                    {item.price === 0 ? "Free" : "$" + item.price}

                                </h5>
                            </Link>
                        </div>

                    ))}

                </div>

            </div>
        </div >
    )
}

export default GamesBrowse