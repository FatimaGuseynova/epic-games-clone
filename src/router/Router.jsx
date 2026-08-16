import React from 'react'
import { Routes, Route } from 'react-router'

import Header from '../components/header/Header'
import Main from '../layout/Main'
import Admin from '../admin/Admin'
import AuthRouter from './AuthRouter'
import MainRouter from './MainRouter'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />

      <Route path="/admin" element={<Admin />} />
      <Route path="/signin/*" element={<AuthRouter />} />
      <Route path="/*" element={<MainRouter />} />
    </Routes>
  )
}

export default Router