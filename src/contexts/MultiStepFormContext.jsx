"use client"
import React, { createContext, useContext, useState } from "react";
import { packages } from "../app/subscribe/data";

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(4);

  const calculatePricing = () => {
    //
    let pricing = 0;

    if (formData.selectedPackageType === "Anywhere Autocare") {
      const pkg = packages.find((pkg) => pkg.name === formData.selectedPackage);

      if (!pkg) {
        console.error("Pkg not found", formData);
        return  
      }
      console.log(formData)

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
    setCurrentStep((prevStep) => prevStep + 1);
    calculatePricing();
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, currentStep, nextStep, prevStep, price, calculatePricing }}>
      {children}
    </FormContext.Provider>
  );
};
