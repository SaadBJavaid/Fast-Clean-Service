"use client";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import {useValidation} from "../../contexts/ValidationContext";
import {useTheme} from "../../contexts/themeContext";
import {
    ButtonContainer,
    NextPrevButton,
    PricingContainer,
    PricingSpacer,
    PricingText,
    PricingTextContainer,
} from "../mui/BookingFormPackages";
import { useState } from "react";
import { Loader } from "../mui/Loader";

const BookingFormFooter = () => {
  const form = useMultiStepForm();
  const { theme } = useTheme();
  const { isValid, updateValidation } = useValidation(); // Context validation

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const step = form.currentStep;
  const price = form.price;

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  const fetchLicensePlateData = async (licensePlate) => {
    const response = await fetch(`/api/license-plate?licensePlate=${licensePlate}`);

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
    const plate = form.formData.licensePlate;

    setLoading(true);
    setError("");

    if (plate?.length === 0) {
      setError("Please enter your license plate number");
      setLoading(false);
      updateValidation(false);
      return false;
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
      form.updateFormData({ vehicleDetails: data });
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
    // Step 1 (License Plate Validation) logic
    if (step === 1) {
      const isValid = await validatePlate(); // Validate license plate
      if (!isValid) return; // Stop if validation fails
    }

    // For all steps, check context `isValid` before progressing
    // if (!isValid) return; // Disable progression if form is not valid

    form.nextStep(); // Move to the next step if validation passes
    scrollToTop(); // Scroll to top of the page
  };

  const handleBack = () => {
    form.prevStep();
  };

  return (
    <PricingContainer>
      <PricingSpacer />
      <PricingTextContainer>
        <PricingText>Price</PricingText>
        <PricingText>$ 0.00</PricingText>
      </PricingTextContainer>
      <ButtonContainer>
        <NextPrevButton dull onClick={handleBack}>
          Back
        </NextPrevButton>
        <NextPrevButton onClick={handleNext}>{loading ? <Loader /> : form.currentStep === 9 ? "Submit" : "Next"}</NextPrevButton>
      </ButtonContainer>
    </PricingContainer>
  );
};

export default BookingFormFooter;
