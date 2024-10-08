"use client";
import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading } from "../mui/HomePkgs";
import { useTheme } from "../../contexts/themeContext";

const questionsData = [
    {
        question: "I don't know what to choose, what now?",
        answer: (
            <>
                <p>Don&apos;t worry, by looking at your car usage together we can determine which plan is the best choice for you.</p>
                <p>Send us a message and we will get started for you right away.</p>
            </>
        ),
    },
    {
        question: "How often should you polish a car?",
        answer: (
            <>
                <p>
                    We recommend that you have your car thoroughly cleaned at least once a month . This prevents musty odors, stains in the
                    upholstery and the ingress of bird droppings, among other things.
                </p>
                <p>
                    Maintaining your own car is not possible for everyone. It takes a lot of time and energy. That is why a Cardetail Plan
                    is useful in these kinds of situations.
                </p>
            </>
        ),
    },
    {
        question: "Can I also have another car cleaned?",
        answer: (
            <>
                <p>If only it were that much of a party, but unfortunately our CarDetail Plans are being registered.</p>
                <p>
                    Because we first provide the car on the Plan with a deep cleaning, the maintenance is what you ultimately pay for. You
                    can have another car detailed for an additional fee, to surprise your girlfriend this time 😉,
                </p>
            </>
        ),
    },
    {
        question: "I am going to buy another car, can the plan be transferred?",
        answer: (
            <>
                <p>Of course. When buying a new car, we continue according to plan.</p>
                <p>We will change the license plate that is registered with us and will maintain the new car from now on.</p>
            </>
        ),
    },
    {
        question: "Do I have to be at a fixed address for every cleaning?",
        answer: (
            <>
                <p>
                    Very convenient, but not mandatory. If you are in our working area (Amsterdam and surroundings) It does not matter. We
                    come where you are.
                </p>
                <p>We will note your permanent address, so if we need to be somewhere else on the cleaning day, please let us know.</p>
            </>
        ),
    },
    {
        question: "I want to cancel my CarDetail Plan, how do I do that?",
        answer: (
            <>
                <p>An email I hope I will never receive. But before cancelling, send us an email with the reason for leaving.</p>
                <p>
                    Because it can be cancelled monthly, you are not committed to anything, but we would like to know what the reason was
                    for you, so that we can work on that in the future.
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
