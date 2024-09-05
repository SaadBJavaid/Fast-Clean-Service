import React, { createContext, useContext, useState } from "react";

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, currentStep, nextStep, prevStep }}>{children}</FormContext.Provider>
  );
};
