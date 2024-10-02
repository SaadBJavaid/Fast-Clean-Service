"use client";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {CarouselDate, CarouselDetails, CarouselName, CarouselSignatures,} from "../../components/mui/AboutPkgs";
import {Carousel, CarouselContentContainer, CarouselContentItem,} from "../mui/HomePkgs";

import {Box, styled} from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";

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
    feedback:
      "I loved it. The quality is top-notch and the support is fantastic.",
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
    backgroundColor: theme.palette.grey[400],
  },
  ".MuiMobileStepper-dotActive": {
    backgroundColor: theme.palette.primary.accent,
  },
}));

export default function ReviewSlider() {
  const maxSteps = testimonials.length;
  const sliderRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeHeight, setActiveHeight] = useState("auto");

  const transitionStyles = (activeNum) => {
    const centerNum = 100 * activeNum;
    const rightNum = centerNum * -1 + 100;
    const leftNum = centerNum * -1 - 100;

    const styles = {
      left: { opacity: 0, transform: `translateX(${leftNum}%)` },
      center: {
        opacity: 1,
        transform: `translateX(${centerNum !== 0 ? "-" : ""}${centerNum}%)`,
      },
      right: { opacity: 0, transform: `translateX(${rightNum}%)` },
    };

    return styles;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep === testimonials.length - 1 ? 0 : prevActiveStep + 1));
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeStep]);

  useLayoutEffect(() => {
    if (sliderRef.current) {
      const children = sliderRef.current.childNodes;
      let height = 0;

      children.forEach((el) => {
        const list = Array.from(el.classList);
        if (list.includes("active")) {
          for (let i = 0; i < el.children.length; i++) {
            // console.log(el.children[i].offsetHeight);
            height += el.children[i].offsetHeight;
          }
          // console.log(height);
          setActiveHeight(`${height + 100}px`);
        }
      });
    }
  }, [activeStep]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ width: "50%", flexGrow: 1 }}>
        <Carousel>
          <CarouselContentContainer
            ref={sliderRef}
            sx={{
              height: activeHeight,
              width: `${testimonials.length * 100}%`,
              alignSelf: "flex-start",
            }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselContentItem
                  key={index}
                  className={`${activeStep === index ? "active" : ""}`}
                  sx={{
                    border: "none",
                    width: `${100 / testimonials.length}%`,
                    ...(activeStep === 0 && index === testimonials.length - 1
                      ? transitionStyles(index)["left"]
                      : activeStep === testimonials.length - 1 && index === 0
                      ? transitionStyles(index)["right"]
                      : transitionStyles(index)[
                          activeStep > index
                            ? "left"
                            : activeStep === index
                            ? "center"
                            : "right"
                        ]),
                  }}
                >
                  <CarouselSignatures>
                    <CarouselDetails>{testimonial.feedback}</CarouselDetails>
                    <CarouselName>{testimonial.name}</CarouselName>
                    <CarouselDate>{testimonial.date}</CarouselDate>
                  </CarouselSignatures>
                </CarouselContentItem>
              );
            })}
          </CarouselContentContainer>
        </Carousel>

        {/* <AutoPlaySwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselContentItem
                key={index}
                className={`${activeStep === index ? "active" : ""}`}
                sx={{}}
              >
                <CarouselSignatures>
                  <CarouselDetails>{testimonial.feedback}</CarouselDetails>
                  <CarouselName>{testimonial.name}</CarouselName>
                  <CarouselDate>{testimonial.date}</CarouselDate>
                </CarouselSignatures>
              </CarouselContentItem>
            );
          })}
        </AutoPlaySwipeableViews> */}
        <StyledMobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </>
  );
}
