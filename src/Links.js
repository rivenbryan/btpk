import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import MainPage from "./components/mainPage/page";
import LoginRegisterPage from "./components/LoginRegisterPage/LoginRegisterPage";
import { UserContext } from "./context/userContext";

export default function Links() {
  const [user, setUser] = useState("Bryan");

  return (
    <>
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={user ? <LandingPage /> : <MainPage />} />
          <Route path="/LoginRegister" element={<LoginRegisterPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
