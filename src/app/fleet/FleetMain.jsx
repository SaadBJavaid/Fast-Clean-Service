"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faCalendarAlt, faLeaf, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import { Container, GrayBox } from "../../components/mui/FleetPkgs";
import { HomePkgsInBox } from "../../components/mui/HomePkgs";
import {DecorativeBackgroundImage} from "../../components/Decorative/Decorative.style";
import RadialCircle from "../../components/Decorative/RadialCircle";

export const FleetSubheading = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === "light" ? "#232E4A" : "#fff",
    fontSize: "3.6rem",
    fontWeight: "500",
    "@media (max-width: 900px)": {
        fontSize: "2rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "1.8rem",
    },
}));

export const FleetContainer = styled(Container)(({ theme }) => ({
    borderRadius: "10px",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    color: theme.palette.mode === "light" ? "#535353" : "#C5C5C5",
    paddingLeft: 0,
    paddingBottom: "1rem",

    "& svg": {
        color: "#1C79CC",
        fontSize: "2rem",
        marginRight: "1rem",
    },
}));

export default function FleetMain() {
    return (
        <FleetContainer sx={{}}>
            <HomePkgsInBox
                sx={{
                    margin: "0 auto",
                    position: "relative",
                    padding: "15rem 2rem",
                    borderRadius: "10px",
                    flexDirection: "column",
                    maxWidth: "1571px",
                }}
            >
                <Box
                    sx={{
                        zIndex: 20,
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <FleetSubheading sx={{ fontSize: "5.6rem", fontWeight: "600", marginBottom: "7.4rem" }}>
                        FLEETCARE PRO
                    </FleetSubheading>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        zIndex: 10,
                        gap: "12rem",
                    }}
                >
                    <Box
                        sx={{
                            flex: "1",
                            color: theme => (theme.palette.mode === "light" ? "#1C79CC" : "#C5C5C5"),
                            marginTop: "3rem",
                        }}
                    >
                        <FleetSubheading sx={{marginBottom: "5.3rem"}}>
                            Fleet Maintenance at Your Location or Employee’s Premises
                        </FleetSubheading>
                        <List
                            sx={{
                                fontSize: "2rem",
                                fontFamily: "JakartaSans",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <CustomListItem>
                                <FontAwesomeIcon icon={faTools} />
                                On-site Service Excellence
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                Flexible Scheduling
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faLeaf} />
                                Eco-Friendly & Sustainable
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                Great Value for Money
                            </CustomListItem>
                        </List>
                    </Box>

                    <Box
                        sx={{
                            flex: "1",
                            padding: "2rem",
                            zIndex: 10,
                        }}
                    >
                        <Form />
                    </Box>
                </Box>
                <DecorativeBackgroundImage top={"55%"} left={"-20%"} width="90rem" height="200rem" flip />
                <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
                <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
            </HomePkgsInBox>
        </FleetContainer>
    );
}
