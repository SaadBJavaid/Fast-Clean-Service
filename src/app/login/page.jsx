"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, Typography, TextField, Button, Link, Grid, Box } from "@mui/material";
import isValidEmail from "../../lib/utils";
import { ThemeProvider } from "../contexts/themeContext";
import { LoginBox, FormButton } from "../../components/mui/LoginRegisterPkgs";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = document.getElementById("password").value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <ThemeProvider>
        <LoginBox>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Card sx={{ width: 350, backgroundColor: "#eee" }}>
                <form onSubmit={handleSubmit}>
                  <CardHeader title={<Typography variant="h6">Login</Typography>} />
                  <CardContent>
                    <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth id="password" label="Password" type="password" variant="outlined" sx={{ mb: 2 }} />
                    <FormButton type="submit">LOGIN</FormButton>
                    <Link href="#" color="primary" sx={{ color: "gray" }}>
                      Forgot Password?
                    </Link>
                  </CardContent>
                </form>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ width: 350, backgroundColor: "#ededed" }}>
                <CardHeader title={<Typography variant="h6">Not a member yet?</Typography>} />
                <CardContent>
                  <Typography variant="body2" gutterBottom>
                    Sign up and save with Click on Clayton when you book directly with us.
                  </Typography>
                  <Button
                    sx={{
                      width: "100%",
                      padding: "15px",
                      backgroundColor: "#80AECE",
                      color: "black",
                      borderRadius: "5px",
                    }}
                  >
                    CLICK ON CLAYTON SIGN UP
                  </Button>
                  <Typography variant="body2" gutterBottom>
                    Sign up for special corporate rates and save time with online booking.
                  </Typography>
                  <FormButton>CORPORATE SIGN UP</FormButton>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </LoginBox>
      </ThemeProvider>
    )
  );
};

export default Login;
