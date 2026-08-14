import React from 'react'
import { Routes, Route } from 'react-router'
import SingIn from '../pages/signin/SingIn'
import Register from '../pages/register/Register'
import ExistAccount from '../pages/register/ExistAccount'
import Privacy from '../pages/register/Privacy'
import AccessAccount from '../pages/register/AccessAccount'
import RegisterBirth from '../pages/register/RegisterBirth'
import RegisterEmail from '../pages/register/RegisterEmail'

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<SingIn />} />
            <Route path="register" element={<Register />} />
            <Route path="exist" element={<ExistAccount />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='access' element={<AccessAccount />} />
            <Route path='birth' element={<RegisterBirth />} />
            <Route path='email' element={<RegisterEmail />} />
        </Routes>
    )
}

export default AuthRouter