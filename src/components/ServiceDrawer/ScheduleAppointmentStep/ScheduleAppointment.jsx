import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from '../../../contexts/ValidationContext';

const ScheduleAppointment = () => {
  const state = {
    options: {
      transitionMode: "fade", // or fade
      startWeekOn: "mon", // or sun
      defaultMode: "day", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    toolbarProps: {
      showSearchBar: true, // Keep search bar enabled
      showSwitchModeButtons: false,
      showDatePicker: true,
    },
  };

  const { theme } = useTheme();
  const { updateValidation } = useValidation();
  const form = useMultiStepForm();

  // Predefined event time slots
  const oldEvents = [
    {
      id: "event-1",
      label: "4:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2024-09-13",
      createdAt: new Date(),
      createdBy: "",
    },
    {
      id: "event-2",
      label: "09:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2024-09-13",
      createdAt: new Date(),
      createdBy: "",
    },
    {
      id: "event-3",
      label: "4:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2024-09-14",
      createdAt: new Date(),
      createdBy: "",
    },
    {
      id: "event-4",
      label: "09:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2024-09-14",
      createdAt: new Date(),
      createdBy: "",
    },
    {
      id: "event-5",
      label: "4:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2024-09-12",
      createdAt: new Date(),
      createdBy: "",
    },
    {
      id: "event-6",
      label: "09:00 AM",
      groupLabel: "",
      user: "",
      color: "#333",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2024-09-12",
      createdAt: new Date(),
      createdBy: "",
    },
  ];

  const [events, setEvents] = useState([...oldEvents]);

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
      item.label = `${item.label} - SELECTED`;

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

  return (
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
  );
};

export default ScheduleAppointment;
