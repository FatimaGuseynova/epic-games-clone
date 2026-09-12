import React from 'react'
import { Routes, Route } from 'react-router'
import MainDiscover from '../pages/discover/MainDiscover'
import MainBrowse from '../pages/browse/MainBrowse'
import MainNews from '../pages/news/MainNews'
import Admin from '../admin/Admin'
import DetailPage from '../pages/browse/components/DetailPage'
import NewsDetail from '../pages/news/components/NewsDetail'
import ActionPage from '../pages/browse/components/ActionPage'
import ActionAdvPage from '../pages/browse/components/ActionAdvPage'
import AdventurePage from '../pages/browse/components/AdventurePage'
import CasualPage from '../pages/browse/components/CasualPage'
import CityPage from '../pages/browse/components/CityPage'
import Achivments from '../pages/browse/components/Achivments'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainDiscover />} />
            <Route path="/discover" element={<MainDiscover />} /> <Route path='/browse' element={<MainBrowse />} />
            <Route path='/news' element={<MainNews />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/newsdetail" element={<NewsDetail />} />
            <Route path="/browse/action" element={<ActionPage />} />
            <Route path="/browse/action-adventure" element={<ActionAdvPage />} />
            <Route path="/browse/adventure" element={<AdventurePage />} />
            <Route path="/browse/casual" element={<CasualPage />} />
            <Route path="/browse/city" element={<CityPage />} />
            <Route path="/browse/achievements" element={<Achivments />} />
            

        </Routes>
    )
}

export default MainRouter