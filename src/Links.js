import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import LandingPage from "./components/landingPage/landingPage";
import MainPage from "./components/mainPage/page";
import Login from "./components/Login/Login";
import { UserContext } from "./context/userContext";

export default function Links() {
  const [user, setUser] = useState("");

  return (
    <>
        <UserContext.Provider value={{user}}>
            <Routes>
                <Route path="/" element={user ? <LandingPage /> :  <MainPage /> }/>
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </UserContext.Provider> 
      
    </>
  );
}
