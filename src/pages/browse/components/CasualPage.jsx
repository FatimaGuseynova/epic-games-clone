import React from 'react'
import FilterGames from './FilterGames'
import GamesBrowse from './GamesBrowse'

function CasualPage() {
    return (
        <div className='bg-[#121216] min-h-screen'>
            <div className='flex flex-col items-start justify-center px-5'>
                <div className='w-[89%] mx-auto'>
                    <h2 className='text-[27px] text-white font-bold py-3'>Casual Games</h2>
                    <p>Epic Games Store offers some of the best Casual Games. Download today
                        and start playing fun and exciting Casual Games.</p>
                </div>
                <div className='py-8'>
                    <FilterGames genreId={6} />

                </div>

            </div>
        </div>

    )
}

export default CasualPage