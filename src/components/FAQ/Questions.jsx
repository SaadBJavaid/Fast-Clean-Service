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

const questionsData = [
  {
    question: "How often should I clean my car?",
    answer:
      "You should clean your car every 2 weeks to maintain its appearance.",
  },
  {
    question: "What is the best way to clean a car's interior?",
    answer:
      "Vacuum the seats and carpets, and use a microfiber cloth with a mild cleaner for surfaces.",
  },
  {
    question: "How can I remove stubborn stains from my car seats?",
    answer:
      "Use a specialized upholstery cleaner and a soft brush to treat the stains.",
  },
  {
    question:
      "Is it better to wash a car by hand or use an automatic car wash?",
    answer:
      "Hand washing is generally preferred as it is more thorough and less likely to cause scratches.",
  },
  {
    question: "What products should I use to clean my car?",
    answer:
      "Use pH-balanced car wash soap, microfiber towels, and a quality car wax for best results.",
  },
  {
    question: "How do I clean my car's windows?",
    answer:
      "Use a glass cleaner and a microfiber cloth to clean the windows for a streak-free finish.",
  },
  {
    question: "Should I clean my car's engine?",
    answer:
      "Yes, but make sure the engine is cool and use a degreaser specifically designed for engines.",
  },
  {
    question: "What is the best way to dry my car after washing?",
    answer:
      "Use a clean microfiber towel or a car dryer to prevent water spots.",
  },
  {
    question: "How do I protect my car's paint?",
    answer:
      "Apply a coat of wax or sealant to protect the paint from the elements.",
  },
  {
    question: "Can I use household cleaning products on my car?",
    answer:
      "No, household cleaning products may damage your car's surfaces. Use products specifically designed for cars.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        FAQ'S
      </Typography>
      <List>
        {questionsData.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleToggle(index)}
            sx={{ borderBottom: "1px solid #ddd", padding: "8px 16px", cursor: "pointer" }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontSize: "1.5rem" }}>
                {item.question}
              </Typography>
              <Collapse in={openIndex === index}>
                <Typography variant="body1" sx={{ marginTop: 1, fontSize: "1.2rem" }}>
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
