import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
<<<<<<< Updated upstream
import Registration from './components/Registration/Registration';
import MainPage from './components/mainPage/page';
import LandingPage from './components/landingPage/landingPage';
=======
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
>>>>>>> Stashed changes
export default function App() {
  const [user, setUser] = useState("")

  return (
    <>
<<<<<<< Updated upstream
    <Header/>
    {user ? <MainPage/> : <LandingPage/>} 
    <Footer/>
    {/* <Registration/> */}
=======
      <Header />
      <Login />
      <Footer />
>>>>>>> Stashed changes
    </>
  );
}
