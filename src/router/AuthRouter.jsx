import React from 'react'
import { Routes, Route } from 'react-router'
import SingIn from '../pages/signin/SingIn'
import Register from '../pages/register/Register'
import ExistAccount from '../pages/register/ExistAccount'
import Privacy from '../pages/register/Privacy'
import AccessAccount from '../pages/register/AccessAccount'
import RegisterBirth from '../pages/register/RegisterBirth'
import RegisterEmail from '../pages/register/RegisterEmail'
import SigninPassword from '../pages/signin/SigninPassword'
import RegisterName from '../pages/register/RegisterName'
import OtpCode from '../pages/register/OtpCode'
import ForgotPassword from '../pages/signin/ForgotPassword'
import ResetPassword from '../pages/signin/ResetPassword'
import CorrectInf from '../pages/signin/CorrectInf'

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
            <Route path='password' element={<SigninPassword />} />
            <Route path='name' element={<RegisterName />} />
            <Route path='otp' element={<OtpCode />} />
            <Route path='forgot' element={<ForgotPassword />} />
            <Route path='reset' element={<ResetPassword />} />
            <Route path='correct' element={<CorrectInf />} />
        </Routes>
    )
}

export default AuthRouter