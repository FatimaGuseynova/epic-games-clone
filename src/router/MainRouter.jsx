import React from 'react'
import { Routes, Route } from 'react-router'
import MainDiscover from '../pages/discover/MainDiscover'
import MainBrowse from '../pages/browse/MainBrowse'
import MainNews from '../pages/news/MainNews'
import FiltersChoose from '../pages/browse/components/FiltersChoose'
import Admin from '../admin/Admin'
import AuthRouter from './AuthRouter'

const MainRouter = () => {
    return (
        <Routes>
            <Route path='/discover' element={<MainDiscover />} />
            <Route path='/browse' element={<MainBrowse />} />
            <Route path='/news' element={<MainNews />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signin/*" element={<AuthRouter />} />
            <Route path='/filterchoose' element={<FiltersChoose />} />

        </Routes>
    )
}

export default MainRouter