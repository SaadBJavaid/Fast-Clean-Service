"use client";
import {styled, Typography} from "@mui/material";
import {Box} from "@mui/system";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Image from "next/image";

import CarIcon from "../../../public/bookingFormIcons/Car.svg";
import UnionIcon from "../../../public/bookingFormIcons/Union.svg";
import WrenchIcon from "../../../public/bookingFormIcons/Wrench.svg";
import GroupIcon from "../../../public/bookingFormIcons/Group.svg";
import PlusIcon from "../../../public/bookingFormIcons/PlusCircle.svg";
import ListIcon from "../../../public/bookingFormIcons/LisDetails.svg";
import AppointmentIcon from "../../../public/bookingFormIcons/Union-1.svg";
import ClipBoardIcon from "../../../public/bookingFormIcons/ClipBoard.svg";
import CheckIcon from "../../../public/bookingFormIcons/Check.svg";
import CheckMark from "../../../public/bookingFormIcons/CheckMark.svg";

const items = [
  {
    label: "License Plate",
    icon: <Image src={CarIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Vehicle Type",
    icon: <Image src={UnionIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Service Type",
    icon: <Image src={WrenchIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Package",
    icon: <Image src={GroupIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Sub Package",
    icon: <Image src={UnionIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Add Ons",
    icon: <Image src={PlusIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: "Detailings",
    icon: <Image src={ListIcon} alt="Brief Icon" width={20} height={20} />,
  },

  { label: "Appointment", icon: <Image src={AppointmentIcon} alt="Brief Icon" width={20} height={20} /> },
  { label: "Summary", icon: <Image src={ClipBoardIcon} alt="Brief Icon" width={20} height={20} /> },
  { label: "Confirmation", icon: <Image src={CheckIcon} alt="Brief Icon" width={20} height={20} /> },
];

const StepBarContainer = styled(Box)(({ theme }) => ({
  maxWidth: "765px",
  margin: "0 auto",
  position: "relative",
  "@media (max-width: 600px)": {
    maxWidth: "283px",
  },
}));

const StepBarLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "2rem",
  left: "1.4rem",
  width: "calc(100% - 2.8rem)",
  height: "1px",
  backgroundColor: "gray",
}));

const StepsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
}));

const StepBar = () => {
  const { currentStep } = useMultiStepForm();

  return (
      <StepBarContainer>
        <StepBarLine />
        <StepsContainer>
          {items.map((item, index) => (
              <StepItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  selected={index + 1 < currentStep}
                  current={currentStep === index + 1}
              />
          ))}
        </StepsContainer>
      </StepBarContainer>
  );
};

export default StepBar;

const StepItemContainer = styled(Box)(({ theme, selected, current }) => ({
  borderRadius: "50%",
  width: "42px",
  height: "42px",
  position: "relative",
  backgroundColor: selected ? "#1C79CC" : "#E0E0E0",
  border: current ? "2px solid #1C79CC" : selected ? "none" : "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 600px)": {
    width: "27px",
    height: "27px",
  },
}));

const StepItemOuterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StepCheckImageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-5px",
  right: "-8px",
  zIndex: 10,
  "@media (max-width: 600px)": {
    top: "3px",
    right: "5px",
  },
}));

const StepImageContainer = styled(Box)(({ theme, selected = false }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: selected ? "brightness(0) invert(1)" : "",
  "@media (max-width: 600px)": {
    width: "8px",
    height: "8px",
    padding: "1rem",
  },
}));

const StepLabel = styled(Typography)(({ theme, current }) => ({
  marginTop: "10px",
  fontFamily: "Unbounded",
  fontSize: "8px",
  color: current ? "black" : "#A4A4A4",
  "@media (max-width: 600px)": {
    fontSize: current ? "0.7rem" : "0px",
    marginTop: "4px",
  },
}));

const StepItem = ({ icon, label, selected = false, current = false }) => {
  return (
      <StepItemOuterContainer>
        <StepItemContainer selected={selected} current={current}>
          {selected && (
              <StepCheckImageContainer sx={{}}>
                <Image src={CheckMark} alt="Check Mark" width={20} height={20} />
              </StepCheckImageContainer>
          )}
          <StepImageContainer selected={selected}>{icon}</StepImageContainer>
        </StepItemContainer>

        <StepLabel>{label}</StepLabel>
      </StepItemOuterContainer>
  );
};
