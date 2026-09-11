import React from 'react'
import FilterGames from './FilterGames'
import GamesBrowse from './GamesBrowse'

function AdventurePage() {
    return (
        <div className='bg-[#121216] min-h-screen'>
            <div className='flex flex-col items-start justify-center px-5'>
                <div className='w-[89%] mx-auto'>
                    <h2 className='text-[27px] text-white font-bold py-3'>Adventure Games</h2>
                    <p>Epic Games Store offers some of the best Adventure Games. Download today
                        and start playing fun and exciting Adventure Games.</p>
                </div>
                <div className='py-8'>
                    <FilterGames genreId={5} />

                </div>

            </div>
        </div>

    )
}

export default AdventurePage