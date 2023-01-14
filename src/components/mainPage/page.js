import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import Header from "../header";
import Footer from "../footer";
export default function MainPage() {
  return (
    <>
      <Header/>
      <Container maxWidth="lg" sx={{ marginBottom: { xs: "100px" } }}>
        <Grid container>
          <Grid
            item
            md={10}
            sm={12}
            xs={12}
            sx={{
              marginBottom: { xs: "50px", sm: "100px", md: "50px" },
              padding: { md: "80px 0", sm: "20px 0" },
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",

              backgroundPosition: { sm: "400px", md: "404px" },
            }}
          >

            <Typography
              variant="h1"
              sx={{paddingTop: 15, fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
            >
              Looking for a <strong> team?</strong> <br /> Check it
              <strong> here!</strong>
            </Typography>

            <Typography sx={{paddingTop: 1}} variant="body1">
              Still struggling to find your team? BTPK helps to automate the
              
            </Typography>
            <Typography sx={{paddingTop: 1}}variant="body1">
              process and pairs you up with talented individuals with similar
              interests!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: { sm: "none" }, marginBottom: "56px" }}
          ></Grid>
          <Grid
            rowSpacing={4}
            item
            container
            md={1.5}
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{ padding: { md: "100px 0" } }}
          >
            <Grid item xs={12} sm={4} md={12}>
              <Typography
                variant="h2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                2K+
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                companies
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={12}>
              <Typography
                variant="h2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                8
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                users have registered!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={12}>
              <Typography
                variant="h2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                1.2M
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: { md: "left", xs: "center" } }}
              >
                leads
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}
