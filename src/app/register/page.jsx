"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, Typography, TextField, Button, Link, Grid, Box } from "@mui/material";
import { LoginBox, FormButton } from "../../components/mui/LoginRegisterPkgs";
import { isvalidEmail } from "../../lib/utils";

import { ThemeProvider } from "../contexts/themeContext";

const Register = () => {
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

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;
    const name = e.target.name.value;

    if (!isvalidEmail) {
      setError("Invalid email");
      return;
    }

    if (!password === confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <ThemeProvider>
        <LoginBox>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Card sx={{ width: 350, backgroundColor: "#eee" }}>
                <form onSubmit={handleSubmit}>
                  <CardHeader title={<Typography variant="h6">Register</Typography>} />
                  <CardContent>
                    <TextField fullWidth id="name" label="Name" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth id="password" label="Password" type="password" variant="outlined" sx={{ mb: 2 }} />{" "}
                    onSubmit={}
                    <TextField
                      fullWidth
                      id="confirm-password"
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <FormButton type="submit">REGISTER</FormButton>
                  </CardContent>
                </form>
              </Card>
            </Grid>
          </Grid>
        </LoginBox>
      </ThemeProvider>
    )
  );
};

export default Register;
