import React from "react";
import {
  FooterContainer,
  FooterHeading,
  FooterDescription,
  FooterButton,
} from "./FooterCTAStyles";

export default function FooterCTA() {
  return (
    <FooterContainer>
      <FooterHeading variant="h2">Fast Clean Service</FooterHeading>
      <FooterDescription variant="body1">
        We come to you at your location to service your vehicle
        <br />
        The specilaist in steam cleaning
      </FooterDescription>
      <FooterButton variant="contained" color="primary">
        Book Now
      </FooterButton>
    </FooterContainer>
  );
}
