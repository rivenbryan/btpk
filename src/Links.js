import React from 'react'
import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import LandingPage from './components/landingPage/landingPage';
import MainPage from './components/mainPage/page';
import Login from './components/Login/Login';
export default function Links() {
    const [user, setUser] = useState("Hello")
  return (
    <Routes>
        <Route path="/" element={user ? <MainPage/> : <LandingPage/>} />
        <Route path="/register"  element={<Registration/>}/>
        <Route path="/login"  element={<Login/>}/>
    </Routes>
  )
}
