"use client";
import { styled, Typography } from "@mui/material";
import { Box, display, width } from "@mui/system";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Image from "next/image";

import BreifIcon from "../../../public/bookingFormIcons/Brief.svg";
import DetailsIcon from "../../../public/bookingFormIcons/Details.svg";
import PackageIcon from "../../../public/bookingFormIcons/Package.svg";
import AccountIcon from "../../../public/bookingFormIcons/Account.svg";
import PlusIcon from "../../../public/bookingFormIcons/Plus.svg";
import CalendarIcon from "../../../public/bookingFormIcons/Calendar.svg";

import CheckMark from "../../../public/bookingFormIcons/CheckMark.svg";

const items = [
  {
    label: "License Plate",
    icon: <Image src={BreifIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Vehicle Type",
    icon: <Image src={DetailsIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Service Type",
    icon: <Image src={PackageIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Package",
    icon: <Image src={AccountIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Adds On",
    icon: <Image src={PlusIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Detailings",
    icon: <Image src={CalendarIcon} alt="Brief Icon" width={20} height={20} />,
  },

  { label: "Appointment", icon: "" },
  { label: "Summary", icon: "" },
  { label: "Confirmation", icon: "" },
];

const StepBar = () => {
  const { currentStep } = useMultiStepForm();

  return (
    <Box
      sx={{
        width: "70%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        {items.map((item, index) => (
          <StepItem
            key={index}
            label={item.label}
            icon={item.icon}
            selected={index + 1 < currentStep}
            current={currentStep === index + 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StepBar;

const StepItemContainer = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  width: "42px",
  height: "42px",
}));

const StepItem = ({ icon, label, selected = false, current = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StepItemContainer
        sx={{
          position: "relative",
          backgroundColor: selected ? "#1C79CC" : "#E0E0E0",
          border: current ? "2px solid #1C79CC" : selected ? "none" : "1px solid black",
        }}
      >
        {selected && (
          <Box
            sx={{
              position: "absolute",
              top: "-5px",
              right: "-8px",
              zIndex: 10,
            }}
          >
            <Image src={CheckMark} alt="Check Mark" width={20} height={20} />
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
      </StepItemContainer>

      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "Unbounded",
          fontSize: "8px",
          color: current ? "black" : "#A4A4A4",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
