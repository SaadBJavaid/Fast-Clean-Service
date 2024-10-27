"use client";
import React, { createContext, useState } from "react";
import { useSession } from "next-auth/react";
import useSnackbar from "../hooks/useSnackbar";

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const { openSnackbar } = useSnackbar();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({ service: "Remote" });
  const [price, setPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [color, setColor] = useState("#000000");

  console.log(formData);
  console.log(price);

  const calculatePricing = () => {
    let newPrice = 0;

    const pkg = formData.selectedPackage;
    const carType = formData.carType;

    if (!pkg || !pkg.vehicleOptions || !carType || !(carType in pkg.vehicleOptions)) {
      return 0;
    }

    newPrice += pkg.vehicleOptions[carType]?.additionalPrice || 0;

    newPrice += parseFloat(pkg.price.replace("€", "").trim());
    if (formData.selectedPackageType === "Subscription Plans") {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions.find((a) => a.name === addon)?.additionalCost;

          if (addonPrice !== undefined) {
            newPrice += addonPrice;
          }
        });
      }
    } else {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice =
              pkg.additionalOptions?.interior?.find((a) => a.name === addon)?.additionalCost ||
              pkg.additionalOptions?.exterior?.find((a) => a.name === addon)?.additionalCost ||
              0;

          newPrice += addonPrice;
        });
      }
      if (formData.selectedDetailingOptions?.length > 0) {
        Object.values(formData.selectedDetailingOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions?.detailing?.find((a) => a.name === addon)?.additionalCost;

          if (addonPrice === "On Request") {
            return price;
          }

          if (addonPrice !== undefined) {
            newPrice += addonPrice;
          }
        });
      }
    }

    // Multiply pricing by 20% for remote service
    if (formData.service && formData.service === "Remote") {
      newPrice *= 1.2;
    }

    // Add travel cost based on travelDistance
    if (formData.travelDistance) {
      const travelCost = formData.travelDistance * 0.5; // €0.5 per km
      newPrice += travelCost;
    }

    setPrice(newPrice);
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => {
      let updatedData = { ...prevData, ...newData };

      if (newData.selectedPackageType && newData.selectedPackageType !== prevData.selectedPackageType) {
        setPrice(0);
        updatedData.selectedPackage = null;
        updatedData.selectedAdditionalOptions = null;
        updatedData.selectedDetailingOptions = null;
        updatedData.packageType = null;
      }

      if (newData.packageType && newData.packageType !== prevData.packageType) {
        setPrice(0);
        updatedData.selectedPackage = null;
        updatedData.selectedTime = null;
        updatedData.selectedAdditionalOptions = [];
        updatedData.selectedDetailingOptions = [];
      }

      if (newData.selectedPackage && (!prevData.selectedPackage || newData.selectedPackage.id !== prevData.selectedPackage.id)) {
        setPrice(0);
        updatedData.selectedAdditionalOptions = [];
        updatedData.selectedDetailingOptions = [];
      }

      return updatedData;
    });

    // Recalculate pricing whenever formData is updated
    calculatePricing();
  };

  const nextStep = async (step = 1) => {
    if (currentStep === 12) {
      // Submit the form
      try {
        const data = {
          firstName: formData.firstName,
          surname: formData.surname,
          companyName: formData.companyName,
          street: formData.street,
          zipCode: formData.zipCode,
          city: formData.city,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          vehicleMakeAndModel: formData.makeModel,
          message: formData.message,
          serviceName: formData.selectedPackageType,
          packageType: formData.packageType.name,
          packageName: formData.selectedPackage.name,
          appointmentTimestamp: formData.selectedTime,
          vehicleDetails: formData.vehicleDetails,
          vehicleType: formData.vehicleType,
          travelDistance: formData.travelDistance,
          serviceAddons: {
            addons: formData.selectedAdditionalOptions?.length
                ? formData.selectedAdditionalOptions
                : null,
            detailing: formData.selectedDetailingOptions?.length
                ? formData.selectedDetailingOptions
                : null,
          },
        };

        console.log("data", data);

        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Stringify the data object
          credentials: "include",
        });

        const res = await response.json();
        console.log("Response:", res);
        if (res.success) {
          openSnackbar("Form submitted successfully!");
          setPrice(0);
          setFormData({});
          setCurrentStep(1);
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        openSnackbar("Error submitting form");
      } finally {
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + step);

    if (currentStep > 3) {
      calculateFormColors();
    }
  };

  const calculateFormColors = () => {
    const colors = {
      Standard: "#5dfa48",
      Interior: "#5dfa48",
      Deluxe: "#0088ff",
      Exterior: "#0088ff",
      Premium: "#ffd02b",
      Combi: "#ffd02b",
    };

    const pkg = formData?.packageType?.name;
    const _color = pkg ? colors[pkg] : null;
    if (!_color) return "#000000";
    setColor(_color);
  };

  const prevStep = () => {
    if (currentStep === 1) return;
    if (currentStep === 7 && formData?.selectedPackageType === "Subscription Plans") {
      setCurrentStep((prevStep) => prevStep - 2);
      return;
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
      <FormContext.Provider
          value={{
            formData,
            updateFormData,
            currentStep,
            nextStep,
            prevStep,
            price,
            calculatePricing,
            color,
          }}
      >
        {children}
      </FormContext.Provider>
  );
};
