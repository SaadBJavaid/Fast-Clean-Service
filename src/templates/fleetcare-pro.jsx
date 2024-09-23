import React from "react";
import { Body, Container, Head, Heading, Html, Preview, Section, Text, Button, Img } from "@react-email/components";
// const baseUrl = process.env.VERCEL_URL;
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const FleetCareConfirmationEmail = ({
  name,
  bussinessName,
  email,
  vehicleType,
  location,
  fleetSize,
  packageName = "FLeetCare Pro",
}) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Your booking for Fast Clean Service - {packageName} has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imgsection}>
            <Img src={`${baseUrl}/logo.png`} width="40" height="37" alt="Fast Clean Service" style={img} />
          </Section>
          <Heading style={{ ...heading, color: accentColor }}>Booking Confirmation</Heading>
          <Text style={paragraph}>Dear {name},</Text>
          <Text style={paragraph}>Thank you for your booking with Fast Clean Service.</Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              {packageName}
            </Heading>
            <Text style={detailText}>
              <strong>Bussiness Name:</strong> {bussinessName}
            </Text>
            <Text style={detailText}>
              <strong>Contact Person:</strong> {name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailText}>
              <strong>Type of Vehicle:</strong> {vehicleType}
            </Text>
            <Text style={detailText}>
              <strong>Address:</strong> {location}
            </Text>
            <Text style={detailText}>
              <strong>Fleet Size:</strong> {fleetSize}
            </Text>
          </Section>
          <Text style={paragraph}>
            Someone form our team will contact you shortly. If you have any questions or need to make changes to your booking,
            please don&apos;t hesitate to contact us.
          </Text>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default FleetCareConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const imgsection = {
  marginTop: 32,
};

const img = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const bookingDetails = {
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  padding: "24px",
  marginBottom: "24px",
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
};

const detailText = {
  margin: "0 0 10px 0",
};

const btn = {
  backgroundColor: "#00c3ff",
  borderRadius: "30px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "24px",
  textAlign: "center",
};
