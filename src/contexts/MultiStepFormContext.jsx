"use client"
import React, {createContext, useState} from "react";
import {packages} from "../app/subscribe/data";
import useSnackbar from "../hooks/useSnackbar";

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const { openSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(9);

  const calculatePricing = () => {
    //
    let pricing = 0;

    if (formData.selectedPackageType === "Anywhere Autocare") {
      const pkg = packages.find((pkg) => pkg.name === formData.selectedPackage);

      if (!pkg) {
        console.error("Pkg not found", formData);
        return;
      }
      console.log(formData);

      pricing += parseFloat(pkg.price.replace("€", "").trim());

      pkg.additionalOptions.forEach((opt) => {
        if (formData.selectedAdditionalOptions && formData.selectedAdditionalOptions.includes(opt.option)) {
          pricing += opt.additionalCost;
        }
      });
    } else if (formData.selectedPackageType === "Subscription Plans") {
    }

    return pricing;
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    setPrice(calculatePricing());
  };

  const nextStep = () => {
    console.log(currentStep);
    if (currentStep === 9) {
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
            addons: formData.selectedAdditionalOptions?.length ? formData.selectedAdditionalOptions : null,
            detailing: formData.selectedDetailingOptions?.length ? formData.selectedDetailingOptions : null,
          },
        };

        console.log("data", data);

        const response = fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Stringify the data object
        })
          .then((res) => res.json())
          .then((res) => {
            console.log("Response:", res);
            if (res.status === 201) {
              openSnackbar("Form submitted successfully!");
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

    setCurrentStep((prevStep) => prevStep + 1);
    calculatePricing();
  };

  const prevStep = () => {
    if (currentStep === 1) return;
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, currentStep, nextStep, prevStep, price, calculatePricing }}>
      {children}
    </FormContext.Provider>
  );
};
