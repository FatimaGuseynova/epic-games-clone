import React from 'react'
import { Routes, Route } from 'react-router'

const MainRouter = () => {
    return (
        <Routes>
            <Route index element={<SingIn />} />
        </Routes>
    )
}

export default MainRouter