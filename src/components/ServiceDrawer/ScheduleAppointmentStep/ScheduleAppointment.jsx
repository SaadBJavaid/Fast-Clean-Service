import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";

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
      showSearchBar: true,
      showSwitchModeButtons: false,
      showDatePicker: true,
    },
  };

  const { theme } = useTheme();
  const form = useMultiStepForm();

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

  // Do something...
  const handleCellClick = (event, row, day) => {};

  const handleEventClick = (event, item) => {
    if (item.selected === true) {
      return;
    }

    form.updateFormData({ selectedTime: item.startHour });

    setEvents((prev) => {
      const prevSelected = prev.find((e) => e.selected === true);
      if (prevSelected) {
        console.log("prevSelected", prevSelected.id);
        prevSelected.selected = false;
        prevSelected.color = "#333";
        prevSelected.label = prevSelected.label.replace(" - SELECTED", "");
      }
      item.selected = true;
      item.color = theme.palette.primary.accent;
      item.label = `${item.label} - SELECTED`;

      const old = prev.filter((e) => e.id !== item.id);

      console.log(item.id);
      console.log([...old, item]);
      return [...old, item];
    });
  };

  const handleEventsChange = (item) => {};

  const handleAlertCloseButtonClicked = (item) => {};

  return (
    <Scheduler
      locale="en"
      events={events}
      legacyStyle={false}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}
      onEventsChange={handleEventsChange}
      onCellClick={handleCellClick}
      onTaskClick={handleEventClick}
      onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
    />
  );
};

export default ScheduleAppointment;
