import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FeatureGet } from "../../../api/FeaturesGet";
import { EventsGet } from "../../../api/EventsGet";
import { GenresGet } from "../../../api/GenreGet";
import { TypesGet } from "../../../api/TypeGet";
import { PlatformGet } from "../../../api/PlatformsGet";
import { SubscriptionsGet } from "../../../api/SubscriptionGet";

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
        <div className='bg-[#18181C]'>
            <div className=' w-[94%] mx-auto'>

                <div>
                    <h2 className='font-semibold py-5'>Filters</h2>
                </div>
                <div className='w-full bg-[#303034] flex items-center  gap-4 py-2 px-4'>
                    <GrSearch size={14} />

                    <input className='outline-none' type="text" placeholder='Keywords' name="" id="" />
                </div>
                <div className='h-px w-full bg-[#3A3A3E]'> </div>

            </div>
            <ul className="flex  flex-col gap-5 py-2">
                {filters.map((filter) => (
                    <div key={filter.id}>
                        <li

                            onClick={() => {
                                setOpen(open === filter.id ? false : filter.id);
                            }}
                            className="px-6 text-[15px] flex items-center justify-between w-full p-3 duration-150 hover:bg-[#54545b]"
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
                        <div className='h-px w-full bg-[#3A3A3E]'> </div>
                        <div className={`${open === filter.id ? "block" : "hidden"}`}>
                            {filter.array.map((item) => (<div key={item.id} className="py-2 text-sm text-[#A7A7A9]" > {item.name} </div>))}
                        </div>
                    </div>

                ))}
            </ul>
        </div>

    )
}

export default FiltersChoose