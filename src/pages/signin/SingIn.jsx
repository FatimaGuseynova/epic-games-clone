import React from 'react'
import Logo from '../../components/ui/Logo'
import Playstation from "../../images/Playstation.png"
import nintendo from "../../images/nintendo.png"
import xbox from "../../images/xbox.png"
import google from "../../images/google.png"
import lego from "../../images/lego.png"
import vk from "../../images/vk.png"
import apple from "../../images/apple.png"
import autodesk from "../../images/autodesk.png"
import facebook from "../../images/facebook.png"
import steam from "../../images/steam.png"
import { useFormik } from 'formik'
import { signinEmail } from "../../validation/signinEmail";
import { BiSolidError } from "react-icons/bi";
import { Link } from 'react-router';

function SingIn() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: signinEmail,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className='bg-[#101014] max-[480px]:block min-[480px]:flex max-[480px]:px-5  min-[480px]:p-10 min-[480px]:justify-center  '>
      <div className=' min-[480px]:bg-[#18181C]  overflow-hidden min-[480px]:w-[550px] min-[480px]:max-w-[96%] min-[480px]:p-11 max-[480px]:py-11 flex flex-col  min-[480px]:rounded-[14px] min-[480px]:border-1 min-[480px]:border-[#303033]'>
        <div className='animate-slide-in-right  '>
          <div className='flex flex-col items-center justify-center '>
            <Logo />
            <h2 className='text-white font-semibold py-4 text-[23px]'>Sign in to Epic Games</h2>
          </div>
          <form onSubmit={handleSubmit} className='w-full'>
            <input name="email" onChange={handleChange} value={values.email} type="text" placeholder='Email address' required className={`${errors.email && "border-[#FF6173]"} hover:border-[#9b9ba2] duration-150 py-3 border-1 w-[100%] px-5 rounded-2xl border-[#5a5a5f]`} />
            {errors.email && <p className='text-[#FF6173] flex items-center text-[13px] pt-1'><BiSolidError className='mr-1' />
              {errors.email}</p>}
            <Link to="password" className='w-full my-6 rounded-[8px] bg-[#26BBFF] block text-center py-2 text-black'>Continue</Link>
          </form>
          <div>
            <h6 className='text-center text-[15px] text-[#A7A7A9] '>New here? <Link to="/signin/register" className="text-[#26B7F9] underline">Create an account</Link> </h6>
          </div>
          <div className='bg-[#303033] my-5 w-full h-px'>
          </div>
          <div className='text-center'>
            <h5 className='font-semibold text-[18px]'>Only played on console?</h5>
            <p className='text-[14px] text-[#A7A7A9]'>Sign in to access your progress and purchases</p>
          </div>
          <ul className='flex items-center w-full gap-3 justify-between py-4'>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={Playstation} alt="Playstation" />
              <p className='text-[11px] font-semibold'>PlayStation</p>
              <p className='text-[11px] font-semibold'>Network</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 px-0 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={xbox} alt="xobox" />
              <p className='text-[11px] font-semibold'>PlayStation</p>
              <p className='text-[11px] font-semibold'>network</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={nintendo} alt="nintendo" />
              <p className='text-[11px] font-semibold'>Nintendo</p>
              <p className='text-[11px] font-semibold'>Account</p>
            </li>
          </ul>
          <h2 className='text-center font-semibold text-[18px]' >Other ways to sign in</h2>
          <ul className='flex items-center w-full gap-3 justify-between py-4'>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={google} alt="google" />
              <p className='text-[11px] font-semibold'>Google</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 px-0 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={steam} alt="steam" />
              <p className='text-[11px] font-semibold'>Steam</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={apple} alt="apple" />
              <p className='text-[11px] font-semibold'>Sign in with Apple</p>
            </li>
          </ul>
          <ul className='flex items-center w-full gap-3 justify-between py-4'>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={facebook} alt="facebook" />
              <p className='text-[11px] font-semibold'>Facebook</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 px-0 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={lego} alt="lego" />
              <p className='text-[11px] font-semibold'>Lego Accaunt</p>
            </li>
            <li className='bg-[#242428] flex flex-col justify-center items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={autodesk} alt="autodesk" />
              <p className='text-[11px] font-semibold'>Autodesk</p>
            </li>
          </ul>
          <ul className='flex w-[36%] justify-start items-start gap-3 py-4'>
            <li className='bg-[#242428] flex flex-col items-center duration-300 p-3 w-[100%] rounded-[15px] hover:bg-[#555560]'>
              <img className='w-12 pb-2 ' src={vk} alt="vk" />
              <p className='text-[11px] font-semibold'>VKontakte</p>
            </li>

          </ul>
          <div className=' text-center py-5'>
            <Link to="/signin/access" className="text-[#2290C3] underline">Trouble signing in?</Link>
          </div>
          <div className='text-center pb-5'>
            <Link to="/signin/privacy" className="text-[#2290C3] underline">Privacy Policy</Link>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SingIn