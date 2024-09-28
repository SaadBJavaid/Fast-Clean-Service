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
} from "../mui/AdminPkgs";


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
