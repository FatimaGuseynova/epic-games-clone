import React from 'react'
import { Routes, Route } from 'react-router'

import Header from '../components/header/Header'
import Main from '../layout/Main'
import MainRouter from './MainRouter'
import MainSupport from '../pages/support/MainSupport'
import FiltersChoose from '../pages/browse/components/FiltersChoose'
import AuthRouter from './AuthRouter'
import Footer from '../layout/Footer'
const Router = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <Main />
            <MainRouter />
            <Footer/>
          </>
        }
      />
      <Route path='/support' element={<MainSupport />} />
            <Route path="/signin/*" element={<AuthRouter />} />
            <Route path='/filterchoose' element={<FiltersChoose />} />
    </Routes>
  )
}

export default Router