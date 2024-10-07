// components/booking/ScheduleAppointment/index.js
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Scheduler from "react-mui-scheduler";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { Box, useMediaQuery } from "@mui/material";
import useSnackbar from "../../../hooks/useSnackbar";
import { Loader } from "../../mui/Loader";
import {
    CalendarContainer,
    LoaderContainer,
} from "./ScheduleAppointment.style";
import SmallScreenView from "./SmallScreenView";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ScheduleAppointment = () => {
    const state = {
        options: {
            transitionMode: "fade",
            startWeekOn: "mon",
            defaultMode: "week",
            minWidth: 540,
            maxWidth: 540,
            minHeight: 540,
            maxHeight: 540,
            startHour: 8,
        },
        toolbarProps: {
            showSearchBar: false,
            showSwitchModeButtons: true,
            showDatePicker: true,
        },
    };

    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const { openSnackbar } = useSnackbar();
    const isMobile = useMediaQuery("(max-width:600px)");

    const [loadCount, setLoadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (isMobile) return; // Skip loading events if on mobile

        setEvents([]);
        setIsLoading(true);

        fetch(
            `/api/booking/timeslots/weekly?date=${new Date().toISOString()}&type=${form.formData.service}&offset=${loadCount}`
        )
            .then(async (res) => {
                const data = await res.json();
                setEvents([...events, ...data.availableTimeSlots]);
                setLoadCount((prev) => prev + 1);
                setIsLoading(false);
            })
            .catch((err) => {
                openSnackbar("Error fetching time slots");
                setIsLoading(false);
            });
    }, [form.formData.service, isMobile]);

    // Load more times after initial load
    useEffect(() => {
        if (isMobile) return; // Skip if on mobile
        if (loadCount > 0 && loadCount < 4 && !isLoading) {
            setIsLoading(true);
            fetch(
                `/api/booking/timeslots/weekly?date=${new Date().toISOString()}&type=${form.formData.service}&offset=${loadCount}`
            )
                .then(async (res) => {
                    const data = await res.json();
                    setEvents([...events, ...data.availableTimeSlots]);
                    setLoadCount((prev) => prev + 1);
                    setIsLoading(false);
                })
                .catch((err) => {
                    openSnackbar("Error fetching time slots");
                    setIsLoading(false);
                });
        }
    }, [isLoading, loadCount, isMobile]);

    const handleEventClick = (event, item) => {
        // Existing code to handle event click
    };

    if (isMobile) {
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <SmallScreenView />
            </LocalizationProvider>
        );
    }

    if (events.length === 0)
        return (
            <LoaderContainer>
                <Loader />
            </LoaderContainer>
        );

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarContainer>
                <Scheduler
                    locale="en"
                    events={events}
                    legacyStyle={false}
                    options={state?.options}
                    alertProps={state?.alertProps}
                    toolbarProps={state?.toolbarProps}
                    onEventsChange={() => {}}
                    onTaskClick={handleEventClick}
                    onAlertCloseButtonClicked={() => {}}
                    sx={{
                        ".rmsc": {
                            padding: "16px",
                        },
                        ".rmsc-event": {
                            margin: "8px 0",
                        },
                        ".rmsc-header": {
                            paddingBottom: "16px",
                        },
                        ".rmsc-label": {
                            fontWeight: "bold",
                            fontSize: "14px",
                        },
                        ".rmsc-toolbar": {
                            justifyContent: "space-between",
                            paddingBottom: "8px",
                        },
                    }}
                />
            </CalendarContainer>
        </LocalizationProvider>
    );
};

export default ScheduleAppointment;
