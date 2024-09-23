"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Typography, TextField, Link, Grid, Box, FormControlLabel, Checkbox } from "@mui/material";

import { isValidEmail } from "../../lib/utils";
import { useTheme } from "../../contexts/themeContext";
import { CustomFormTextField, CustomFormButton } from "../../components/mui/FormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";

const Register = () => {
  // const classes = useStyles();
  const { theme } = useTheme();

  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  // if (sessionStatus === "loading") {
  //   return <h1>Loading...</h1>;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;
    const name = e.target.name.value;

    if (!isValidEmail) {
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
            sx={{ fontWeight: 700, color: "primary.accent", marginTop: "1rem", marginBottom: "1rem" }}
          >
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <CustomFormTextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormTextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
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
              <Grid item xs={12}>
                <FormControlLabel
                  sx={{
                    margin: "-1rem auto 2.5rem",
                    "& span": {
                      fontSize: "1.5rem",
                    },
                  }}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <CustomFormButton type="submit" variant="contained" sx={{ margin: "0 auto" }}>
                Sign Up
              </CustomFormButton>
            </Box>
            <Grid container justifyContent="center" sx={{ margin: "2rem 0 0" }}>
              <Grid item>
                <span style={{ color: "primary.contrastText", fontSize: "1.8rem" }}>Already have an account? </span>
                <Link href="/login" variant="body2" sx={{ color: "primary.accent", fontSize: "1.8rem" }}>
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    )
  );
};

export default Register;
