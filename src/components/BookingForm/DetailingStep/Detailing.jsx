"use client";
import { Box, Typography } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import Image from "next/image";
import { calculateFilter } from "../../../lib/colorFilters";
import {
  AdditionalContent,
  AdditionalOption,
  AdditionalOptionText,
} from "../../mui/BookingFormPackages";
import { useTheme } from "../../../contexts/themeContext";

const DetailingBox = ({
  color,
  selected,
  name,
  price,
  available,
  options,
  onClick,
}) => {
  const {theme} = useTheme();
  return (
    <Box>
      <AdditionalOption
        onClick={onClick}
        sx={{
          backgroundColor: selected ? color : "#ffffff",
        }}
      >
        <AdditionalOptionText variant="p">{name}</AdditionalOptionText>

        <AdditionalOptionText variant="p">{available ? `+ €${price}` : price}</AdditionalOptionText>
      </AdditionalOption>
      {selected && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "0 1.2rem",
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "0 5.5rem",
              }}
            >
              <Image
                src={CheckMark}
                alt="Included Option"
                width={12}
                height={12}
                style={{
                  filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : calculateFilter(color),
                }}
              />
              <AdditionalOptionText variant="p">{option}</AdditionalOptionText>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

const Detailing = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;
  const { updateValidation } = useValidation();

  const handleClick = (optionName) => {
    const selectedOptions = form.formData.selectedDetailingOptions || [];
    const newSelectedOptions = selectedOptions.includes(optionName)
      ? selectedOptions.filter((option) => option !== optionName)
      : [...selectedOptions, optionName];

    form.updateFormData({
      selectedDetailingOptions: newSelectedOptions,
    });
    updateValidation(newSelectedOptions.length > 0);
  };

  return (
    <Box
      sx={{
        border: `0.4px solid ${form.color}`,
        borderRadius: "6px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        padding: "3.4rem 4.1rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      {/* <Box
        sx={
          {
            // maxWidth: "550px",
            // margin: "0 auto",
          }
        }
      > */}
      <AdditionalContent>
        {selectedPackage.additionalOptions?.detailing?.length === 0 && (
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
              fontWeight: "regular",
              fontFamily: "Unbounded",
              fontSize: "1.2rem",
              lineHeight: "2.4rem",
              marginBottom: "1.2rem",
            }}
          >
            No Detailing Add ons
          </Typography>
        )}

        {selectedPackage.additionalOptions?.detailing?.map((option, index) => (
          <DetailingBox
            key={index}
            color={form.color}
            name={option.name}
            price={option.additionalCost}
            available={option.available}
            options={option.options}
            selected={form.formData.selectedDetailingOptions?.includes(option.name)}
            onClick={() => handleClick(option.name)}
          />
        ))}
      </AdditionalContent>
      {/* </Box> */}
    </Box>
  );
};

export default Detailing;
