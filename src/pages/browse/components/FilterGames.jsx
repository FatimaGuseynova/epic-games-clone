import React, { useState, useEffect } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import FiltersChoose from './FiltersChoose';
import { FeatureGet } from "../../../api/FeaturesGet";
import { EventsGet } from "../../../api/EventsGet";
import { GenresGet } from "../../../api/GenreGet";
import { TypesGet } from "../../../api/TypeGet";
import { PlatformGet } from "../../../api/PlatformsGet";
import { SubscriptionsGet } from "../../../api/SubscriptionGet";
import { Link, useNavigate, useSearchParams } from 'react-router';
import FilterDrawer from './FilterDrawer';
import FilterDesktop from './FilterDesktop';
import { IoMdClose } from "react-icons/io";
import GamesBrowse from './GamesBrowse';

function FilterGames() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
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
    const obj = {
        Events: searchParams.getAll("eventId").map(Number),
        Genre: searchParams.getAll("genreId").map(Number),
        Features: searchParams.getAll("featureId").map(Number),
        Types: searchParams.getAll("typeId").map(Number),
        Platform: searchParams.getAll("platformId").map(Number),
        Subscriptions: searchParams.getAll("subscriptionId").map(Number)
    }
    const sortOptions = [
        { id: 1, name: "All" },
        { id: 2, name: "New Release" },
        { id: 3, name: "Coming Soon" },
        { id: 4, name: "Alpabetical" },
        { id: 5, name: "Price: High to Low" },
        { id: 6, name: "Price: Low to High" }
    ];

    const [selected, setSelected] = useState(0)
    const [filter, setFilter] = useState(false)
    const [open, setOpen] = useState(false)

   const removeFilter = (paramName, id) => {
    const params = new URLSearchParams(searchParams);

    const values = params.getAll(paramName);

    params.delete(paramName);

    values
        .filter(value => Number(value) !== id)
        .forEach(value => params.append(paramName, value));

    navigate(`/browse?${params.toString()}`);
};

    let paramss = 0
    const getFilterUrl = () => {
    const params = new URLSearchParams();

    obj.Events.forEach(id => params.append("eventId", id));
    obj.Genre.forEach(id => params.append("genreId", id));
    obj.Features.forEach(id => params.append("featureId", id));
    obj.Types.forEach(id => params.append("typeId", id));
    obj.Platform.forEach(id => params.append("platformId", id));
    obj.Subscriptions.forEach(id => params.append("subscriptionId", id));

    paramss = params.size;

    return `/browse?${params.toString()}`;
};

    const filterData = {
        eventId: all.events,
        genreId: all.genre,
        featureId: all.features,
        typeId: all.types,
        platformId: all.platform,
        subscriptionId: all.subscriptions
    };

    const selectedNames = Object.entries(filterData).flatMap(
        ([paramName, items]) => {
            const ids = searchParams.getAll(paramName).map(Number);

            return items
                .filter(item => ids.includes(item.id))
                .map(item => ({
                    id: item.id,
                    name: item.name,
                    paramName
                }));
        }
    );

    return (
        <div className='w-[89%] mx-auto'>
            <div className={`  flex gap-2 `}>
                <p className='text-[#aaaaaa] text-[15px]'>Show:</p>

                <div className={`  w-full flex justify-between`}>
                    <div className='flex   gap-3' >
                        <div className='relative'  >
                            <div className='flex gap-1 flex-nowrap whitespace-nowrap items-center text-[15px] cursor-pointer' onClick={() => setOpen(prev => !prev)}>
                                {sortOptions[selected].name}

                                {open ? (
                                    <IoIosArrowUp className="ml-1 text-[16px]" />
                                ) : (
                                    <IoIosArrowDown className="ml-1 text-[16px]" />
                                )}
                            </div>
                            <ul className={`absolute left-0 top-full min-w-[150px] mt-1 z-10 ${open ? "block" : "hidden"} pt-3 text-[15px] bg-[#303034] p-1 rounded-[10px]`} >
                                {sortOptions.map((option, index) => (
                                    <li onClick={() => {
                                        setSelected(option.id - 1);
                                        setOpen(false)
                                    }} className={`duration-150 ${selected + 1 === option.id ? "bg-[#696971] rounded-[6px]" : "hover:bg-[#696971] rounded-[6px]"} ${open ? "block" : "hidden"} p-2 py-1.5`} key={index}>
                                        {option.name}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className='flex flex-wrap w-full gap-2'>
                            {selectedNames.map((item) => (
                                <div
                                    key={`${item.paramName}-${item.id}`}
                                    className='bg-[#343437] h-fit flex items-center w-fit gap-2 rounded-[7px] px-2.5 py-1 text-white text-[15px]'
                                >
                                    {item.name}

                                    <IoMdClose
                                        onClick={() => removeFilter(item.paramName, item.id)}
                                        className='text-[#B0B0B1] cursor-pointer hover:text-white'
                                        size={15}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className='min-[770px]:hidden block'>
                        <Link to={getFilterUrl()} onClick={() => setFilter(true)} className='flex flex-nowrap whitespace-nowrap hover:bg-[#696971] duration-150 bg-[#4f4f55] rounded-[10px] py-1 px-2  gap-3 items-center'><span>Filter {paramss > 0 && `(${paramss})`} </span> <LuListFilter />
                        </Link>
                    </div>

                    <div className='max-[770px]:hidden flex-nowrap whitespace-nowrap min-[1024px]:hidden block'>
                        <div onClick={() => setFilter(true)} className='flex hover:bg-[#696971] duration-150 bg-[#4f4f55] rounded-[10px] py-1 px-2  gap-3 items-center'> <FilterDrawer paramss={paramss} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-start'>
                <GamesBrowse sort={sortOptions[selected].id} />

                <div className='max-[1024px]:hidden ml-10 flex-nowrap whitespace-nowrap block'>
                    <div onClick={() => setFilter(true)} ><FilterDesktop paramss={paramss} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterGames 