import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { AutoTabContainer } from "../../mui/AutoCarePkgs";
import { AutoTabPackage } from "../../../app/subscribe/page";
import { packages } from "../../../app/autocare/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { borderRadius, display, fontFamily, lineHeight, positions } from "@mui/system";
import Image from "next/image";
import bg from "../../../../public/voor1.jpg";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import { AutoCarePackageSubheading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const colors = ["#087300", "#005BAC", "#BA8B1D"];

const AutocarePackages = () => {
  const { theme } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(!!selectedPackage);
  }, [selectedPackage, updateValidation]);

  const handleClick = (pkg) => {
    if (pkg.id !== selectedPackage) {
      setSelectedPackage(pkg.id);
      form.updateFormData({ selectedPackage: pkg });
    }
  };

  return (
    <Box>
      {Object.keys(packages).map((key, index) => (
        <Box key={index}>
          <AutoCarePackageSubheading>{key.toLocaleUpperCase()}</AutoCarePackageSubheading>
          <Box
            sx={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              "@media (max-width: 600px)": {
                "& > div": {
                  flex: "1 1 100%",
                  maxWidth: "100%",
                },
              },
            }}
          >
            {packages[key].map((pkg, index) => (
              <AutocarePackagesCard
                image={bg}
                color={colors[index]}
                packageType={pkg.name}
                descriptionItems={pkg.packages}
                price={pkg.price}
                description={pkg.description}
                selected={form.formData.selectedPackage?.id === pkg.id}
                onClick={() => handleClick(pkg)}
                key={index}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AutocarePackages;

const AutocarePackagesCard = ({ description, price, packageType, descriptionItems, onClick, selected = false }) => {
  const formattedPrice = Number(price.replace("€", "").trim()).toFixed(2);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        padding: "24px 35px",
        width: "207px",
        borderRadius: "15px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        border: `1px solid ${selected ? "#1C79CC" : "#38E274"}`,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: "#000000",
          fontSize: "1.8rem",
          fontWeight: "regular",
        }}
      >
        {packageType}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: "#525252",
          fontSize: "0.9rem",
          fontWeight: "light",
        }}
      >
        {description}
      </Typography>
      <Box>
        <Typography
          sx={{
            fontFamily: "Unbounded",
            color: "#78D53F",
            fontSize: "2.6rem",
            lineHeight: "2.4rem",
            fontWeight: "semibold",
          }}
        >
          € {formattedPrice}
        </Typography>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          {descriptionItems &&
            descriptionItems.map((option, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "7px",
                  alignItems: "center",
                }}
              >
                <Image src={CheckMark} alt="Included Option" width={14} height={14} />
                <Typography
                  sx={{
                    fontFamily: "Unbounded",
                    fontSize: "0.7rem",
                    fontWeight: "light",
                    color: "#525252",
                    lineHeight: "1.5rem",
                  }}
                >
                  {option}
                </Typography>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
