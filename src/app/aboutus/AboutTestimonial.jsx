"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  SectionHeading,
  SectionHeadingCentered,
  ServiceSubheading,
} from "../../components/mui/HomePkgs";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import ScrollSpinningSvg from "../../components/FAQ/ScrollSpinningSvg";

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

export default function Testimonials() {
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep === testimonials.length - 1 ? 0 : prevActiveStep + 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? testimonials.length - 1 : prevActiveStep - 1));
  };

  return (
    <>
      <SectionHeadingCentered sx={{ alignSelf: "flex-start", textAlign: "center" }}>Happy Client</SectionHeadingCentered>

      <HomePkgsBox>
        <HomePkgsInBox
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Carousel>
              <CarouselContentContainer
                ref={sliderRef}
                sx={{
                  width: `100%`,
                  alignSelf: "flex-start",
                }}
              >
                <Box sx={{ width: "15%", position: "relative" }}>
                  <ScrollSpinningSvg />
                  <ServiceSubheading variant="h2">DRIVING A DIRTY CAR IS A THING OF THE PAST</ServiceSubheading>
                </Box>

                {testimonials.map((testimonial, index) => {
                  return (
                    <CarouselContentItem
                      key={index}
                      className={`${activeStep === index ? "active" : ""}`}
                      sx={{
                        width: `45vw`,
                        ...(activeStep === 0 && index === testimonials.length - 1
                          ? transitionStyles(index)["left"]
                          : activeStep === testimonials.length - 1 && index === 0
                          ? transitionStyles(index)["right"]
                          : transitionStyles(index)[activeStep > index ? "left" : activeStep === index ? "center" : "right"]),
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
          </Box>
          <CarouselControls>
            {testimonials.map((_, index) => (
              <CarouselDot
                onClick={() => setActiveStep(index)}
                sx={{ backgroundColor: activeStep === index ? "#00c3ff !important" : "" }}
              />
            ))}
          </CarouselControls>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
