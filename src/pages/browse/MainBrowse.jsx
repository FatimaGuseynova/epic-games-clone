import React from 'react'
import PopularGenres from './components/PopularGenres'
import FilterGames from './components/FilterGames'
import GamesBrowse from './components/GamesBrowse'

function MainBrowse() {
    return (
        <div className='bg-[#121216] h-full '>
            <div className='min-[1100px]:w-[80%]  w-[95%] mx-auto'>
                <PopularGenres />
                <FilterGames />
            </div>

        </div>
    )
}

export default MainBrowse