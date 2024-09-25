"use client";
import React, {useEffect, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

import {Box, Checkbox, FormControlLabel, Grid, Link, Typography,} from "@mui/material";

import {isValidEmail} from "../../lib/utils";
import {useTheme} from "../../contexts/themeContext";
import {CustomFormButton, CustomFormTextField,} from "../../components/mui/FormPkgs";
import {CustomCard} from "../../components/mui/CardPackages";

const SignUpModal = ({ setOpenSignup }) => {
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

    console.log("targss", e.target);
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      companyName: e.target.companyName.value,
      street: e.target.street.value,
      city: e.target.city.value,
      zipCode: e.target.zipCode.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };

    if (!data.firstName) {
      setError("First Name is required");
    } else if (!data.lastName) {
      setError("Last Name is required");
    } else if (!data.companyName) {
      setError("Company Name is required");
    } else if (!data.street) {
      setError("Street is required");
    } else if (!data.city) {
      setError("City is required");
    } else if (!data.zipCode) {
      setError("Zip Code is required");
    } else if (!data.email) {
      setError("Email is required");
    } else if (!isValidEmail(data.email)) {
      setError("Email is not valid");
    } else if (!data.password) {
      setError("Password is required");
    } else if (!data.phoneNumber) {
      setError("Phone Number is required");
    } else {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      console.log("data", res_data);
      if (res_data.error) {
        setError(res_data.error);
      } else {
        signIn("credentials", {
          email: res_data.email,
          password: res_data.password,
          redirect: false,
        });
      }
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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100000,
          backgroundColor: "#00000080",
        }}
        onClick={() => setOpenSignup(false)}
      >
        <CustomCard
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "transparent",

            // backgroundColor: theme.palette.mode === "light" ? "#eeeeeec9" : "#616161c1",
            backdropFilter: "blur(5px)",
            padding: "20px",
            borderRadius: "10px",
            // border: "2px solid #485E9F30",
            boxShadow: "2px 2px 20px #00000060 !important",
            maxWidth: "700px",

            // marginTop: "50%",
          }}
          onClick={(e) => e.stopPropagation()}
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
                <CustomFormTextField
                  required
                  fullWidth
                  id="companyName"
                  label="Company"
                  name="companyName"
                  autoComplete="company-name"
                />
              </Grid>

              <Grid item xs={12}>
                <CustomFormTextField autoComplete="street-address" name="street" required fullWidth id="street" label="Street" />
              </Grid>
              <Grid item xs={12}>
                <CustomFormTextField autoComplete="phone" name="phoneNumber" required fullWidth id="phone" label="Phone" />
              </Grid>
              <Grid item xs={12} sm={8}>
                <CustomFormTextField required fullWidth id="City" label="City" name="city" autoComplete="city" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomFormTextField required fullWidth id="zipCode" label="Zip Code" name="zipCode" autoComplete="zip-code" />
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
                {/*<Link href="/login" variant="body2" sx={{ color: "primary.accent", fontSize: "1.8rem" }}>*/}
                {/*  Sign in*/}
                {/*</Link>*/}
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    )
  );
};

export default SignUpModal;
