import React from 'react'
import FilterGames from './FilterGames'
import GamesBrowse from './GamesBrowse'

function ActionPage() {
    return (
        <div className='bg-[#121216] min-h-screen'>
            <div className='flex flex-col items-start justify-center px-5'>
                <div>
                    <h2 className='text-[27px] text-white font-bold py-3'>Action Games</h2>
                    <p>Epic Games Store offers some of the best action Games. Download today
                        and start playing fun and exciting action Games.</p>
                </div>
                <div className='py-8'>
                    <FilterGames genreId={3} />

                </div>

            </div>
        </div>

    )
}

export default ActionPage