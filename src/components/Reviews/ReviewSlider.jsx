"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  Carousel,
  CarouselContentContainer,
  CarouselContentItem,
  CarouselDetails,
  CarouselSignatures,
  CarouselName,
  CarouselControls,
  CarouselBtn,
  CarouselDate,
  CarouselDot,
} from "../../components/mui/AboutPkgs";

import { Box, makeStyles, styled } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This is an amazing product! Highly recommend it to everyone. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "30/01/24",
  },
  {
    name: "Jane Smith",
    feedback: "I loved it. The quality is top-notch and the support is fantastic.",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  // Add more testimonials as needed
];

const StyledMobileStepper = styled(MobileStepper)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  ".MuiMobileStepper-dot": {
    backgroundColor: theme.palette.grey[400], // Default color for dots
  },
  ".MuiMobileStepper-dotActive": {
    backgroundColor: theme.palette.primary.accent, // Color for active dot
  },
}));

export default function ReviewSlider() {
  const maxSteps = testimonials.length;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ maxWidth: "50%", flexGrow: 1 }}>
        <AutoPlaySwipeableViews axis={"x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselContentItem key={index} className={`${activeStep === index ? "active" : ""}`} sx={{}}>
                <CarouselSignatures>
                  <CarouselDetails>{testimonial.feedback}</CarouselDetails>
                  <CarouselName>{testimonial.name}</CarouselName>
                  <CarouselDate>{testimonial.date}</CarouselDate>
                </CarouselSignatures>
              </CarouselContentItem>
            );
          })}
        </AutoPlaySwipeableViews>
        <StyledMobileStepper steps={maxSteps} position="static" activeStep={activeStep} />
      </Box>
    </>
  );
}
