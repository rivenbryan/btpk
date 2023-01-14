import React, { useState } from "react";
import { Box, Button, TextField, Card, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import Header from "../header";
import Footer from "../footer";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { app, db } from "../../firebase";
import { setDoc, doc } from 'firebase/firestore'
const Login = () => {
  const auth = getAuth(app);
  const [isRegister, setisRegister] = useState(false);
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Input);
    if (isRegister) {
      createUserWithEmailAndPassword(auth, Input.email, Input.password)
        .then((userCredential) => {
          console.log("Register before")
          setDoc(doc(db, "users", userCredential.user.uid), {
            email: Input.email,
            userID: userCredential.user.uid,
            available: 0,
            interest: 'ML'
          })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, Input.email, Input.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  };

  const resetState = () => {
    setisRegister(!isRegister);
    setInput({ name: "", email: "", password: "" });
  };

  return (
    <>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="Center"
            justifyContent={"Center"}
            margin="auto"
            marginTop={5}
            padding={3}
            boxShadow="5px 5px 10px #ccc"
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              {isRegister ? "Register" : "Login"}
            </Typography>
            {isRegister && (
              <TextField
                onChange={handleChange}
                name="name"
                value={Input.name}
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
            )}
            <TextField
              onChange={handleChange}
              name="email"
              value={Input.email}
              margin="normal"
              type="email"
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              onChange={handleChange}
              name="password"
              value={Input.password}
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />
            <Button
              endIcon={
                isRegister ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
            >
              {isRegister ? "Register" : "Login"}
            </Button>
            <Button
              endIcon={
                isRegister ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
              }
              onClick={resetState}
              sx={{ marginTop: 3, borderRadius: 3 }}
            >
              {isRegister ? "Back to Login" : "Register Here"}
            </Button>
          </Box>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginRegisterPage;
