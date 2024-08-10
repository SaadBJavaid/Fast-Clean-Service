// components/Testimonials.jsx
"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required Swiper modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import MUI components
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

// Import CSS module
import styles from "./Testimonials.module.css";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is an amazing product! Highly recommend it to everyone.",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "I loved it. The quality is top-notch and the support is fantastic.",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "BDSans",
            fontSize: "5rem !important",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            margin: "50px ", // Space above and below the title
          }}
        >
          <HeadingLinesAnimation text="Happy Client" />
        </Typography>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Card className={styles.card} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={testimonial.image}
                alt={testimonial.name}
                className={styles.cardImage}
              />
              <CardContent>
                <Typography
                  variant="h3"
                  component="div"
                  className={styles.cardTitle}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
