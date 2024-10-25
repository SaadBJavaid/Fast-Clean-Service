"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal, Badge } from "@mui/material";
import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/en";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import useSnackbar from "../../../hooks/useSnackbar";
import { useValidation } from "../../../contexts/ValidationContext";
import { Loader } from "../../mui/Loader";
import { LoaderContainer, ModalContainer, ModalHeading, TimeSlotBox, TimeSlotLabel } from "./ScheduleAppointment.style";
import MailIcon from "@mui/icons-material/Mail";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("UTC");

const TimeSlotModal = ({ isOpen, handleClose, selectedDate, timeSlots, handleTimeSlotClick }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalContainer>
        <ModalHeading>
          {selectedDate?.format("MMMM, DD")}
          <span style={{ marginLeft: "1.2rem" }}>{selectedDate?.format("ddd").toUpperCase()}</span>
        </ModalHeading>

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
          }}
        >
          {selectedDate && timeSlots[selectedDate.format("YYYY-MM-DD")] ? (
            timeSlots[selectedDate.format("YYYY-MM-DD")].map((slot) => (
              <TimeSlotBox key={slot.id} selected={slot.selected} onClick={() => handleTimeSlotClick(slot)}>
                <TimeSlotLabel selected={slot.selected}>{slot.label}</TimeSlotLabel>
              </TimeSlotBox>
            ))
          ) : (
            <ModalHeading>No time slots available</ModalHeading>
          )}
        </Box>
      </ModalContainer>
    </Modal>
  );
};

function AvailableDay(props) {
  const { availableDates = [], day, outsideCurrentMonth, selected, ...other } = props;

  const isAvailable = !outsideCurrentMonth && availableDates.some((date) => date.isSame(day, "day"));

  return (
    <PickersDay
      {...other}
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      sx={{
        position: "relative",
        "&.MuiPickersDay-today": {
          border: "none",
        },
        ...(isAvailable && {
          "&::after": {
            content: '""',
            display: "block",
            alignItems: "center",
            width: "10%",
            height: "2px",
            backgroundColor: "#1C79CC",
            position: "absolute",
            bottom: 12,
            left: "45%",
            borderRadius: "2px",
          },
        }),
      }}
    />
  );
}

const SmallScreenView = () => {
  const theme = useTheme();
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const { openSnackbar } = useSnackbar();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState({});

  function parseTime(hourString) {
    const [time, modifier] = hourString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return { hours, minutes };
  }

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        setIsLoading(true);
        setEvents([]);
        setAvailableDates([]);
        setTimeSlots({});
        setLoadCount(0);

        let allEvents = [];
        for (let i = 0; i < 4; i++) {
          const res = await fetch(
            `/api/booking/timeslots/weekly?date=${new Date().toISOString()}&type=${form.formData.service}&offset=${i}`
          );
          const data = await res.json();
          if (data.success && Array.isArray(data.availableTimeSlots)) {
            allEvents = [...allEvents, ...data.availableTimeSlots];
          } else {
            console.error("Invalid response structure: ", data);
            openSnackbar("Invalid data received from server");
            break;
          }
        }

        setEvents(allEvents);

        // Group time slots by date
        const groupedSlots = allEvents.reduce((acc, slot) => {
          const date = dayjs(slot.id.split("-")[1]).format("YYYY-MM-DD");
          if (!acc[date]) acc[date] = [];
          acc[date].push(slot);
          return acc;
        }, {});

        // Create an array of available dates
        const dates = Object.keys(groupedSlots).map((date) => dayjs(date));
        setAvailableDates(dates);
        setTimeSlots(groupedSlots);
      } catch (err) {
        console.error("Error fetching time slots", err);
        openSnackbar("Error fetching time slots");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimeSlots();
  }, [form.formData.service]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleTimeSlotClick = (clickedSlot) => {
    const selectedTime = dayjs(clickedSlot.date);
    const { hours, minutes } = parseTime(clickedSlot.label);
    selectedTime.set("hour", hours).set("minute", minutes);

    form.updateFormData({ selectedTime: selectedTime.toDate() });

    setTimeSlots((prev) => {
      const updatedSlots = { ...prev };
      const dateKey = dayjs(clickedSlot.id.split("-")[1]).format("YYYY-MM-DD");
      if (updatedSlots[dateKey]) {
        updatedSlots[dateKey] = updatedSlots[dateKey].map((slot) => {
          if (slot.id === clickedSlot.id) {
            return { ...slot, selected: true };
          }
          return { ...slot, selected: false };
        });
      }
      return updatedSlots;
    });

    updateValidation(true);
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <DateCalendar
        disablePast
        value={selectedDate}
        onChange={handleDateSelect}
        style={{ width: "100%", maxWidth: "32rem" }}
        slots={{
          day: AvailableDay, // Use the custom day component
        }}
        slotProps={{
          day: {
            availableDates, // Pass the available dates to the day component
          },
        }}
      />

      <TimeSlotModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        timeSlots={timeSlots}
        handleTimeSlotClick={handleTimeSlotClick}
      />
    </Box>
  );
};

export default SmallScreenView;
