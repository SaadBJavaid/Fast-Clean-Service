"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, Typography, TextField, Button, Link, Grid, Box } from "@mui/material";

import { ThemeProvider } from "../contexts/themeContext";

const Login = () => {
  // const classes = useStyles();

  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("eee", e.target)
    const email = e.target[0].value;
    const password = e.target[1].value;

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
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default",
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Card sx={{ width: 350, backgroundColor: "#eee" }}>
                <form onSubmit={handleSubmit}>
                  <CardHeader title={<Typography variant="h6">Login</Typography>} />
                  <CardContent>
                    <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth id="password" label="Password" type="password" variant="outlined" sx={{ mb: 2 }} />
                    <Button
                      sx={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor: "#80AECE",
                        color: "black",
                        borderRadius: "5px",
                      }}
                      type="submit"
                    >
                      LOGIN
                    </Button>
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
                  <Button
                    sx={{
                      width: "100%",
                      padding: "15px",
                      backgroundColor: "#80AECE",
                      color: "black",
                      borderRadius: "5px",
                    }}
                  >
                    CORPORATE SIGN UP
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    )
  );
};

export default Login;
