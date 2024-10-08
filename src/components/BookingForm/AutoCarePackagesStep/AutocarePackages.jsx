"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { calculateFilter } from "../../../lib/colorFilters";
import { packages } from "../../../app/autocare/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import Image from "next/image";
import bg from "../../../../public/voor1.jpg";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import {
    AutoCareContainer,
    AutoCarePackageSubheading,
} from "../../mui/BookingFormPackages";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AutocarePackages = () => {
  const { theme } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const COLOR = form.color;

  const isMobile = useMediaQuery("(max-width:600px)");

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AutoCarePackageSubheading sx={{ color: COLOR }}>
        {form.formData?.packageType.name.toLocaleUpperCase()}
      </AutoCarePackageSubheading>
      {isMobile ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow]}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {packages[form.formData?.packageType.name.toLocaleLowerCase()].map((pkg, index) => (
            <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
              <AutocarePackagesCard
                image={bg}
                color={COLOR}
                packageType={pkg.name}
                descriptionItems={pkg.packages}
                price={pkg.price}
                description={pkg.description}
                selected={form.formData.selectedPackage?.id === pkg.id}
                onClick={() => handleClick(pkg)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <AutoCareContainer>
          {packages[form.formData?.packageType.name.toLocaleLowerCase()].map((pkg, index) => (
            <AutocarePackagesCard
              key={index}
              image={bg}
              color={COLOR}
              packageType={pkg.name}
              descriptionItems={pkg.packages}
              price={pkg.price}
              description={pkg.description}
              selected={form.formData.selectedPackage?.id === pkg.id}
              onClick={() => handleClick(pkg)}
            />
          ))}
        </AutoCareContainer>
      )}
    </Box>
  );
};

export default AutocarePackages;

const AutocarePackagesCard = ({ description, price, packageType, descriptionItems, onClick, selected = false, color }) => {
  const { theme } = useTheme();
  const formattedPrice = Number(price.replace("€", "").trim()).toFixed(2);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        padding: "24px 35px",
        width: "calc(33% - 2rem)",
        borderRadius: "15px",
        backgroundColor: "primary.main",
        boxShadow: "0px 4px 30.1px 0 rgba(0, 0, 0, 0.25)",
        border: `1px solid ${selected ? "#1C79CC" : color}`,
        "@media(max-width: 600px)": {
          width: "14.2rem",
          height: "24.1rem",
          boxShadow: "none !important",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "primary.main",
          borderRadius: "100%",
          top: "-5px",
          right: "-10px",
          display: selected ? "block" : "none",
        }}
      >
        <Image src={CheckMark} alt="Included Option" width={30} height={30} style={{ zIndex: 2000 }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
          fontSize: "2rem",
          fontWeight: "regular",
          "@media (max-width: 600px)": {
            fontSize: "1.4rem",
            fontWeight: "400",
          },
        }}
      >
        {packageType}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: "#525252",
          fontSize: "0.95rem",
          fontWeight: "light",
          "@media (max-width: 600px)": {
            fontSize: "0.7rem",
            fontWeight: "300",
            lineHeight: "0.88rem",
          },
        }}
      >
        {description}
      </Typography>
      <Box>
        <Typography
          sx={{
            marginTop: "2rem",
            fontFamily: "Unbounded",
            color: color,
            fontSize: "2.6rem",
            lineHeight: "2.4rem",
            fontWeight: "semibold",
            textWrap: "nowrap",
            "@media (max-width: 600px)": {
              fontSize: "1.6rem",
              fontWeight: "600",
              lineHeight: "2.4rem",
              marginTop: 0,
            },
          }}
        >
          € {formattedPrice}
        </Typography>

        <Box
          sx={{
            marginTop: "2rem",
            "@media (max-width: 600px)": {
              marginTop: "0.5rem",
            },
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
                  "@media (max-width: 600px)": {
                    alignItems: "left",
                  },
                }}
              >
                <Image
                  src={CheckMark}
                  alt="Included Option"
                  width={14}
                  height={14}
                  style={{
                    filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : calculateFilter(color),
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Unbounded",
                    fontSize: "0.7rem",
                    fontWeight: "light",
                    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
                    lineHeight: "1.5rem",
                    "@media (max-width: 600px)": {
                      fontSize: "0.6rem",
                      fontWeight: "300",
                      lineHeight: "1.5rem",
                    },
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
