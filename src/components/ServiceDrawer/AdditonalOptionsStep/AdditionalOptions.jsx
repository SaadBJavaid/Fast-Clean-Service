import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontSizes, useTheme } from "../../../contexts/themeContext";
import { Box, Typography } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { packages } from "../../../app/subscribe/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdditionalOptionsBox = ({ selected, name, price, onClick }) => {
  const { theme } = useTheme();
  const color = "#00c3ff" || "#FFC107";

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        borderRadius: 2,
        backgroundColor: selected ? theme.palette.primary.accent : "white",
        boxShadow: "1px 2px 10px #00000060",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
              color: selected ? "white" : color,
              marginRight: "1rem",
              transform: "translateY(2px)",
            }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ textAlign: "left !important", color: selected ? "white" : theme.palette.primary.text1, fontWeight: "bold" }}
        >
          Additional Cost: + €{price.toFixed(1)}
        </Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{ textAlign: "left !important", color: selected ? "white" : theme.palette.primary.contrastText, fontWeight: "bold" }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const AdditionalOptions = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;

  console.log(selectedPackage);

  const additionalOptions = packages.find((pkg) => pkg.name === selectedPackage).additionalOptions;

  const handleClick = (optionName) => {
    console.log(optionName);
    if (!form.formData.selectedAdditionalOptions) {
      form.updateFormData({ selectedAdditionalOptions: [optionName] });
      return;
    }

    if (form.formData.selectedAdditionalOptions.includes(optionName)) {
      form.updateFormData({
        selectedAdditionalOptions: form.formData.selectedAdditionalOptions.filter((option) => option !== optionName),
      });
      return;
    }

    form.updateFormData({ selectedAdditionalOptions: [...form.formData.selectedAdditionalOptions, optionName] });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {additionalOptions.map((option, index) => (
        <AdditionalOptionsBox
          name={option.option}
          price={option.additionalCost}
          selected={form.formData.selectedAdditionalOptions?.includes(option.option)}
          key={index}
          onClick={() => handleClick(option.option)}
        />
      ))}
    </Box>
  );
};

export default AdditionalOptions;
