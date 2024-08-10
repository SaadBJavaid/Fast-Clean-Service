"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import {
  GrayBox,
  ImageWrapper,
  Container,
} from "../../components/mui/FleetPkgs";

export default function FleetMain() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Container>
      <GrayBox>
        <Form onSubmit={handleFormSubmit} />
      </GrayBox>
      <GrayBox>
        <ImageWrapper>
          <Image src="/car.jpg" alt="Example" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </GrayBox>
    </Container>
  );
}
