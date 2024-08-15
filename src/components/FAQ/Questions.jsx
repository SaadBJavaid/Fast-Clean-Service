"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading, SectionHeadingCentered } from "../mui/HomePkgs";
import { FontSizes } from "../../app/contexts/themeContext";

const questionsData = [
  {
    question: "I don't know what to choose, what now?",
    answer: (
      <>
        Don't worry, by looking at your car usage together we can determine
        which plan is the best choice for you.
        <br />
        <br />
        Send us a message and we will get started for you right away.
      </>
    ),
  },
  {
    question: "How often should you polish a car?",
    answer: (
      <>
        We recommend that you have your car thoroughly cleaned at least once a
        month . This prevents musty odors, stains in the upholstery and the
        ingress of bird droppings, among other things.
        <br />
        <br />
        Maintaining your own car is not possible for everyone. It takes a lot of
        time and energy. That is why a Cardetail Plan is useful in these kinds
        of situations.
      </>
    ),
  },
  {
    question: "Can I also have another car cleaned?",
    answer: (
      <>
        If only it were that much of a party, but unfortunately our CarDetail
        Plans are being registered.\n\nBecause we first
        <br />
        <br />
        provide the car on the Plan with a deep cleaning, the maintenance is
        what you ultimately pay for. You can have another car detailed for an
        additional fee, to surprise your girlfriend this time 😉",
      </>
    ),
  },
  {
    question: "I am going to buy another car, can the plan be transferred?",
    answer: (
      <>
        Of course. When buying a new car, we continue according to plan.
        <br />
        <br />
        We will change the license plate that is registered with us and will
        maintain the new car from now on.
      </>
    ),
  },
  {
    question: "Do I have to be at a fixed address for every cleaning?",
    answer: (
      <>
        Very convenient, but not mandatory. If you are in our working area
        (Amsterdam and surroundings) It does not matter. We come where you are.
        <br />
        <br />
        We will note your permanent address, so if we need to be somewhere else
        on the cleaning day, please let us know.
      </>
    ),
  },
  {
    question: "I want to cancel my CarDetail Plan, how do I do that?",
    answer: (
      <>
        An email I hope I will never receive. But before cancelling, send us an
        email with the reason for leaving.
        <br />
        <br />
        Because it can be cancelled monthly, you are not committed to anything,
        but we would like to know what the reason was for you, so that we can
        work on that in the future.
      </>
    ),
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState([]);

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
    <Box>
      <SectionHeading variant="h1" gutterBottom>
        {" "}
        FAQ&apos;S
      </SectionHeading>
      <List sx={{ width: "100%" }}>
        {questionsData.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleToggle(index)}
            sx={{
              borderBottom: "1px solid #ddd",
              padding: "24px 32px",
              cursor: "pointer",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontSize: "3rem !important" }}>
                {item.question}
              </Typography>
              <Collapse in={openIndex.includes(index)}>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "2rem",
                    color: "secondary.text",
                    fontSize: "2.5rem",
                  }}
                >
                  {item.answer}
                </Typography>
              </Collapse>
            </Box>
            <IconButton onClick={() => handleToggle(index)} sx={{ marginLeft: 2 }}>
              {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Questions;
