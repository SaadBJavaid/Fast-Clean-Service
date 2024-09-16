import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";

const ScheduleAppointment = ({ onValidate }) => {
  const { theme } = useTheme();
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

  // Handle when an event is clicked (i.e., a time slot is selected)
  const handleEventClick = (event, item) => {
    if (item.selected === true) return; // Don't reselect the same slot

    // Update selected time in form
    form.updateFormData({ selectedTime: item.startHour });

    // Update events state to reflect the selected time slot
    setEvents((prevEvents) => {
      // Unselect previous selection if any
      const prevSelected = prevEvents.find((e) => e.selected === true);
      if (prevSelected) {
        prevSelected.selected = false;
        prevSelected.color = "#333";
        prevSelected.label = prevSelected.label.replace(" - SELECTED", "");
      }

      // Mark the new selection
      item.selected = true;
      item.color = theme.palette.primary.accent;
      item.label = `${item.label} - SELECTED`;

      // Return the updated events list
      return prevEvents.map((e) => (e.id === item.id ? item : e));
    });

    onValidate(true);
  };

  const handleEventsChange = () => {
    // Logic for any dynamic changes in events (if needed)
  };

  const handleAlertCloseButtonClicked = () => {
    // Close alert logic (if any)
  };

  return (
      <Scheduler
          locale="en"
          events={events}
          legacyStyle={false}
          options={{
            transitionMode: "fade", // Smooth transitions
            startWeekOn: "mon", // Start week on Monday
            defaultMode: "day", // Show day view
            minWidth: 540,
            maxWidth: 540,
            minHeight: 540,
            maxHeight: 540,
          }}
          toolbarProps={{
            showSearchBar: true, // Show search bar
            showSwitchModeButtons: false,
            showDatePicker: true, // Show date picker for navigation
          }}
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
