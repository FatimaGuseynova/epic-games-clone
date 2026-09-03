import React from 'react'
import NewsList from './components/NewsList'
import TwoNews from './components/TwoNews'

function MainNews() {
  return (
    <div>
        <div>
          <TwoNews/>
          <NewsList/>
        </div>
    </div>
  )
}

export default MainNews