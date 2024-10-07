"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Modal,
    Typography,
    Button,
    CircularProgress,
    Badge,
} from "@mui/material";
import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import useSnackbar from "../../../hooks/useSnackbar";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("UTC");

const SmallScreenView = () => {
    const theme = useTheme();
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const { openSnackbar } = useSnackbar();

    const [availableDates, setAvailableDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlots, setTimeSlots] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoadingDates, setIsLoadingDates] = useState(true);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);

    // Fetch available dates when the component mounts
    useEffect(() => {
        setIsLoadingDates(true);
        fetch(`/api/booking/available-dates?type=${form.formData.service}`)
            .then(async (res) => {
                const data = await res.json();
                // Convert dates to dayjs objects for comparison
                const dates = data.availableDates.map((date) => dayjs.utc(date));
                setAvailableDates(dates);
                setIsLoadingDates(false);
            })
            .catch((err) => {
                openSnackbar("Error fetching available dates");
                setIsLoadingDates(false);
            });
    }, [form.formData.service]);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
        fetchTimeSlots(date);
    };

    const fetchTimeSlots = (date) => {
        setIsLoadingSlots(true);
        fetch(
            `/api/booking/timeslots?date=${date.toISOString()}&type=${form.formData.service}`
        )
            .then(async (res) => {
                const data = await res.json();
                setTimeSlots(data.availableTimeSlots);
                setIsLoadingSlots(false);
            })
            .catch((err) => {
                openSnackbar("Error fetching time slots");
                setIsLoadingSlots(false);
            });
    };

    const handleTimeSlotClick = (slot) => {
        const selectedTime = new Date(slot.date);
        form.updateFormData({ selectedTime });
        updateValidation(true);
        setIsModalOpen(false);
    };

    // Custom renderer for days in the calendar
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
                        <div
                            style={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                            }}
                        ></div>
                    ) : undefined
                }
            >
                <PickersDay
                    {...pickersDayProps}
                    disabled={!isAvailable}
                    onDaySelect={(selectedDay) => {
                        if (isAvailable) {
                            handleDateSelect(selectedDay);
                        }
                    }}
                />
            </Badge>
        );
    };

    return (
        <Box sx={{ mt: 2 }}>
            {isLoadingDates ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <DateCalendar
                    disablePast
                    value={selectedDate}
                    onChange={(newDate) => {
                        setSelectedDate(newDate);
                        handleDateSelect(newDate);
                    }}
                    shouldDisableDate={(day) =>
                        !availableDates.some((availableDate) =>
                            day.isSame(availableDate, "day")
                        )
                    }
                    renderDay={renderDay}
                />
            )}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        maxHeight: "80vh",
                        overflowY: "auto",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Available Time Slots
                    </Typography>
                    {isLoadingSlots ? (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <CircularProgress />
                        </Box>
                    ) : timeSlots.length > 0 ? (
                        timeSlots.map((slot) => (
                            <Button
                                key={slot.id}
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 1 }}
                                onClick={() => handleTimeSlotClick(slot)}
                            >
                                {slot.startHour} - {slot.endHour}
                            </Button>
                        ))
                    ) : (
                        <Typography>No time slots available for this date.</Typography>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default SmallScreenView;
