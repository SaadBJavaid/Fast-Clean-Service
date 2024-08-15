"use client";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  SectionHeading,
  Carousel,
  CarouselContentContainer,
  CarouselContentItem,
  CarouselItemInner,
  CarouselImg,
  CarouselStarsBox,
  CarouselDetails,
  CarouselSignatures,
  CarouselName,
  CarouselControls,
  CarouselBtn,
  CarouselDate,
} from "../../mui/HomePkgs";
import { Box } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    stars: 5,
    name: "Igor Dotsenko",
    feedback: "Work has been done professionally.",
    details:
      "I ordered exterior washing a few times already. Both times washerman arrived in time and did the work very well and professionally. Both times I was happy with the result and I will proceed using services provided by the company",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "30/01/24",
  },
  {
    stars: 5,
    name: "Jane Smith",
    feedback:
      "I loved it. The quality is top-notch and the support is fantastic.",
    details:
      "They catered to the delicate paint job and i hope to come back in the future",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "30/01/24",
  },
  {
    stars: 5,
    name: "Katherina",
    feedback: "Very professional service",
    detail:
      "Very professional service, prompt response and flexible. We’d definitely recommend. ",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    stars: 4,
    name: "Steven",
    feedback: "Detailing and ceramic coating.",
    detail:
      "It took a little time but was a near perfect job. They are passionate about detailing, always friendly but most importantly do an amazing job. I highly recommend them.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    stars: 3,
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    stars: 3,
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
  const itemRefs = useRef([]);

  const transitionStyles = (curIndex, activeNum = 0) => {
    const centerNum = 100 * curIndex;
    const rightNum =
      curIndex === (activeNum + 1) % testimonials.length
        ? centerNum * -1 + 100
        : centerNum * 0 + 100;
    const leftNum =
      curIndex < activeNum &&
      activeNum !== 1 &&
      activeNum !== 2 &&
      (curIndex === 0 || curIndex === 1)
        ? centerNum * 2 + 100
        : centerNum * -1 - 100;

    const opacity =
      curIndex === activeNum ||
      curIndex === (activeNum + 1) % testimonials.length
        ? 1
        : 0;

    const styles = {
      left: { opacity: opacity, transform: `translateX(${leftNum}%)` },
      center: {
        opacity: opacity,
        transform: `translateX(${centerNum !== 0 ? "-" : ""}${centerNum}%)`,
      },
      right: { opacity: opacity, transform: `translateX(${rightNum}%)` },
    };

    return styles;
  };

  useLayoutEffect(() => {
    if (sliderRef.current) {
      const children = sliderRef.current.childNodes;
      let height = 0;
      let indexActive = null;

      children.forEach((el, index) => {
        const list = Array.from(el.classList);
        let tempHeight = 0;
        if (list.includes("active")) indexActive = index;
        if (list.includes("active") || index === indexActive + 1)
          for (let i = 0; i < el.children.length; i++) {
            // console.log(el.children[i].offsetHeight);
            tempHeight += el.children[i].offsetHeight;
            // console.log(height);
          }
        if (height < tempHeight) height = tempHeight;
      });
      setActiveHeight(`${height + 30}px`);
    }
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === testimonials.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? testimonials.length - 1 : prevActiveStep - 1
    );
  };

  return (
    <HomePkgsBox
      sx={{
        backgroundImage: "url(/bg2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomePkgsInBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <SectionHeading sx={{ alignSelf: "flex-start" }}>
          Happy Clients
        </SectionHeading>
        <Carousel sx={{ maxWidth: "130rem" }}>
          <CarouselContentContainer
            ref={sliderRef}
            sx={{
              height: activeHeight,
              width: `${testimonials.length * 100}%`,
              // alignSelf: "flex-start",
            }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselContentItem
                  key={index}
                  className={`${activeStep === index ? "active" : ""}`}
                  sx={{
                    width: `${100 / testimonials.length / 2}%`,
                    ...(activeStep === 0 && index === testimonials.length - 1
                      ? transitionStyles(index, activeStep)["left"]
                      : activeStep === testimonials.length - 1 && index === 0
                      ? transitionStyles(index, activeStep)["right"]
                      : transitionStyles(index, activeStep)[
                          activeStep > index
                            ? "left"
                            : activeStep === index
                            ? "center"
                            : "right"
                        ]),
                    background: "none",
                    border: "none",
                    alignSelf: "flex-start",
                    justifyContent: "stretch",
                    height: "290px",
                    // height: "100%",
                  }}
                >
                  <CarouselItemInner>
                    <CarouselStarsBox>
                      {Array.from({ length: 5 }, (_, index) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={index}
                          className={`${
                            index < testimonial?.stars ? "colorstar" : ""
                          }`}
                        />
                      ))}
                    </CarouselStarsBox>
                    <CarouselDetails>
                      <h5>{testimonial.feedback}</h5>
                      <p>{testimonial.detail}</p>
                    </CarouselDetails>
                    <CarouselSignatures>
                      <CarouselImg />
                      <Box>
                        <CarouselName>
                          {testimonial.name} {index}
                        </CarouselName>
                        <CarouselDate>{testimonial.date}</CarouselDate>
                      </Box>
                    </CarouselSignatures>
                  </CarouselItemInner>
                </CarouselContentItem>
              );
            })}
          </CarouselContentContainer>
        </Carousel>
        <CarouselControls>
          <CarouselBtn onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </CarouselBtn>
          <CarouselBtn onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </CarouselBtn>
        </CarouselControls>
      </HomePkgsInBox>
    </HomePkgsBox>
  );
}
