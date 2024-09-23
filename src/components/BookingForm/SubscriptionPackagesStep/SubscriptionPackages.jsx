import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { AutoTabContainer } from "../../../components/mui/AutoCarePkgs";
import { AutoTabPackage } from "../../../app/subscribe/page";
import { packages } from "../../../app/subscribe/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { borderRadius, display, fontFamily, lineHeight, positions } from "@mui/system";
import Image from "next/image";
import bg from "../../../../public/voor1.jpg";

const colors = ["#087300", "#005BAC", "#BA8B1D"];

const SubscriptionPackages = () => {
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
      <Box
        sx={{
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
        {packages.map((pkg, index) => (
          <SubscriptionPackagesCard
            image={bg}
            color={colors[index]}
            packageType={pkg.name}
            descriptionItems={[
              { label: "Price", value: pkg.price, highlighted: true },
              { label: "Duration", value: pkg.duration, highlighted: false },
            ]}
            selected={form.formData.selectedPackage?.id === pkg.id}
            onClick={() => handleClick(pkg)}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SubscriptionPackages;

const SubscriptionPackagesCard = ({ image, color, packageType, descriptionItems, onClick, selected = false }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        width: "207px",
        height: "280px",
        borderRadius: "15px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        border: `1px solid ${selected ? "#1C79CC" : "#FAFAFA"}`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "1.6rem",
          left: "-3rem",
          padding: "0.2rem 3rem",
          backgroundColor: color,
          zIndex: 30,
          transform: "rotate(-45deg)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Unbounded",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: "light",
          }}
        >
          {packageType}
        </Typography>
      </Box>

      <Box sx={{ position: "relative", width: "100%", height: "166px", overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: color,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            opacity: "35%",
            zIndex: 10,
          }}
        ></Box>
        <Image
          src={image}
          alt="Subscription Package"
          width={207}
          height={-1}
          style={{
            objectFit: "cover",
            overflow: "hidden",
            borderRadius: "10px 10px 0 0",
            clipPath:
              "polygon 14.93% 7.27%, 14.93% 87.73 100% 87.73%, 100% 77.55%, 83.43% 75.14 80.02% 74.03 54.65% 65%, 29.85% 70%, 14.93% 87.73 14.93% 18.18 16.42% 14.55 19.40% 12.27 83.58% 12.27 86.57% 14.55 88.43% 18.18%)",
            boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: color,
            filter: "brightness(1.5)",
            borderRadius: "7px",
            padding: "1rem",
            zIndex: 20,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Unbounded",
              color: "#ffffff",
              fontSize: "1.4rem",
              fontWeight: "semibold",
            }}
          >
            {packageType}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
          padding: "0 1.6rem",
        }}
      >
        {descriptionItems &&
          descriptionItems.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "1.2rem",
                  fontWeight: "light",
                  color: "#000000",
                  lineHeight: "2.4rem",
                }}
              >
                {option.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "1.4rem",
                  fontWeight: option.highlighted ? "medium" : "light",
                  color: option.highlighted ? color : "#000000",
                  lineHeight: "2.4rem",
                }}
              >
                {option.value}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
