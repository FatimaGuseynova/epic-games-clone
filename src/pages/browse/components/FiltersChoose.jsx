import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FeatureGet } from "../../../api/FeaturesGet";
import { EventsGet } from "../../../api/EventsGet";
import { GenresGet } from "../../../api/GenreGet";
import { TypesGet } from "../../../api/TypeGet";
import { PlatformGet } from "../../../api/PlatformsGet";
import { SubscriptionsGet } from "../../../api/SubscriptionGet";
import { Link } from 'react-router';

function FiltersChoose() {
    const [open, setOpen] = useState(false)
    const [all, setAll] = useState({
        events: [],
        genre: [],
        features: [],
        types: [],
        platform: [],
        subscriptions: []
    })
    useEffect(() => {
        const getFeature = async () => {
            const [events, genre, features, types, platform, subscriptions] =
                await Promise.all([
                    EventsGet(),
                    GenresGet(),
                    FeatureGet(),
                    TypesGet(),
                    PlatformGet(),
                    SubscriptionsGet()
                ]);
            setAll({
                events,
                genre,
                features,
                types,
                platform,
                subscriptions
            })
        }
        getFeature()
    }, [])

    const filters = [
        { id: 1, name: "Events", array: all.events },
        { id: 2, name: "Genre", array: all.genre },
        { id: 3, name: "Features", array: all.features },
        { id: 4, name: "Types", array: all.types },
        { id: 5, name: "Platform", array: all.platform },
        { id: 6, name: "Subscriptions", array: all.subscriptions }
    ];

    return (
        <div className='bg-[#18181C] h-screen'>
            <div className=' w-[90%] mx-auto'>

                <div>
                    <h2 className='font-semibold py-5'>Filters</h2>
                </div>
                <div className='w-full hover:bg-[#29292d] bg-[#303034] flex items-center  gap-4 py-2 px-4'>
                    <GrSearch className='text-[#d6d6d6]' size={14} />

                    <input className='outline-none' type="text" placeholder='Keywords' name="" id="" />
                </div>
            </div>
            <div className='py-4'>
                <ul className="flex  flex-col">
                    {filters.map((filter) => (
                        <div key={filter.id}>


                            <li

                                onClick={() => {
                                    setOpen(open === filter.id ? false : filter.id);
                                }}
                                className="border-t-1 border-[#3A3A3E] px-6 text-[14px] flex items-center justify-between w-full p-5 duration-150 hover:bg-[#54545b]"
                            >
                                {filter.name}

                                {open === filter.id ? (
                                    <IoIosArrowUp className="ml-1 text-[16px]" />
                                ) : (
                                    <IoIosArrowDown className="ml-1 text-[16px]" />
                                )}

                            </li>
                            <div >

                            </div>
                            <div className={`${open === filter.id ? "block" : "hidden"}`}>
                                {filter.array.map((item) => (<div key={item.id} className="py-2 text-sm text-[#A7A7A9]" > {item.name} </div>))}
                            </div>
                        </div>

                    ))}
                </ul>

                <div className='h-px w-full  bg-[#3A3A3E]'> </div>
            </div>
            <div className=' w-[90%] mx-auto'>
                 <div className='flex items-center justify-between pt-3 '>
                    <Link className='hover:bg-[#4b4b589b] w-[20%] text-[14px] my-6 rounded-[8px] bg-transparent block text-center py-2 text-white border-1 border-[#68686A] '>Clear</Link>
                    <Link className='w-[20%] my-6 rounded-[8px] text-[14px] hover:bg-[#60cdff] bg-[#26BBFF] block text-center py-2 text-black'>Apply</Link>
                 </div>
            </div>
        </div>

    )
}

export default FiltersChoose