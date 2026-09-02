import React from 'react'
import MainSlider from './components/MainSlider'
import MainSliderMobile from './components/MainSliderMobile'
import DiscoverNew from './components/DiscoverNew'
import FortniteGames from './components/FortniteGames'
import SeenFortnite from './components/SeenFortnite'
import Discounts from './components/Discounts'
import DealsOfWeek from './components/DealsOfWeek'
import FreeGames from './components/FreeGames'

function MainDiscover() {
  return (
    <div>
      <MainSliderMobile />
      <MainSlider />
      <DiscoverNew />
      <FortniteGames />
      <SeenFortnite />
      <Discounts />
      <DealsOfWeek />
      <FreeGames />
    </div>
  )
}

export default MainDiscover