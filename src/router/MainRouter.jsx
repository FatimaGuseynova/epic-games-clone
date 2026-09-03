import React from 'react'
import { Routes, Route } from 'react-router'
import MainDiscover from '../pages/discover/MainDiscover'
import MainBrowse from '../pages/browse/MainBrowse'
import MainNews from '../pages/news/MainNews'
import Admin from '../admin/Admin'
import DetailPage from '../pages/browse/components/DetailPage'
import NewsDetail from '../pages/news/components/NewsDetail'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainDiscover />} />
            <Route path="/discover" element={<MainDiscover />} /> <Route path='/browse' element={<MainBrowse />} />
            <Route path='/news' element={<MainNews />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/newsdetail" element={<NewsDetail />} />

        </Routes>
    )
}

export default MainRouter