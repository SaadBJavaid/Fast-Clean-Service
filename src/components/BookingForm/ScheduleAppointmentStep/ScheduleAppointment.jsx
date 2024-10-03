import React, { useCallback, useEffect, useState } from "react";
import Scheduler from "react-mui-scheduler";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { Box } from "@mui/material";
import useSnackbar from "../../../hooks/useSnackbar";
import { Loader } from "../../mui/Loader";
import { CalendarContainer, LoaderContainer } from "./ScheduleAppointment.style";

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
  const [loadCount, setLoadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { openSnackbar } = useSnackbar();

  const [events, setEvents] = useState([]);

  const loadTimeSlots = useCallback(async () => {
    if (loadCount >= 3) return;

    setIsLoading(true);
    try {
      console.log("fetching", loadCount);

      const res = await fetch(
        `/api/booking/timeslots/weekly?date=${new Date().toISOString()}&type=${form.formData.service}&offset=${loadCount}`
      );
      const data = await res.json();
      setEvents((prevEvents) => [...prevEvents, ...data.availableTimeSlots]);
      setLoadCount((prevCount) => prevCount + 1);
    } catch (err) {
      console.error("Error fetching time slots:", err);
      openSnackbar("Error fetching time slots");
    } finally {
      setIsLoading(false);
    }
  }, [loadCount, form.formData.service, openSnackbar]);

  // load first time
  useEffect(() => {
    loadTimeSlots();
  }, [loadTimeSlots]);

  // load three more times after that
  useEffect(() => {
    if (loadCount < 3 && !isLoading) {
      loadTimeSlots();
    }
  }, [loadCount, isLoading, loadTimeSlots]);

  const handleEventClick = (event, item) => {
    function parseTime(hourString) {
      const [time, modifier] = hourString.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      // Convert 12-hour format to 24-hour format
      if (modifier === "PM" && hours !== 12) {
        hours += 12;
      } else if (modifier === "AM" && hours === 12) {
        hours = 0;
      }

      return { hours, minutes };
    }

    // Do not allow reselection of the already selected time slot
    if (item.selected === true) return;

    const selectedTime = new Date(item.date);
    const { hours, minutes } = parseTime(item.startHour);
    selectedTime.setHours(hours, minutes);

    // Update selected time in form
    form.updateFormData({ selectedTime });

    // Update events state to show selected time slot
    setEvents((prev) => {
      const prevSelected = prev.find((e) => e.selected === true);
      if (prevSelected) {
        prevSelected.selected = false;
        prevSelected.color = "transparent";
        prevSelected.label = prevSelected.label.replace(" - SELECTED", "");
      }
      item.selected = true;
      item.color = "rgba(28, 121, 204, 0.2) !important";

      const old = prev.filter((e) => e.id !== item.id);
      return [...old, item];
    });

    updateValidation(true);
  };

  const handleEventsChange = () => {};

  const handleAlertCloseButtonClicked = () => {};

  if (events.length === 0)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  return (
    <CalendarContainer>
      <Scheduler
        locale="en"
        events={events}
        legacyStyle={false}
        options={state?.options}
        alertProps={state?.alertProps}
        toolbarProps={state?.toolbarProps}
        onEventsChange={handleEventsChange}
        onTaskClick={handleEventClick}
        onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
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
  );
};

export default ScheduleAppointment;
