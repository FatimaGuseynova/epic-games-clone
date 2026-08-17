import React from 'react'
import background from '../../../images2/epic-savings.avif'

function MainSlider() {
  return ( 
    <div>
      <div className='max-[768px]:hidden'>
        <div>
          <div className='w-[65%] h-screen bg-contain bg-center bg-no-repeat rounded-[10px] ' style={{ backgroundImage: `url(${background})` }}>
            ;km
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSlider