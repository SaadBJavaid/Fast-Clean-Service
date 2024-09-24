import {Box, Typography} from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {useValidation} from "../../../contexts/ValidationContext";

const AdditionalOptionsBox = ({ selected, name, price, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        padding: "0 1.2rem",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "6px",
        backgroundColor: selected ? "#78D53F" : "#ffffff",
        boxShadow: "0px 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      }}
    >
      <Typography
        variant="p"
        sx={{
          color: "#585858",
          fontWeight: "light",
          fontFamily: "Unbounded",
          fontSize: "1rem",
          padding: "0.6rem 0",
        }}
        >
        {name}
      </Typography>

      <Typography
        variant="p"
        sx={{
          color: "#585858",
          fontWeight: "bold",
          fontFamily: "Unbounded",
          fontSize: "1rem",
          padding: "0.6rem 0",
        }}
      >
        + €{price}
      </Typography>
    </Box>
  );
};

const AdditionalOptions = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;
  const { updateValidation } = useValidation();

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
    <Box
      sx={{
        border: "0.4px solid #38E274",
        borderRadius: "6px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        padding: "3.4rem 4.1rem",
        maxWidth: "700px",
        margin: "0 auto",
        display: "flex",
        gap: '1rem',
      }}
    >
      {form.formData.selectedPackageType === "Subscription Plans" ? (
        <Box
          sx={{
            maxWidth: "550px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#000000",
              fontWeight: "regular",
              fontFamily: "Unbounded",
              fontSize: "1.8rem",
              lineHeight: "2.4rem",
              marginBottom: "1.2rem",
            }}
          >
            {pkg.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              margin: "0 auto",
            }}
          >
            {pkg.additionalOptions?.length !== 0 ? (
              pkg.additionalOptions.map((option, index) => (
                <AdditionalOptionsBox
                  key={index}
                  name={option.option}
                  price={option.additionalCost}
                  selected={form.formData.selectedAdditionalOptions?.includes(option.option)}
                  onClick={() => handleClick(option.option)}
                />
              ))
            ) : (
              <Typography
                sx={{
                  color: "#525252",
                  fontWeight: "regular",
                  fontFamily: "Unbounded",
                  fontSize: "1.2rem",
                  lineHeight: "2.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                No Add ons
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <>
          {Object.keys(pkg.additionalOptions).map((option, index) => (
            <>
              {option !== "detailing" && (
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000000",
                      fontWeight: "regular",
                      fontFamily: "Unbounded",
                      fontSize: "1.8rem",
                      lineHeight: "2.4rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {option.toUpperCase()}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      margin: "0 auto",
                    }}
                  >
                    {pkg.additionalOptions[option]?.length !== 0 ? (
                      pkg.additionalOptions[option].map((option, index) => (
                        <AdditionalOptionsBox
                          key={index}
                          name={option.name}
                          price={option.additionalCost}
                          selected={form.formData.selectedAdditionalOptions?.includes(option.name)}
                          onClick={() => handleClick(option.name)}
                        />
                      ))
                    ) : (
                      <Typography
                        sx={{
                          color: "#525252",
                          fontWeight: "regular",
                          fontFamily: "Unbounded",
                          fontSize: "1.2rem",
                          lineHeight: "2.4rem",
                          marginBottom: "1.2rem",
                        }}
                      >
                        No Add ons
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
            </>
          ))}
        </>
      )}
    </Box>
  );
};

export default AdditionalOptions;
