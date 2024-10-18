"use client";
import { useState, useEffect } from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import { useValidation } from "../../contexts/ValidationContext";
import { useTheme } from "../../contexts/themeContext";
import {
  ButtonContainer,
  NextPrevButton,
  PricingContainer,
  PricingSpacer,
  PricingText,
  PricingTextContainer,
} from "../mui/BookingFormPackages";
import { Loader } from "../mui/Loader";

const BookingFormFooter = () => {
  const {
    currentStep,
    formData,
    price,
    updateFormData,
    nextStep,
    prevStep,
    calculatePricing,
  } = useMultiStepForm();
  const { theme } = useTheme();
  const { isValid, updateValidation } = useValidation();
  const [isBtnInvalid, setIsBtnInvalid] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const step = currentStep;

  useEffect(() => {

    if (!formData.carType && currentStep === 3) setIsBtnInvalid(true);
    else if (!formData.selectedPackageType && currentStep === 4)
      setIsBtnInvalid(true);
    else if (!formData.packageType && currentStep === 5) setIsBtnInvalid(true);
    else if (
        formData.selectedPackageType === "Anywhere Autocare" &&
        !formData?.selectedPackage?.packages &&
        currentStep === 6
    )
      setIsBtnInvalid(true);
    else if (!formData.selectedTime && currentStep === 9) setIsBtnInvalid(true);
    else setIsBtnInvalid(false);

    calculatePricing();
  }, [formData, currentStep, calculatePricing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const fetchLicensePlateData = async (licensePlate) => {
    const response = await fetch(
      `/api/license-plate?licensePlate=${licensePlate}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error(`No data found for ${licensePlate}`);
    }

    return data[0];
  };

  const validatePlate = async () => {
    const plate = formData.licensePlate;

    setLoading(true);
    setError("");

    if (!plate || plate.trim().length === 0) {
      setLoading(false);
      updateValidation(true);
      return true;
    }

    const dutchLicensePlateRegex =
      /^(([A-Z]{2}-?\d{2}-?\d{2})|([A-Z]{2}-?\d{2}-?[A-Z]{2})|(\d{2}-?[A-Z]{2}-?\d{2})|(\d{2}-?[A-Z]{3}-?\d{1})|(\d{1}-?[A-Z]{3}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{2})|([A-Z]{3}-?\d{2}-?[A-Z]{1})|(\d{1}-?[A-Z]{2}-?\d{3})|([A-Z]{2}-?\d{3}-?[A-Z]{1})|([A-Z]{1}-?\d{2}-?[A-Z]{3})|([A-Z]{3}-?\d{2}-?\d{1})|(\d{3}-?[A-Z]{2}-?\d{1})|([A-Z]{2}-?[A-Z]{2}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{1})|([BHK]{1}[SDJFM]{1}-?[A-Z]{2}-?\d{2}))$/;

    if (!dutchLicensePlateRegex.test(plate)) {
      setError("Invalid license plate format");
      setLoading(false);
      updateValidation(false);
      return false;
    }

    try {
      const data = await fetchLicensePlateData(plate);
      updateFormData({ vehicleDetails: data });
      updateValidation(true);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      console.error(err);
      updateValidation(false);
      setLoading(false);
      return false;
    }
  };

  const handleNext = async () => {
    if (step === 2) {
      if (formData.licensePlate && formData.licensePlate.trim().length > 0) {
        const isValid = await validatePlate();
        if (!isValid) return;
      }
    }
    if (
      currentStep === 5 &&
      formData?.selectedPackageType === "Subscription Plans"
    ) {
      nextStep(2);
      scrollToTop();
      return;
    }

    nextStep();
    scrollToTop();
  };
  // console.log(form);

  const handleBack = () => {
    prevStep();
  };

  console.log(isBtnInvalid);

  return (
    <PricingContainer>
      <PricingSpacer />
      <PricingTextContainer>
        <PricingText>Price</PricingText>
        <PricingText>$ {isNaN(price) ? 0.0 : price.toFixed(2)}</PricingText>
      </PricingTextContainer>
      <ButtonContainer>
        <NextPrevButton dull onClick={handleBack}>
          Back
        </NextPrevButton>
        <NextPrevButton onClick={handleNext} disabled={loading || isBtnInvalid}>
          {currentStep === 9 ? "Submit" : "Next"}
        </NextPrevButton>
      </ButtonContainer>
    </PricingContainer>
  );
};

export default BookingFormFooter;
