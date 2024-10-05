"use client";
import { Box } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import {
  AdditionalContainer,
  AdditionalContent,
  AdditionalName,
  AdditionalNoOption,
  AdditionalOption,
  AdditionalOptionText,
} from "../../mui/BookingFormPackages";
import { useTheme } from "../../../contexts/themeContext";

const AdditionalOptionsBox = ({ color, selected, name, price, onClick }) => {
  console.log(selected);
  const { theme } = useTheme();

  return (
    <AdditionalOption
      onClick={onClick}
      sx={{
        backgroundColor: selected ? color : theme.palette.mode === "dark" ? "#000000" : "#ffffff",
      }}
    >
      <AdditionalOptionText>{name}</AdditionalOptionText>

      <AdditionalOptionText variant="p">+ €{price}</AdditionalOptionText>
    </AdditionalOption>
  );
};

const AdditionalOptions = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;
  const { updateValidation } = useValidation();
  console.log(form?.color);

  const pkg = form.formData.selectedPackage;

  const handleClick = (optionName) => {
    const selectedOptions = form.formData.selectedAdditionalOptions || [];
    const newSelectedOptions = selectedOptions.includes(optionName)
      ? selectedOptions.filter((option) => option !== optionName)
      : [...selectedOptions, optionName];

    form.updateFormData({
      selectedAdditionalOptions: newSelectedOptions,
    });
    updateValidation(newSelectedOptions.length > 0);
  };

  return (
    <AdditionalContainer sx={{ border: "0.4px solid ${form?.color}", }}>
      {form.formData.selectedPackageType === "Subscription Plans" ? (
        <Box
          sx={{
            maxWidth: "550px",
            margin: "0 auto",
          }}
        >
          <AdditionalName variant="h5">{pkg.name}</AdditionalName>
          <AdditionalContent>
            {pkg?.additionalOptions?.length !== 0 ? (
              pkg?.additionalOptions.map((option, index) => (
                <AdditionalOptionsBox
                  key={index}
                  color={form?.color}
                  name={option.option}
                  price={option.additionalCost}
                  selected={form.formData.selectedAdditionalOptions?.includes(option.option)}
                  onClick={() => handleClick(option.option)}
                />
              ))
            ) : (
              <AdditionalNoOption>No Add ons</AdditionalNoOption>
            )}
          </AdditionalContent>
        </Box>
      ) : (
        <>
          {pkg &&
            Object.keys(pkg?.additionalOptions)?.map((option, index) => (
              <>
                {option !== "detailing" && (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <AdditionalName variant="h5">{option.toUpperCase()}</AdditionalName>
                    <AdditionalContent>
                      {pkg.additionalOptions[option]?.length !== 0 ? (
                        pkg.additionalOptions[option].map((option, index) => (
                          <AdditionalOptionsBox
                            key={index}
                            name={option.name}
                            price={option.additionalCost}
                            color={form.color}
                            selected={form.formData.selectedAdditionalOptions?.includes(option.name)}
                            onClick={() => handleClick(option.name)}
                          />
                        ))
                      ) : (
                        <AdditionalNoOption>No Add ons</AdditionalNoOption>
                      )}
                    </AdditionalContent>
                  </Box>
                )}
              </>
            ))}
        </>
      )}
    </AdditionalContainer>
  );
};

export default AdditionalOptions;
