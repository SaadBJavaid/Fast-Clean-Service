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
  ModalButton,
  ModalContentBox,
  ModalLabel,
  ModalValue,
  SectionHeading,
} from "../mui/AdminPkgs";
import AddIcon from "@mui/icons-material/Add";
import BookingProfileCard from "./BookingProfileCard";
import { EditBookingModal } from "./EditBookingModal";

const BookingsPage = ({ bookingsData }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newBookign, setNewBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const handleCloseNewBookingModal = () => {
    setNewBooking(null);
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
          <BookingPageTextField handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <IconButton onClick={() => setNewBooking(true)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: "20px", marginTop: "20px" }} />

      {/* Bookings Grid */}
      <Grid container spacing={0}>
        {filteredBookings.map((booking, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <BookingProfileCard key={index} booking={booking} handleOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>

      <BookingInfoModal open={!!selectedBooking} handleCloseModal={handleCloseModal} selectedBooking={selectedBooking} />
      <NewBookingFormModal open={!!newBookign} handleCloseModal={handleCloseNewBookingModal} />
    </Box>
  );
};

export default BookingsPage;

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
const BookingInfoModal = ({ open, handleCloseModal, selectedBooking }) => {
  const [rescheduleOpen, setResceduleOpen] = useState(false);
  const [editBooking, setEditBooking] = useState(null);

  const handleResceduleClose = () => {
    setResceduleOpen(null);
  };

  const handleResceduleOpen = () => {
    setResceduleOpen(true);
  };

  const handleDelete = () => {};

  const handleEditModal = () => {
    setEditBooking(true);
  };

  const handleCloseEditModal = () => {
    setEditBooking(null);
  };

  if (!open) return null;
  return (
    <>
      <EditBookingModal open={!!editBooking} handleCloseModal={handleCloseEditModal} selectedBooking={selectedBooking} />
      <RescheduleModal open={!!rescheduleOpen} handleCloseModal={handleResceduleClose} />
      <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.6rem",
          }}
        >
          Booking Details
          <Box>
            <IconButton onClick={handleEditModal}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleResceduleOpen}>
              <MoreTimeIcon />
            </IconButton>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <ModalLabel sx={{ fontSize: "1.4rem", marginBottom: "1.2rem" }}>
            Status: {selectedBooking.status === "COMPLETED" ? "Completed" : "Pending"}
          </ModalLabel>
          {/* Outer Bordered Card for Glassmorph effect */}
          <Box>
            {/* Personal Details Card */}
            <Box sx={{ width: "100%", height: "auto" }}>
              <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Personal details</Typography>
              <ModalContentBox>
                <ModalLabel sx={{ fontSize: "1.4rem" }}>Phone Number</ModalLabel>
                <ModalValue>{selectedBooking.phoneNumber}</ModalValue>
              </ModalContentBox>

              <ModalContentBox>
                <ModalLabel sx={{ fontSize: "1.4rem" }}>Email</ModalLabel>
                <ModalValue>{selectedBooking.email}</ModalValue>
              </ModalContentBox>

              <ModalContentBox>
                <ModalLabel sx={{ fontSize: "1.4rem" }}>Company</ModalLabel>
                <ModalValue>{selectedBooking.companyName}</ModalValue>
              </ModalContentBox>

              <ModalContentBox>
                <ModalLabel sx={{ fontSize: "1.4rem" }}>Address</ModalLabel>
                <ModalValue>{`${selectedBooking.street}, ${selectedBooking.city}, ${selectedBooking.zipCode}`}</ModalValue>
              </ModalContentBox>
            </Box>

            {/* Vehicle and Work Details Card */}
            <Box sx={{ width: "100%", height: "100%" }}>
              <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Vehicle details</Typography>
              <Box>
                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Vehicle</ModalLabel>
                  <ModalValue>{selectedBooking.vehicleMakeAndModel}</ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>License Plate</ModalLabel>
                  <ModalValue>{selectedBooking.vehicleDetails.kenteken}</ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Service</ModalLabel>
                  <ModalValue>{selectedBooking.serviceName}</ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Add-ons</ModalLabel>
                  <ModalValue>
                    {selectedBooking.serviceAddons.addons && selectedBooking.serviceAddons?.addons?.join(", ")}
                  </ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Detailing</ModalLabel>
                  <ModalValue>
                    {selectedBooking.serviceAddons.detailing && `, ${selectedBooking.serviceAddons?.detailing?.join(", ")}`}
                  </ModalValue>
                </ModalContentBox>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Package Details</Typography>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Price</ModalLabel>
                  <ModalValue>{selectedBooking.price}</ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Duration</ModalLabel>
                  <ModalValue>{selectedBooking.price}mins</ModalValue>
                </ModalContentBox>

                <ModalContentBox>
                  <ModalLabel sx={{ fontSize: "1.4rem" }}>Payment Status</ModalLabel>
                  <ModalValue>{selectedBooking.paymentStatus}</ModalValue>
                </ModalContentBox>
              </Box>
            </Box>
          </Box>

          {/* Complete Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <ModalButton onClick={() => alert("Service Completed!")}>Complete</ModalButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

const BookingPageTextField = ({ searchQuery, handleSearchChange }) => {
  return (
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
  );
};
// import BookingForm from "../../components/BookingForm";
import RescheduleModal from "./RescheduleModal";

const NewBookingFormModal = ({ handleCloseModal, open }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.6rem",
        }}
      >
        Make a new Booking
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* ! ERROR HERE */}
        {/* <BookingForm /> */}
      </DialogContent>
    </Dialog>
  );
};
