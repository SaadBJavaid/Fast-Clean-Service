"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { packages as subscriptionPackages } from "../../../app/subscribe/data";
import { useTheme } from "../../../contexts/themeContext";
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

const colors = ["#5DFA48", "#005BAC", "#BA8B1D"];
const secondary = ["#38E274", "#005BAC", "#BA8B1D"];

const SubscriptionPackages = () => {
  const { theme } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  // console.log(form.calculatePricing);

  const packages =
    form.formData?.selectedPackageType === "Anywhere Autocare"
      ? options
      : subscriptionPackages;

  useEffect(() => {
    updateValidation(!!selectedPackage);
  }, [selectedPackage, updateValidation]);

  const handleClick = (type, pkg) => {
    if (pkg.id !== selectedPackage) {
      setSelectedPackage(pkg.id);
      form.updateFormData({ packageType: type, selectedPackage: pkg });
    }
  };

  return (
    <Box>
      <SubscriptionPkgsContainer>
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
            onClick={() => handleClick(pkg, pkg)}
            key={index}
          />
        ))}
      </SubscriptionPkgsContainer>
    </Box>
  );
};

export default SubscriptionPackages;

const SubscriptionPackagesCard = ({
  image,
  color,
  packageType,
  descriptionItems,
  onClick,
  selected = false,
}) => {
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

      <SubscriptionCardContent>
        {descriptionItems &&
          descriptionItems.map((option, index) => (
            <Box key={index} className="content__row">
              <SubscriptionContentLabel>
                {option.label}
              </SubscriptionContentLabel>
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
