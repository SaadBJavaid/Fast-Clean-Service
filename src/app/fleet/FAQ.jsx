import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqContainer, FaqItem } from "../../components/mui/FleetPkgs";

const faqs = [
  {
    question: "What types of car washes do you offer?",
    answer:
      "We offer a range of car washes including exterior washes, full-service washes, and detailing services.",
  },
  {
    question: "How often should I get my car washed?",
    answer:
      "We recommend washing your car every 1-2 weeks, depending on environmental factors and usage.",
  },
  {
    question: "Are your car wash products eco-friendly?",
    answer:
      "Yes, we use biodegradable and eco-friendly products to ensure minimal environmental impact.",
  },
  {
    question: "Do I need to make an appointment for a car wash?",
    answer:
      "Appointments are not required for standard car washes, but they are recommended for detailing services.",
  },
  {
    question: "Can you wash cars with custom paint jobs or wraps?",
    answer:
      "Yes, we can safely wash cars with custom paint jobs or wraps. Please let us know about any special instructions.",
  },
  {
    question: "What should I do if I notice a problem after a car wash?",
    answer:
      "If you notice any issues, please contact us immediately so we can address and resolve the problem promptly.",
  },
  {
    question: "Do you offer any membership or loyalty programs?",
    answer:
      "Yes, we offer various membership and loyalty programs that provide discounts and special offers for frequent customers.",
  },
  {
    question: "How long does a typical car wash take?",
    answer:
      "A standard exterior wash usually takes about 15-30 minutes. Full-service washes and detailing can take longer.",
  },
  {
    question: "Can you wash the interior of my car?",
    answer:
      "Yes, we offer interior cleaning services including vacuuming, dusting, and detailing. Check our service menu for details.",
  },
  {
    question: "Are there any cars you do not wash?",
    answer:
      "We generally wash all types of cars, but please let us know if you have a specific vehicle type or concern, and we will accommodate accordingly.",
  },
];

export default function FAQ() {
  return (
    <FaqContainer>
      <Grid container spacing={2}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <FaqItem>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </FaqItem>
          </Grid>
        ))}
      </Grid>
    </FaqContainer>
  );
}
