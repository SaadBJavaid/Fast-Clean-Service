import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  CardBody,
  CardHeading,
  ModalButton,
  ModalContentBox,
  ModalLabel,
  ModalValue,
  SectionHeading,
  StyledCard,
} from "../../../components/mui/AdminPkgs";
import { CustomFormDateField, CustomFormTextField } from "../../../components/mui/NewFormPkgs";
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ShopManagementPage = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <SectionHeading>Shop Management</SectionHeading>

      <Grid container spacing={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <NumberOfVehicles />
        </LocalizationProvider>
        <ShopOpen />
      </Grid>
    </Box>
  );
};

export default ShopManagementPage;

const NumberOfVehicles = () => {
  return (
    <Grid item xs={12} md={8}>
      <StyledCard>
        <CardBody>
          <CardHeading>Available Vehicles</CardHeading>

          <Box>
            <ModalContentBox>
              <ModalLabel sx={{ fontSize: "1.4rem" }}>Currently Available Vehicles</ModalLabel>
              <ModalValue>{5}</ModalValue>
            </ModalContentBox>

            <Box sx={{ marginTop: "3rem" }}>
              <CardHeading>Change Available Vehicles</CardHeading>
              <form>
                <CustomFormTextField
                  label="Number of Vehicles"
                  name="vehicles"
                  value={""}
                  onChange={() => {}}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                />
                <CustomFormDateField
                  label="Date (optional)"
                  name="date"
                  value={null}
                  defaultValue={dayjs()}
                  onChange={() => {}}
                  fullWidth
                  sx={{
                    marginTop: "1.3rem",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ModalButton sx={{}} onClick={() => alert("Saved!")}>
                    Save
                  </ModalButton>
                </Box>
              </form>
            </Box>
          </Box>
        </CardBody>
      </StyledCard>
    </Grid>
  );
};

const ShopOpen = () => {
  const [availableDates, setAvailableDates] = useState([]);

  return (
    <Grid item xs={12} md={4}>
      <StyledCard>
        <CardBody>
          <CardHeading>Shop Open</CardHeading>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast value={null} onChange={() => {}} style={{ width: "100%", maxWidth: "32rem" }} />
          </LocalizationProvider>
        </CardBody>
      </StyledCard>
    </Grid>
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
