import React from "react";
import { Body, Container, Head, Heading, Html, Preview, Section, Text, Button } from "@react-email/components";

const BookingConfirmationEmail = ({
  name = "John Doe",
  eventName = "Annual Tech Conference",
  date = "September 15, 2024",
  time = "10:00 AM - 5:00 PM",
  location = "Tech Center, 123 Main St, Cityville",
  ticketType = "VIP Pass",
}) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Your booking for {eventName} has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={{ ...heading, color: accentColor }}>Booking Confirmation</Heading>
          <Text style={paragraph}>Dear {name},</Text>
          <Text style={paragraph}>
            Thank you for your booking. We're excited to confirm your reservation for the following event:
          </Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              {eventName}
            </Heading>
            <Text style={detailText}>
              <strong>Date:</strong> {date}
            </Text>
            <Text style={detailText}>
              <strong>Time:</strong> {time}
            </Text>
            <Text style={detailText}>
              <strong>Location:</strong> {location}
            </Text>
            <Text style={detailText}>
              <strong>Ticket Type:</strong> {ticketType}
            </Text>
          </Section>
          <Text style={paragraph}>
            If you have any questions or need to make changes to your booking, please don't hesitate to contact us.
          </Text>
          <Button pX={20} pY={12} style={btn} href="https://example.com/booking-details">
            View Booking Details
          </Button>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
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
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "24px",
  textAlign: "center",
};
