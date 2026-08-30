import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { LuListFilter } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FeatureGet } from "../../../api/FeaturesGet";
import { EventsGet } from "../../../api/EventsGet";
import { GenresGet } from "../../../api/GenreGet";
import { TypesGet } from "../../../api/TypeGet";
import { PlatformGet } from "../../../api/PlatformsGet";
import { SubscriptionsGet } from "../../../api/SubscriptionGet";
import { Link, useSearchParams } from 'react-router';

const FilterDrawer = ({ paramss }) => {
    const [searchParams] = useSearchParams();

    const [openFilter, setOpenFilter] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    const [select, setSelect] = useState({
        Events: searchParams.getAll("eventId").map(Number),
        Genre: searchParams.getAll("genreId").map(Number),
        Features: searchParams.getAll("featureId").map(Number),
        Types: searchParams.getAll("typeId").map(Number),
        Platform: searchParams.getAll("platformId").map(Number),
        Subscriptions: searchParams.getAll("subscriptionId").map(Number)
    });

    const [all, setAll] = useState({
        events: [],
        genre: [],
        features: [],
        types: [],
        platform: [],
        subscriptions: []
    });

    useEffect(() => {
        const getFeature = async () => {
            const [
                events,
                genre,
                features,
                types,
                platform,
                subscriptions
            ] = await Promise.all([
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
            });
        };

        getFeature();
    }, []);

    const filters = [
        { id: 1, name: "Events", array: all.events },
        { id: 2, name: "Genre", array: all.genre },
        { id: 3, name: "Features", array: all.features },
        { id: 4, name: "Types", array: all.types },
        { id: 5, name: "Platform", array: all.platform },
        { id: 6, name: "Subscriptions", array: all.subscriptions }
    ];

    const getFilterUrl = () => {
        const params = new URLSearchParams();
        select.Events.forEach(id => params.append("eventId", id));
        select.Genre.forEach(id => params.append("genreId", id));
        select.Features.forEach(id => params.append("featureId", id));
        select.Types.forEach(id => params.append("typeId", id));
        select.Platform.forEach(id => params.append("platformId", id));
        select.Subscriptions.forEach(id => params.append("subscriptionId", id));
        return `/browse?${params.toString()}`;
    };

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    return (
        <>
            <button
                onClick={showDrawer}
                className="
                    flex items-center gap-2
                    hover:bg-[#696971]
                    duration-150
                    bg-[#4f4f55]
                    rounded-[4px]
                    px-1.5
                    text-white
                    text-[15px]
                "
            >
                <span>
                    Filter {paramss > 0 && `(${paramss})`}
                </span>

                <LuListFilter size={16} />
            </button>

            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                open={openDrawer}
                width={350}
                styles={{
                    body: {
                        padding: 0,
                        background: "#18181C"
                    }
                }}
            >
                <div className="bg-[#18181C] min-h-full text-white">

                    <div className="w-[90%] mx-auto">
                        <h2 className="font-semibold py-5">
                            Filters
                        </h2>

                        <div
                            className="
                                w-full
                                hover:bg-[#29292d]
                                bg-[#303034]
                                flex items-center
                                gap-4
                                py-2 px-4
                            "
                        >
                            <GrSearch
                                className="text-[#d6d6d6]"
                                size={14}
                            />

                            <input
                                className="
                                    outline-none
                                    bg-transparent
                                    text-white
                                    w-full
                                "
                                type="text"
                                placeholder="Keywords"
                            />
                        </div>
                    </div>

                    <div className="py-4">
                        <ul className="flex flex-col">

                            {filters.map((filter) => (
                                <div key={filter.id}>

                                    <li
                                        onClick={() => {
                                            setOpenFilter(
                                                openFilter === filter.id
                                                    ? null
                                                    : filter.id
                                            );
                                        }}
                                        className="
                                            border-t
                                            border-[#3A3A3E]
                                            px-6
                                            text-[14px]
                                            flex items-center
                                            justify-between
                                            w-full
                                            p-5
                                            duration-150
                                            hover:bg-[#54545b]
                                            cursor-pointer
                                        "
                                    >
                                        {filter.name}

                                        <div className="flex items-center gap-2">

                                            <div
                                                className={`
                                                    ${select[filter.name].length > 0
                                                        ? "block"
                                                        : "hidden"
                                                    }
                                                    text-white
                                                    px-1.5
                                                    bg-[#3A3A3E]
                                                    rounded-full
                                                `}
                                            >
                                                {select[filter.name].length}
                                            </div>

                                            {openFilter === filter.id ? (
                                                <IoIosArrowUp
                                                    className="ml-1 text-[16px]"
                                                />
                                            ) : (
                                                <IoIosArrowDown
                                                    className="ml-1 text-[16px]"
                                                />
                                            )}

                                        </div>
                                    </li>

                                    <div className="w-[90%] mx-auto">
                                        <div
                                            className={
                                                openFilter === filter.id
                                                    ? "block"
                                                    : "hidden"
                                            }
                                        >
                                            {filter.array.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="
                                                        py-2
                                                        flex items-center
                                                        gap-2
                                                        text-sm
                                                        text-[#A7A7A9]
                                                    "
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="h-[20px] w-[20px]"
                                                        checked={select[
                                                            filter.name
                                                        ].includes(item.id)}
                                                        onChange={(e) => {
                                                            setSelect((prev) => ({
                                                                ...prev,
                                                                [filter.name]:
                                                                    filter.name === "Events"
                                                                        ? (e.target.checked ? [item.id] : [])
                                                                        : (
                                                                            e.target.checked
                                                                                ? [...prev[filter.name], item.id]
                                                                                : prev[filter.name].filter(id => id !== item.id)
                                                                        )
                                                            }));
                                                        }}
                                                    />

                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </ul>

                        <div className="h-px w-full bg-[#3A3A3E]" />
                    </div>

                    <div className="w-[90%] mx-auto">
                        <div className="flex items-center justify-between pt-3 pb-5">
                            <div className='hover:bg-[#4b4b589b] font-semibold w-[45%] text-[14px] my-6 rounded-[8px] bg-transparent block text-center py-2 border-1 border-[#68686A] '>
                                <Link
                                    to="/browse"
                                    onClick={() => {
                                        setSelect({
                                            Events: [],
                                            Genre: [],
                                            Features: [],
                                            Types: [],
                                            Platform: [],
                                            Subscriptions: []
                                        });

                                        setOpenFilter(null);
                                        setOpenDrawer(false);
                                    }}
                                    className="
                                    !text-white
                                "
                                >
                                    Clear
                                </Link>
                            </div>
                            <div
                                className='w-[45%] my-6 font-semibold rounded-[8px] text-[14px] hover:bg-[#60cdff] bg-[#26BBFF] block text-center py-2'
                            >
                                <Link
                                    to={getFilterUrl()}
                                    onClick={() => {
                                        setOpenDrawer(false);
                                    }}
                                    className='!text-black'>
                                    Apply
                                </Link>


                            </div>

                        </div>
                    </div>

                </div>
            </Drawer>
        </>
    );
};

export default FilterDrawer;