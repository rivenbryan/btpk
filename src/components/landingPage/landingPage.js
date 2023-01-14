import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Header from '../header';
import Footer from '../footer';
export default function LandingPage() {


  
  return (
    <>
    <Header/>
    <Box sx={{textAlign: 'center', marginTop: 25, border: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{}}>
            <Typography>Team</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box>
            <Typography>Chatbot</Typography>
          </Box>
        </Grid>
       
      </Grid>
    </Box>
    <Footer/>
    </>
  );
}
