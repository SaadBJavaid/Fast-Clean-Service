import { useContext } from "react";
import { FormContext } from "../contexts/MultiStepFormContext";

const useMultiStepForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

export default useMultiStepForm;
