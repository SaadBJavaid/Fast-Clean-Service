"use client";
import React from "react";

import Image from "next/image";
import Form from "../../app/fleet/Form";
import {
  GrayBox,
  ImageWrapper,
  Container,
} from "../../components/mui/ContactPkgs";

export default function ContactMain() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Container>
      <GrayBox flex={1}>
        <ImageWrapper>
          <Image
            src="/car1.jpg"
            alt="Example"
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
      </GrayBox>
      <GrayBox flex={1}>
        <Form onSubmit={handleFormSubmit} />
      </GrayBox>
    </Container>
  );
}
