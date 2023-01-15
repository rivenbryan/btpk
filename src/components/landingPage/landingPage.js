import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Header from "../header";
import Footer from "../footer";
import { app, db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  getDatabase,
  ref,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";
export default function LandingPage() {
  const query = collection(db, "groups", "ML", "users");
  const [userAccs, loading] = useCollectionData(query);
  console.log(userAccs);

  return (
    <>
      <Header />

      <Box
        justifyContent="center"
        display="flex"
        sx={{ alignItems: "center", marginTop: 10}}
      >
        <Box>
          <Typography variant="h3" sx ={{marginBottom: 2}}>Team A </Typography>
          {userAccs?.map( (user)=> (<>
          <Box sx={{marginBottom: 5}}>
          <Typography variant="subtitle1">Name: {user.name}</Typography>
          <Typography variant="subtitle1">Number: {user.num}</Typography>
          </Box>
          </>
          ))}
          
        </Box>
      </Box>
      <Footer />
    </>
  );
}
