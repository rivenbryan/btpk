import React from 'react'
import Header from './components/header'
import Footer from './components/footer';
import { useState } from "react";
import Registration from './components/Registration/Registration';
import MainPage from './components/mainPage/page';
import LandingPage from './components/landingPage/landingPage';
export default function App() {
  const [user, setUser] = useState("")

  return (
    <>
    <Header/>
    {user ? <MainPage/> : <LandingPage/>} 
    <Footer/>
    {/* <Registration/> */}
    </>
  )
}

