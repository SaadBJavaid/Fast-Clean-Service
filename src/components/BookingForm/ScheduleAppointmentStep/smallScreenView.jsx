"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Modal,
    Badge,
} from "@mui/material";
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

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("UTC");

const TimeSlotModal = ({ isOpen, handleClose, selectedDate, timeSlots, handleTimeSlotClick }) => {
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <ModalContainer>
                <ModalHeading>
                    {selectedDate?.format("MMMM, DD")}
                    <span style={{ marginLeft: '1.2rem' }}>{selectedDate?.format("ddd").toUpperCase()}</span>
                </ModalHeading>

                <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: "0.5rem" }}>
                    {selectedDate && timeSlots[selectedDate.format("YYYY-MM-DD")] ? (
                        timeSlots[selectedDate.format("YYYY-MM-DD")].map((slot) => (
                            <TimeSlotBox
                                key={slot.id}
                                selected={slot.selected}
                                onClick={() => handleTimeSlotClick(slot)}
                            >
                                <TimeSlotLabel selected={slot.selected}>
                                    {slot.label}
                                </TimeSlotLabel>
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

                const groupedSlots = allEvents.reduce((acc, slot) => {
                    const date = dayjs(slot.id.split("-")[1]).format("YYYY-MM-DD");
                    if (!acc[date]) acc[date] = [];
                    acc[date].push(slot);
                    return acc;
                }, {});

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

    const renderDay = (day, selectedDate, pickersDayProps) => {
        const isAvailable = availableDates.some((availableDate) =>
            day.isSame(availableDate, "day")
        );

        return (
            <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={
                    isAvailable ? (
                        <span
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.success.main,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "12px",
                            }}
                        >
                            ✔️
                        </span>
                    ) : undefined
                }
            >
                <PickersDay
                    {...pickersDayProps}
                    selected={selectedDate?.isSame(day, "day")} // Only highlight selected date
                    sx={{
                        border: selectedDate?.isSame(day, "day") ? `1px solid ${theme.palette.primary.main}` : "none",
                    }}
                    disabled={!isAvailable}
                    onClick={isAvailable ? () => handleDateSelect(day) : undefined}
                />
            </Badge>
        );
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
                renderDay={renderDay}
                style={{ width: "100%", maxWidth: "32rem" }}
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
