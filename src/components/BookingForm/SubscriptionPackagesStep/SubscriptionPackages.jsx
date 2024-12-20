"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import Image from "next/image";
import bg from "../../../../public/voor1.jpg";
import {
  SubscriptionPkgsContainer,
  SubscriptionCardContainer,
  SubscriptionCardBanner,
  SubscriptionCardHeading,
  SubscriptionCardHeader,
  SubscriptionCardContent,
  SubscriptionContentLabel,
  SubscriptionContentValue,
} from "../../mui/BookingFormPackages";
import { options } from "../../../app/autocare/data";
import { useTheme } from "../../../contexts/themeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSubscriptionPackages } from "../../../hooks/useSubscriptionPackages";

const colors = ["#5DFA48", "#005BAC", "#BA8B1D"];

const SubscriptionPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const { theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const subscriptionTaglines = {
    "autocare-standard": "Ideal for regular maintenance of your vehicle.",
    "autocare-deluxe": "Thorough cleaning for a completely refreshed vehicle.",
    "autocare-premium": "Ultimate detailing for showroom shine.",
  };

  useEffect(() => {
    updateValidation(!!selectedPackage);
  }, [selectedPackage, updateValidation]);

  const handleClick = (type, pkg) => {
    setSelectedPackage(pkg.id);
    form.updateFormData({ packageType: type, selectedPackage: pkg });
  };

  const { packages: subscriptionPackages, loading, error, fetchPackages } = useSubscriptionPackages();

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  if(!subscriptionPackages) {
    return null;
  }

  const packages = form.formData?.selectedPackageType === "Anywhere Autocare" ? options : subscriptionPackages;

  return (
    <SubscriptionPkgsContainer isMobile={isMobile}>
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          slidesPerView="1.75"
          centeredSlides={true}
          spaceBetween={14}
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            350: {
              slidesPerView: 2.25,
            },
            390: {
              slidesPerView: 2.55,
            },
            420: {
              slidesPerView: 2.75,
            },
            470: {
              slidesPerView: 3,
            },
          }}
          style={{ height: "25rem" }}
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
              <SubscriptionPackagesCard
                image={bg}
                color={colors[index]}
                packageType={pkg.name}
                tagline={subscriptionTaglines[pkg.id]}
                descriptionItems={[
                  { label: "Price", value: pkg.price, highlighted: true },
                  { label: "Duration", value: pkg.duration, highlighted: false },
                ]}
                selected={form.formData.selectedPackage?.id === pkg.id}
                onClick={() => handleClick(pkg, pkg)}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        packages.map((pkg, index) => (
          <SubscriptionPackagesCard
            key={index}
            image={bg}
            color={colors[index]}
            packageType={pkg.name}
            tagline={subscriptionTaglines[pkg.id]}
            descriptionItems={[
              { label: "Price", value: pkg.price, highlighted: true },
              { label: "Duration", value: pkg.duration, highlighted: false },
            ]}
            selected={form.formData.selectedPackage?.id === pkg.id}
            onClick={() => handleClick(pkg, pkg)}
          />
        ))
      )}
    </SubscriptionPkgsContainer>
  );
};

export default SubscriptionPackages;

const SubscriptionPackagesCard = ({ image, color, packageType, tagline, descriptionItems, onClick, selected = false }) => {
  return (
      <SubscriptionCardContainer onClick={onClick} selected={selected}>
        <SubscriptionCardBanner color={color}>
          <SubscriptionCardHeading>{packageType}</SubscriptionCardHeading>
        </SubscriptionCardBanner>

        <SubscriptionCardHeader color={color}>
          <Box className="highlight" />
          <Image src={image} alt="Subscription Package" width={207} height={-1} />
          <Typography className="heading">{packageType}</Typography>
        </SubscriptionCardHeader>

        <Typography
            sx={{
              fontFamily: "Unbounded",
              color: "inherit",
              fontSize: "0.95rem",
              fontWeight: "400",
              marginTop: "1rem",
                padding: "0 2rem",
              textAlign: "center",
                marginBottom: "-1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.7rem",
                fontWeight: "300",
                lineHeight: "0.88rem",
              },
            }}
        >
          {tagline}
        </Typography>

        <SubscriptionCardContent>
          {descriptionItems &&
              descriptionItems.map((option, index) => (
                  <Box key={index} className="content__row">
                    <SubscriptionContentLabel>{option.label}</SubscriptionContentLabel>
                    <SubscriptionContentValue
                        highlight={option.highlighted}
                        color={color}
                    >
                      {option.value}
                    </SubscriptionContentValue>
                  </Box>
              ))}
        </SubscriptionCardContent>
      </SubscriptionCardContainer>
  );
};
