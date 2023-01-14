import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
export default function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
