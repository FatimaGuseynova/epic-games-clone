import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FeatureGet } from "../../../api/FeaturesGet";
import { EventsGet } from "../../../api/EventsGet";
import { GenresGet } from "../../../api/GenreGet";
import { TypesGet } from "../../../api/TypeGet";
import { PlatformGet } from "../../../api/PlatformsGet";
import { SubscriptionsGet } from "../../../api/SubscriptionGet";
import { useNavigate, useSearchParams } from 'react-router';

function FilterDesktop({ paramss }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [select, setSelect] = useState({
        Events: [],
        Genre: [],
        Features: [],
        Types: [],
        Platform: [],
        Subscriptions: []
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
            });
        };

        getFeature();
    }, []);

    useEffect(() => {
        setSelect({
            Events: searchParams.getAll("eventId").map(Number),
            Genre: searchParams.getAll("genreId").map(Number),
            Features: searchParams.getAll("featureId").map(Number),
            Types: searchParams.getAll("typeId").map(Number),
            Platform: searchParams.getAll("platformId").map(Number),
            Subscriptions: searchParams.getAll("subscriptionId").map(Number)
        });
    }, [searchParams]);

    const filters = [
        { id: 1, name: "Events", array: all.events },
        { id: 2, name: "Genre", array: all.genre },
        { id: 3, name: "Features", array: all.features },
        { id: 4, name: "Types", array: all.types },
        { id: 5, name: "Platform", array: all.platform },
        { id: 6, name: "Subscriptions", array: all.subscriptions }
    ];

    const selectedCount =
        select.Events.length +
        select.Genre.length +
        select.Features.length +
        select.Types.length +
        select.Platform.length +
        select.Subscriptions.length;

    const updateUrl = (currentSelect) => {
        const params = new URLSearchParams(searchParams);

        params.delete("eventId");
        params.delete("genreId");
        params.delete("featureId");
        params.delete("typeId");
        params.delete("platformId");
        params.delete("subscriptionId");

        currentSelect.Events.forEach(id => params.append("eventId", id));
        currentSelect.Genre.forEach(id => params.append("genreId", id));
        currentSelect.Features.forEach(id => params.append("featureId", id));
        currentSelect.Types.forEach(id => params.append("typeId", id));
        currentSelect.Platform.forEach(id => params.append("platformId", id));
        currentSelect.Subscriptions.forEach(id => params.append("subscriptionId", id));

        navigate(`/browse?${params.toString()}`);
    };

    const handleChange = (filterName, itemId, checked) => {
        const newSelect = {
            ...select,
            [filterName]:
                filterName === "Events"
                    ? checked
                        ? [itemId]
                        : []
                    : checked
                        ? [...select[filterName], itemId]
                        : select[filterName].filter(id => id !== itemId)
        };

        setSelect(newSelect);
        updateUrl(newSelect);
    };

    const resetFilters = () => {
        const params = new URLSearchParams(searchParams);

        params.delete("eventId");
        params.delete("genreId");
        params.delete("featureId");
        params.delete("typeId");
        params.delete("platformId");
        params.delete("subscriptionId");

        navigate(`/browse?${params.toString()}`);
    };

    return (
        <div className='bg-[#202024] w-fit h-fit rounded-2xl'>
            <div className='w-[90%] mx-auto'>
                <div className='flex items-center justify-between py-5'>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold'>
                            Filter
                            {selectedCount > 0 && ` (${selectedCount})`}
                        </h2>

                        {selectedCount > 0 && (
                            <span
                                onClick={resetFilters}
                                className='text-[#26BAFE] cursor-pointer hover:underline text-sm'
                            >
                                Reset
                            </span>
                        )}
                    </div>
                </div>

                <div className='w-full hover:bg-[#29292d] bg-[#303034] flex items-center gap-4 py-2 px-4'>
                    <GrSearch className='text-[#d6d6d6]' size={14} />

                    <input
                        className='outline-none'
                        type="text"
                        placeholder='Keywords'
                    />
                </div>
            </div>

            <div className='py-4'>
                <ul className="flex flex-col">
                    {filters.map((filter) => (
                        <div key={filter.id}>
                            <li
                                onClick={() => {
                                    setOpen(
                                        open === filter.id
                                            ? false
                                            : filter.id
                                    );
                                }}
                                className="border-t-1 border-[#3A3A3E] px-6 text-[14px] flex items-center justify-between w-full p-5 duration-150 hover:bg-[#54545b]"
                            >
                                {filter.name}

                                <div className='flex items-center gap-2'>
                                    <div
                                        className={`${select[filter.name].length > 0
                                            ? "block"
                                            : "hidden"
                                        } text-white px-1.5 bg-[#3A3A3E] rounded-full`}
                                    >
                                        {select[filter.name].length}
                                    </div>

                                    {open === filter.id ? (
                                        <IoIosArrowUp className="ml-1 text-[16px]" />
                                    ) : (
                                        <IoIosArrowDown className="ml-1 text-[16px]" />
                                    )}
                                </div>
                            </li>

                            <div className='w-[90%] mx-auto'>
                                <div
                                    className={`${open === filter.id
                                        ? "block"
                                        : "hidden"
                                    }`}
                                >
                                    {filter.array.map((item) => (
                                        <div
                                            key={item.id}
                                            className="py-2 flex items-center gap-2 text-sm text-[#A7A7A9]"
                                        >
                                            <input
                                                checked={select[filter.name].includes(item.id)}
                                                onChange={(e) =>
                                                    handleChange(
                                                        filter.name,
                                                        item.id,
                                                        e.target.checked
                                                    )
                                                }
                                                className='h-[20px] w-[20px]'
                                                type="checkbox"
                                            />

                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>

                <div className='h-px w-full bg-[#3A3A3E]' />
            </div>
        </div>
    );
}

export default FilterDesktop;