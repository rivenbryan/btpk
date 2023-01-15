import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import Header from "../header";
import Footer from "../footer";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/LandingPage");
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <Box
        justifyContent="center"
        sx={{
          alignItems: "center",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">You Have Successfully Registered !</Typography>
        <Typography>You will be redirected in 3s ...</Typography>
      </Box>
      <Footer />
    </>
  );
};

export default SuccessPage;
