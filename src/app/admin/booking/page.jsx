"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
  CardAvatar,
  CardInfo,
  InfoHeading,
  InfoSubHeading,
  ModalButton,
  ModalLabel,
  ModalValue,
  ProfileCard,
  SectionHeading,
} from "../../../components/mui/AdminPkgs";

// const bookingsData = [
//     {
//         firstName: "John",
//         surname: "Doe",
//         companyName: "JD Enterprises",
//         street: "123 Elm St",
//         zipCode: "10001",
//         city: "New York",
//         email: "johndoe@example.com",
//         phoneNumber: "123-456-7890",
//         vehicleMakeAndModel: "Tesla Model S",
//         vehicleType: "Sedan",
//         location: "New York",
//         serviceName: "Full Exterior Wash",
//         package: "Premium",
//         serviceAddons: ["Wax", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$100",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "ABC1234" },
//     },
//     {
//         firstName: "Jane",
//         surname: "Smith",
//         companyName: "Smith Co",
//         street: "456 Oak Ave",
//         zipCode: "90210",
//         city: "Beverly Hills",
//         email: "janesmith@example.com",
//         phoneNumber: "987-654-3210",
//         vehicleMakeAndModel: "BMW X5",
//         vehicleType: "SUV",
//         location: "Los Angeles",
//         serviceName: "Interior Detailing",
//         package: "Standard",
//         serviceAddons: ["Tire Shine", "Engine Clean"],
//         appointmentTimestamp: new Date(),
//         price: "$80",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "XYZ5678" },
//     },
//     {
//         firstName: "Michael",
//         surname: "Brown",
//         companyName: "CleanRide",
//         street: "789 Maple St",
//         zipCode: "30303",
//         city: "Atlanta",
//         email: "michael.brown@example.com",
//         phoneNumber: "404-555-1234",
//         vehicleMakeAndModel: "Ford Mustang",
//         vehicleType: "Coupe",
//         location: "Atlanta",
//         serviceName: "Polish & Wax",
//         package: "Deluxe",
//         serviceAddons: ["Polish", "Ceramic Coating"],
//         appointmentTimestamp: new Date(),
//         price: "$120",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "MNO3456" },
//     },
//     {
//         firstName: "Emily",
//         surname: "Johnson",
//         companyName: "WashMasters",
//         street: "135 Lake Dr",
//         zipCode: "60606",
//         city: "Chicago",
//         email: "emily.johnson@example.com",
//         phoneNumber: "312-555-6789",
//         vehicleMakeAndModel: "Mercedes-Benz C300",
//         vehicleType: "Sedan",
//         location: "Chicago",
//         serviceName: "Full Interior Cleaning",
//         package: "Premium",
//         serviceAddons: ["Leather Conditioning", "Carpet Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$150",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "ABC7890" },
//     },
//     {
//         firstName: "David",
//         surname: "Clark",
//         companyName: "Shiny Wheels",
//         street: "246 Park St",
//         zipCode: "94103",
//         city: "San Francisco",
//         email: "david.clark@example.com",
//         phoneNumber: "415-555-2468",
//         vehicleMakeAndModel: "Chevy Suburban",
//         vehicleType: "SUV",
//         location: "San Francisco",
//         serviceName: "Exterior Wash",
//         package: "Basic",
//         serviceAddons: ["Tire Shine", "Rim Polishing"],
//         appointmentTimestamp: new Date(),
//         price: "$60",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "XYZ3456" },
//     },
//     {
//         firstName: "Sarah",
//         surname: "Miller",
//         companyName: "AutoGlow",
//         street: "321 Sunset Blvd",
//         zipCode: "90028",
//         city: "Los Angeles",
//         email: "sarah.miller@example.com",
//         phoneNumber: "310-555-7890",
//         vehicleMakeAndModel: "Toyota Corolla",
//         vehicleType: "Sedan",
//         location: "Los Angeles",
//         serviceName: "Ceramic Coating",
//         package: "Deluxe",
//         serviceAddons: ["Glass Protection", "Engine Bay Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$180",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "JKL7890" },
//     },
//     {
//         firstName: "Linda",
//         surname: "Taylor",
//         companyName: "SparkleAuto",
//         street: "789 Willow Ave",
//         zipCode: "80202",
//         city: "Denver",
//         email: "linda.taylor@example.com",
//         phoneNumber: "303-555-5678",
//         vehicleMakeAndModel: "Honda Civic",
//         vehicleType: "Sedan",
//         location: "Denver",
//         serviceName: "Full Wash",
//         package: "Basic",
//         serviceAddons: ["Wax", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$70",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "FGH1234" },
//     },
//     {
//         firstName: "Chris",
//         surname: "White",
//         companyName: "DetailKing",
//         street: "369 Highland Dr",
//         zipCode: "02118",
//         city: "Boston",
//         email: "chris.white@example.com",
//         phoneNumber: "617-555-2345",
//         vehicleMakeAndModel: "Jeep Wrangler",
//         vehicleType: "SUV",
//         location: "Boston",
//         serviceName: "Exterior Detailing",
//         package: "Standard",
//         serviceAddons: ["Polish", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$90",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "KLM5678" },
//     },
//     {
//         firstName: "Rachel",
//         surname: "Walker",
//         companyName: "AutoLux",
//         street: "654 Palm St",
//         zipCode: "75201",
//         city: "Dallas",
//         email: "rachel.walker@example.com",
//         phoneNumber: "214-555-1234",
//         vehicleMakeAndModel: "Audi Q7",
//         vehicleType: "SUV",
//         location: "Dallas",
//         serviceName: "Interior Detailing",
//         package: "Premium",
//         serviceAddons: ["Leather Cleaning", "Glass Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$110",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "NOP3456" },
//     },
//     {
//         firstName: "Sophia",
//         surname: "Martinez",
//         companyName: "ShinyCarts",
//         street: "987 Silver Ave",
//         zipCode: "85001",
//         city: "Phoenix",
//         email: "sophia.martinez@example.com",
//         phoneNumber: "602-555-7890",
//         vehicleMakeAndModel: "Tesla Model 3",
//         vehicleType: "Sedan",
//         location: "Phoenix",
//         serviceName: "Full Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Rim Polishing", "Engine Detailing"],
//         appointmentTimestamp: new Date(),
//         price: "$150",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "PQR6789" },
//     },
//     // Continue for the remaining 10 entries in a similar format
//     {
//         firstName: "Matthew",
//         surname: "Lewis",
//         companyName: "CarShine Pro",
//         street: "123 Rapid St",
//         zipCode: "33101",
//         city: "Miami",
//         email: "matthew.lewis@example.com",
//         phoneNumber: "305-555-3456",
//         vehicleMakeAndModel: "Range Rover Evoque",
//         vehicleType: "SUV",
//         location: "Miami",
//         serviceName: "Ceramic Coating",
//         package: "Premium",
//         serviceAddons: ["Polish", "Glass Protection"],
//         appointmentTimestamp: new Date(),
//         price: "$170",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "STU9876" },
//     },
//     {
//         firstName: "Daniel",
//         surname: "Evans",
//         companyName: "RideShine",
//         street: "456 Cedar St",
//         zipCode: "75202",
//         city: "Dallas",
//         email: "daniel.evans@example.com",
//         phoneNumber: "214-555-2345",
//         vehicleMakeAndModel: "Ford F-150",
//         vehicleType: "Truck",
//         location: "Dallas",
//         serviceName: "Exterior Wash",
//         package: "Basic",
//         serviceAddons: ["Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$60",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "DEF5678" },
//     },
//     {
//         firstName: "Oliver",
//         surname: "Taylor",
//         companyName: "LuxAuto",
//         street: "789 Birch St",
//         zipCode: "20001",
//         city: "Washington",
//         email: "oliver.taylor@example.com",
//         phoneNumber: "202-555-7890",
//         vehicleMakeAndModel: "BMW 3 Series",
//         vehicleType: "Sedan",
//         location: "Washington D.C.",
//         serviceName: "Full Wash",
//         package: "Standard",
//         serviceAddons: ["Wax"],
//         appointmentTimestamp: new Date(),
//         price: "$80",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "GHI6789" },
//     },
//     {
//         firstName: "Sophia",
//         surname: "Brown",
//         companyName: "ShinyCar Pro",
//         street: "456 Oak Ridge",
//         zipCode: "60606",
//         city: "Chicago",
//         email: "sophia.brown@example.com",
//         phoneNumber: "312-555-9870",
//         vehicleMakeAndModel: "Honda CR-V",
//         vehicleType: "SUV",
//         location: "Chicago",
//         serviceName: "Interior Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Seat Cleaning", "Carpet Shampoo"],
//         appointmentTimestamp: new Date(),
//         price: "$110",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "JKL2345" },
//     },
//     {
//         firstName: "Lucas",
//         surname: "White",
//         companyName: "ShinyRide",
//         street: "987 Cypress Ave",
//         zipCode: "80202",
//         city: "Denver",
//         email: "lucas.white@example.com",
//         phoneNumber: "303-555-7890",
//         vehicleMakeAndModel: "Tesla Model X",
//         vehicleType: "SUV",
//         location: "Denver",
//         serviceName: "Polish & Wax",
//         package: "Deluxe",
//         serviceAddons: ["Glass Protection", "Rim Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$130",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "LMN5678" },
//     },
//     {
//         firstName: "Amelia",
//         surname: "Harris",
//         companyName: "LuxRide",
//         street: "135 Maple St",
//         zipCode: "94103",
//         city: "San Francisco",
//         email: "amelia.harris@example.com",
//         phoneNumber: "415-555-2345",
//         vehicleMakeAndModel: "Porsche Cayenne",
//         vehicleType: "SUV",
//         location: "San Francisco",
//         serviceName: "Ceramic Coating",
//         package: "Premium",
//         serviceAddons: ["Leather Conditioning", "Engine Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$200",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "OPQ7890" },
//     },
//     {
//         firstName: "Jackson",
//         surname: "Green",
//         companyName: "RideLuxury",
//         street: "456 Oak St",
//         zipCode: "85001",
//         city: "Phoenix",
//         email: "jackson.green@example.com",
//         phoneNumber: "602-555-1234",
//         vehicleMakeAndModel: "Mercedes-Benz GLE",
//         vehicleType: "SUV",
//         location: "Phoenix",
//         serviceName: "Full Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Glass Protection", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$180",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "QRS7890" },
//     },
// ];

const BookingsPage = ({ bookingsData }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // const [bookingsData, setBookingsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBookings = bookingsData?.filter((booking) => {
    return (
      booking.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  console.log(selectedBooking);

  return (
    <Box sx={{ padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionHeading>Bookings</SectionHeading>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#333" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              marginRight: "16px",
              width: "250px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888",
                },
                "&:hover fieldset": {
                  borderColor: "#555",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#333",
                },
              },
              "& input": {
                color: "#333",
              },
            }}
          />
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: "20px", marginTop: "20px" }} />

      {/* Bookings Grid */}
      <Grid container spacing={3}>
        {filteredBookings.map((booking, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <ProfileCard
              onClick={() => handleOpenModal(booking)}
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardAvatar>
                {booking.firstName[0] + booking.surname[0]}
              </CardAvatar>
              <CardInfo>
                <InfoHeading>{`${booking.firstName} ${booking.surname}`}</InfoHeading>
                <InfoSubHeading>{booking.phoneNumber}</InfoSubHeading>
                <InfoSubHeading>{booking.serviceName}</InfoSubHeading>
              </CardInfo>
            </ProfileCard>
          </Grid>
        ))}
      </Grid>

      {selectedBooking && (
        <Dialog
          open={!!selectedBooking}
          onClose={handleCloseModal}
          PaperProps={{ style: { maxWidth: "none", minWidth: "600px" } }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.6rem",
            }}
          >
            {`${selectedBooking.firstName} ${selectedBooking.surname}`}
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {/* Outer Bordered Card for Glassmorph effect */}
            <Card
              sx={{
                padding: "20px",
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                display: "flex",
                gap: "3rem",
              }}
            >
              {/* Personal Details Card */}
              <Box sx={{ width: "calc(50% - 2rem)", height: "auto" }}>
                <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>
                  Personal details
                </Typography>
                <Card
                  sx={{
                    padding: "2rem",
                    marginBottom: "16px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    // height: "100%",
                  }}
                >
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>
                    Phone Number
                  </ModalLabel>
                  <ModalValue>{selectedBooking.phoneNumber}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Email</ModalLabel>
                  <ModalValue>{selectedBooking.email}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Company</ModalLabel>
                  <ModalValue>{selectedBooking.companyName}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Address</ModalLabel>
                  <ModalValue>{`${selectedBooking.street}, ${selectedBooking.city}, ${selectedBooking.zipCode}`}</ModalValue>
                </Card>
              </Box>

              {/* Vehicle and Work Details Card */}
              <Box sx={{ width: "calc(50% - 2rem)", height: "100%" }}>
                <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>
                  Vehicle details
                </Typography>
                <Card
                  sx={{
                    padding: "2rem",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                  }}
                >
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Vehicle</ModalLabel>
                  <ModalValue>{selectedBooking.vehicleMakeAndModel}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>
                    License Plate
                  </ModalLabel>
                  <ModalValue>
                    {selectedBooking.vehicleDetails.kenteken}
                  </ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Service</ModalLabel>
                  <ModalValue>{selectedBooking.serviceName}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Add-ons</ModalLabel>
                  <ModalValue>
                    {selectedBooking.serviceAddons.addons &&
                      selectedBooking.serviceAddons?.addons?.join(", ")}

                    {selectedBooking.serviceAddons.detailing &&
                      `, ${selectedBooking.serviceAddons?.detailing?.join(
                        ", "
                      )}`}
                  </ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Price</ModalLabel>
                  <ModalValue>{selectedBooking.price}</ModalValue>

                  <ModalLabel sx={{ fontSize: "1.4rem" }}>
                    Payment Status
                  </ModalLabel>
                  <ModalValue>{selectedBooking.paymentStatus}</ModalValue>
                </Card>
              </Box>
            </Card>

            {/* Complete Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <ModalButton onClick={() => alert("Service Completed!")}>
                Complete
              </ModalButton>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default BookingsPage;
