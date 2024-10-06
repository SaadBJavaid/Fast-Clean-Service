import React, {useEffect, useState} from "react";
import Scheduler from "react-mui-scheduler";
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {useValidation} from "../../../contexts/ValidationContext";
import {Box} from "@mui/material";
import useSnackbar from "../../../hooks/useSnackbar";
import {Loader} from "../../mui/Loader";

const ScheduleAppointment = () => {
  const state = {
    options: {
      transitionMode: "fade", // or fade
      startWeekOn: "mon", // or sun
      defaultMode: "week", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    toolbarProps: {
      showSearchBar: false, // Keep search bar enabled
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  };

  const { theme } = useTheme();
  const { updateValidation } = useValidation();
  const form = useMultiStepForm();

  const { openSnackbar } = useSnackbar();

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`/api/booking/timeslots/weekly?date=${new Date().toISOString()}`)
      .then(async (res) => {
        const data = await res.json();
        console.log(data, data);
        setEvents(data.availableTimeSlots);
      })
      .catch((err) => {
        openSnackbar("Error fetching time slots");
      });
  }, [openSnackbar]);

  const handleEventClick = (event, item) => {
    // Do not allow reselection of the already selected time slot
    if (item.selected === true) return;

    // Update selected time in form
    form.updateFormData({ selectedTime: item.startHour });

    // Update events state to show selected time slot
    setEvents((prev) => {
      const prevSelected = prev.find((e) => e.selected === true);
      if (prevSelected) {
        prevSelected.selected = false;
        prevSelected.color = "#333";
        prevSelected.label = prevSelected.label.replace(" - SELECTED", "");
      }
      item.selected = true;
      item.color = theme.palette.primary.accent;
      // item.label = `${item.label} - SELECTED`;

      const old = prev.filter((e) => e.id !== item.id);
      return [...old, item];
    });

    updateValidation(true);
  };

  const handleEventsChange = () => {
    // Logic for any changes in events
  };

  const handleAlertCloseButtonClicked = () => {
    // Close alert logic if applicable
  };

  if (events.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          color: "black",
        }}
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        "& .MuiTableCell-root .MuiPaper-root": {
          paddingTop: "8px !important",
          paddingBottom: "8px !important",
          borderRadius: "200px",
        },

        "& .MuiTableCell-root  .MuiPaper-root p": {
          fontSize: "1.4rem",
        },
      }}
    >
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
    </Box>
  );
};

export default ScheduleAppointment;
