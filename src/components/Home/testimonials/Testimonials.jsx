"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  SectionHeading,
  Carousel,
  CarouselContentContainer,
  CarouselContentItem,
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
    stars: 3,
    name: "John Doe",
    feedback: "This is an amazing product! Highly recommend it to everyone.",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "30/01/24",
  },
  {
    stars: 3,
    name: "Jane Smith",
    feedback:
      "I loved it. The quality is top-notch and the support is fantastic.",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
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
    <HomePkgsBox>
      <HomePkgsInBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <SectionHeading sx={{ alignSelf: "flex-start" }}>
          Happy Client
        </SectionHeading>
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
                    <p>
                      Lorem ipsum doler sit amet Lorem ipsum doler sit amet
                      Lorem ipsum doler sit amet Lorem ipsum doler sit amet
                      Lorem ipsum doler sit amet Lorem ipsum doler sit amet
                      Lorem ipsum doler sit amet Lorem ipsum doler sit amet
                      Lorem ipsum doler sit amet Lorem ipsum doler sit amet
                      Lorem ipsum doler sit amet
                    </p>
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
