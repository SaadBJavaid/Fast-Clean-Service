"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Box,
  Container,
  CssBaseline,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { CustomCard } from "../../components/mui/CardPackages";
import {
  CustomFormTextField,
  CustomFormButton,
} from "../../components/mui/FormPkgs";

const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

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

    console.log(email, password);

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

  // if (sessionStatus === "loading") {
  //   return <h1>Loading...</h1>;
  // }
  return (
    sessionStatus !== "authenticated" && (
      <Box
        component="main"
        // maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          width: "100%",
          height: "100vh",
        }}
      >
        <CustomCard
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",

            // backgroundColor: theme.palette.mode === "light" ? "#eeeeeec9" : "#616161c1",
            backdropFilter: "blur(5px)",
            padding: "20px",
            borderRadius: "10px",
            // border: "2px solid #485E9F30",
            boxShadow: "2px 2px 20px #00000060 !important",
            maxWidth: "700px",

            // marginTop: "50%",
          }}
        >
          {/* <Image src={"/logo.png"} width={100} height={-1} style={{margin: "1rem"}}/> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "primary.accent",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <CustomFormTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  margin: "-1rem auto 2.5rem",
                  "& span": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                {/* <FormControlLabel label="I want to receive inspiration, marketing promotions and updates via email." /> */}
              </Grid>
            </Grid>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <CustomFormButton
                type="submit"
                variant="contained"
                sx={{ margin: "0 auto" }}
              >
                Login
              </CustomFormButton>
            </Box>
            <Grid container justifyContent="center" sx={{ margin: "2rem 0 0" }}>
              <Grid item>
                <span
                  style={{ color: "primary.contrastText", fontSize: "1.8rem" }}
                >
                  Already have an account?{" "}
                </span>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ color: "primary.accent", fontSize: "1.8rem" }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    )
  );
};

export default Login;
