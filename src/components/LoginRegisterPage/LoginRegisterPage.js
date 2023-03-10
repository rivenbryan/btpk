import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import Header from "../header";
import Footer from "../footer";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app, db } from "../../firebase";
import { getCountFromServer } from "firebase/firestore";
import uuid from "react-uuid";
import { collection, getDocs } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
const LoginRegisterPage = () => {
  let navigate = useNavigate();
  const auth = getAuth(app);
  const [open, setOpen] = React.useState(false);
  const [isRegister, setisRegister] = useState(false);
  const [NumberOfUsers, setNumberOfUsers] = useState(0); 
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    interest: "",
    number: "",
  });
  console.log(Input);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      createUserWithEmailAndPassword(auth, Input.email, Input.password)
        .then((userCredential) => {
          console.log("Successful!");
          navigate("/");
          // Add to Users Collection
          setDoc(doc(db, "users", userCredential.user.uid), {
            name: Input.name,
            email: Input.email,
            userID: userCredential.user.uid,
            available: 0,
            interest: Input.interest,
          });
          console.log("Successfully created users collection");

          // Add to interests collection based on interest
          setDoc(
            doc(
              db,
              "interests/" + Input.interest + "/users/",
              userCredential.user.uid
            ),
            {
              name: Input.name,
              userID: userCredential.user.uid,
              available: 0,
            }
          );
          console.log("Successfully created interest collection");

          // 2 Choices: Either form a group, or join to a group
          if (NumberOfUsers % 5 == 1) {
            setDoc(
              doc(
                db,
                "groups/" + Input.interest + "/users/",
                userCredential.user.uid
              ),
              {
                name: Input.name,
                num: Input.number,
              }
            );
            // Form a new group
          } else {
            // Join a new group
            setDoc(
              doc(
                db,
                "groups/" + Input.interest + "/users/",
                userCredential.user.uid
              ),
              {
                name: Input.name,
                num: Input.number,
              }
            );
          }
          console
            .log("Successfully created group")

            .then()
            .catch((error) => {
              console.log(error);
            });

          // Add to interests collection based on interest
          setDoc(
            doc(
              db,
              "interests/" + Input.interest + "/users/",
              userCredential.user.uid
            ),
            {
              name: Input.name,
              userID: userCredential.user.uid,
              available: 0,
            }
          )
            .then()
            .catch((error) => {
              console.log(error);
            });

          // 2 Choices: Either form a group, or join to a group
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const resetState = () => {
    setisRegister(!isRegister);
    setInput({ name: "", email: "", password: "", interest: "", number: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
              <>
                <TextField
                  onChange={handleChange}
                  name="name"
                  value={Input.name}
                  margin="normal"
                  type={"text"}
                  variant="outlined"
                  placeholder="Name"
                />
                <TextField
                  onChange={handleChange}
                  name="number"
                  value={Input.number}
                  margin="normal"
                  variant="outlined"
                  placeholder="Number"
                />
              </>
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
            {isRegister && (
              <>
                <Typography sx={{ marginTop: 3, borderRadius: 3 }}>
                  Choose Project Interest
                </Typography>
                <Select
                  name="interest"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={Input.interest}
                  label="interest"
                  onChange={handleChange}
                  sx={{ marginTop: 3, borderRadius: 3 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"ML"}>Machine Learning</MenuItem>
                  <MenuItem value={"AI"}>Artificial Intelligence</MenuItem>
                  <MenuItem value={"HW"}>Hardware</MenuItem>
                  <MenuItem value={"DS"}>Data Science</MenuItem>
                  <MenuItem value={"WD"}>Web Development</MenuItem>
                  <MenuItem value={"SWE"}>Software Engineering</MenuItem>/
                </Select>
              </>
            )}
            <Button
              endIcon={
                isRegister ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
              onClick={() => navigate("/SuccessPage")}
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
