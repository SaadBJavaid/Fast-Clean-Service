"use client";
import React, { createContext, useState } from "react";
import { useSession } from "next-auth/react";
import { packages } from "../app/subscribe/data";
import useSnackbar from "../hooks/useSnackbar";

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const { openSnackbar } = useSnackbar();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [color, setColor] = useState("#000000");

  console.log(session);
  console.log(price);

  const calculatePricing = () => {
    let price = 0;

    const pkg = formData.selectedPackage;

    if (!pkg) {
      return 0;
    }

    price += parseFloat(pkg.price.replace("€", "").trim());
    if (formData.selectedPackageType === "Subscription Plans") {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions.find(
            (a) => a.name === addon
          )?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
    } else {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice =
            pkg?.additionalOptions?.interior.find((a) => a.name === addon)
              ?.additionalCost ||
            pkg?.additionalOptions?.exterior.find((a) => a.name === addon)
              ?.additionalCost ||
            0;

          // if (!addonPrice) {
          //   console.log("Addon not found", pkg, addon);
          //   throw new Error("Addon not found");
          // }
          price += addonPrice;
        });
      }
      if (formData.selectedDetailingOptions?.length > 0) {
        Object.values(formData.selectedDetailingOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions.detailing.find(
            (a) => a.name === addon
          )?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          else if (addonPrice === "On Request") return price;

          price += addonPrice;
        });
      }
    }

    return price;
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));

    currentStep > 3 ? setPrice(calculatePricing()) : setPrice(0);
  };
  // console.log(session);

  const nextStep = (step = 1) => {
    if (currentStep === 10) {
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
          packageType: formData.packageType,
          packageName: formData.selectedPackage.name,
          appointmentTimestamp: formData.selectedTime,
          vehicleDetails: formData.vehicleDetails,
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

        const response = fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Stringify the data object
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log("Response:", res);
            if (res.success) {
              openSnackbar("Form submitted successfully!");
              setPrice(0);
              setFormData({});
              setCurrentStep(1);
            }
          })
          .catch((err) => {
            console.error("Error submitting form:", err);
          });
      } catch (err) {
        console.error("Error submitting form:", err);
        openSnackbar("Error submitting form");
      } finally {
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + step);

    if (currentStep > 3) {
      setPrice(calculatePricing());
      calculateFormColors();
    }
  };

  const calculateFormColors = () => {
    const colors = {
      Standard: "#0cac00",
      Interior: "#0cac00",
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
    if (
      currentStep === 6 &&
      formData?.selectedPackageType === "Subscription Plans"
    ) {
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
