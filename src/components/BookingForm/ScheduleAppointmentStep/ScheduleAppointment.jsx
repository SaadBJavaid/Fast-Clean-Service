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
  }, []);

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
        "& *": {
          fontFamily: "Unbounded !important",
        },

        "& .MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall":
          {
            fontSize: "11px",
            fontWeight: "regular",
            lineHeight: "120%",
            boxShadow: "none",
          },
        "& .MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
          borderBottom: "none",
          paddingTop: "0",
          paddingBottom: "0",
        },
        "& .MuiTableRow-root > th:first-child": {
          display: "none !important",
        },
        "& .MuiTableCell-root.MuiTableCell-head.MuiTableCell-stickyHeader.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
          borderLeft: "none !important",
          padding: "0 1rem !important",
          textAlign: "left",
          fontSize: "1rem",
          color: "#212121",
          lineHeight: "120%",
        },
        "& .MuiTableCell-root .MuiPaper-root": {
          backgroundColor: "transparent",
          borderRadius: "200px",
          border: "2px solid #A4A4A4",
          padding: "0.5rem 1rem",
        },
        "& .selected": {
          backgroundColor: "#1C79CC",
        },

        "& .MuiTableCell-root  .MuiPaper-root p": {
          fontSize: "0.7rem",
          lineHeight: "120%",
          color: "#525252",
          textAlign: "center",
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
