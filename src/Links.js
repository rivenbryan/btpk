import React from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import MainPage from "./components/mainPage/page";
import LoginRegisterPage from "./components/LoginRegisterPage/LoginRegisterPage";
import { UserContext } from "./context/userContext";
import SuccessPage from "./components/SuccessPage/SuccessPage";
export default function Links() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={user ? <LandingPage /> : <MainPage />} />
          <Route path="/LoginRegisterPage" element={<LoginRegisterPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
