import React from 'react'
import { Routes, Route } from 'react-router'
import MainDiscover from '../pages/discover/MainDiscover'
import MainBrowse from '../pages/browse/MainBrowse'
import MainNews from '../pages/news/MainNews'

const MainRouter = () => {
    return (
        <Routes>
            <Route path='/discover' element={<MainDiscover />} />
            <Route path='/browse' element={<MainBrowse />} />
            <Route path='/news' element={<MainNews />} />
        </Routes>
    )
}

export default MainRouter