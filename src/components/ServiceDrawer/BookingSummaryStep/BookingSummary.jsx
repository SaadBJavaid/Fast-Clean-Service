import { Box, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { BookingStepHeading } from "../BookingPckgs";

const BookingDetail = ({ label, value }) => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        padding: "0 3rem",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
          fontSize: "2rem",
        }}
      >
        {label}:
      </Typography>
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
          fontSize: "2rem",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const BookingSummary = () => {
  const form = useMultiStepForm();

  return (
    <Box>
      <BookingDetail label={"Vehicle Number"} value={form.formData.vehicleDetails?.kenteken} />
      <BookingDetail label={"Package Type"} value={form.formData.selectedPackageType} />
      <BookingDetail label={"Package Subtype"} value={form.formData.selectedPackage} />

      <Box>
        <BookingStepHeading>Additional Options</BookingStepHeading>

        {form.formData.selectedAdditionalOptions ? (
          form.formData.selectedAdditionalOptions?.map((addon, index) => {
            return <BookingDetail label={addon} key={index} value={""} />;
          })
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "2rem",
            }}
          >
            No additional options selected
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default BookingSummary;
