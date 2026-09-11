import React from 'react'
import FilterGames from './FilterGames'
import GamesBrowse from './GamesBrowse'

function CityPage() {
    return (
        <div className='bg-[#121216] min-h-screen'>
            <div className='flex flex-col items-start justify-center px-5'>
                <div className='w-[89%] mx-auto'>
                    <h2 className='text-[27px] text-white font-bold py-3'>City Builder Games</h2>
                    <p>Epic Games Store offers some of the best City Builder Games. Download today
                        and start playing fun and exciting City Builder Games.</p>
                </div>
                <div className='py-8'>
                    <FilterGames genreId={14} />

                </div>

            </div>
        </div>

    )
}

export default CityPage