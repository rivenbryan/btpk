import React, { useState } from "react";
import { Box, Button, TextField, Card, Typography } from "@mui/material";

const Login = () => {
  const [isRegister, setisRegister] = useState(false);
  console.log(isRegister);
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignIterms="Center"
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
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
          >
            {isRegister ? "Register" : "Login Here"}
          </Button>
          <Button
            onClick={() => setisRegister(!isRegister)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isRegister ? "Login" : "Register Here"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
