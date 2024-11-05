"use client";
import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading } from "../mui/HomePkgs";
import { useTheme } from "../../contexts/themeContext";

const questionsData = [
    {
        question: "What services do you offer at FAST Clean?",
        answer: (
            <>
                <p>
                    At FAST Clean, we provide a variety of car care services, including exterior and interior cleaning, waxing, paint protection, and specialized FleetCare Pro services for businesses. We also offer mobile cleaning services to fit your convenience.
                </p>
            </>
        ),
    },
    {
        question: "How do I book a service with FAST Clean?",
        answer: (
            <>
                <p>
                    You can book a service through our online booking page. Choose your service type, select a package, and provide your vehicle details. If you’re unsure about which package is right for you, feel free to reach out for assistance.
                </p>
            </>
        ),
    },
    {
        question: "Can I modify or cancel my booking?",
        answer: (
            <>
                <p>
                    Yes, you can modify or cancel your booking by logging into your customer portal or contacting us directly. Please try to notify us at least 24 hours in advance if you need to reschedule.
                </p>
            </>
        ),
    },
    {
        question: "Do you offer any subscription plans for regular services?",
        answer: (
            <>
                <p>
                    Yes, we offer subscription packages such as the FleetCare Pro plan, which is perfect for businesses with multiple vehicles. Regular car owners can also choose subscription plans for monthly or bi-weekly cleaning services.
                </p>
            </>
        ),
    },
    {
        question: "Can you clean my vehicle at my home or office?",
        answer: (
            <>
                <p>
                    Absolutely! Our mobile cleaning service allows us to come to your location, whether it’s your home, office, or any other place. Just make sure the location is within our service area when booking.
                </p>
            </>
        ),
    },
    {
        question: "What types of vehicles do you service?",
        answer: (
            <>
                <p>
                    We service a wide range of vehicles including cars, trucks, bikes, SUVs, campers, and boats. Our specialized packages cater to all types of vehicles to ensure they receive the best care possible.
                </p>
            </>
        ),
    },
];


const Questions = () => {
    const [openIndex, setOpenIndex] = useState([]);
    const { theme } = useTheme(); // Assuming you're using a custom theme provider

    const handleToggle = (index) => {
        setOpenIndex((prevOpenIndex) => {
            if (prevOpenIndex.includes(index)) {
                return prevOpenIndex.filter((item) => item !== index);
            } else {
                return [...prevOpenIndex, index];
            }
        });
    };

    return (
        <Box sx={{ marginBottom: "3rem" }}>
            <SectionHeading
                variant="h1"
                gutterBottom
                sx={{
                    fontSize: "4rem !important",
                    color: theme.palette.mode === "light" ? "#232E4A" : "#FFFFFF",
                }}
            >
                FAQ&apos;S
            </SectionHeading>
            <List sx={{ width: "100%" }}>
                {questionsData.map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={() => handleToggle(index)}
                        sx={{
                            borderBottom: "1px solid #ddd",
                            padding: {
                                xs: "10px 14px",
                                sm: "24px 32px",
                            },
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "1.6rem !important",
                                    color: theme.palette.mode === "light" ? "#232E4A" : "#FFFFFF",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: "400",
                                }}
                            >
                                {item.question}

                                <IconButton
                                    onClick={() => handleToggle(index)}
                                    sx={{
                                        marginLeft: {
                                            xs: "4px",
                                            sm: "16px",
                                        },
                                        "& .MuiSvgIcon-root": { fontSize: 32 },
                                    }}
                                >
                                    {openIndex.includes(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </Typography>
                            <Collapse in={openIndex.includes(index)}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        marginTop: "2rem",
                                        color: theme.palette.mode === "light" ? "#535353" : "#C2C2C2",
                                        "& p": {
                                            fontSize: "1.4rem",
                                            marginBottom: "1rem",
                                        },
                                        fontWeight: "300",
                                    }}
                                >
                                    {item.answer}
                                </Typography>
                            </Collapse>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Questions;
