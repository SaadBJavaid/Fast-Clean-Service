import { Box, styled, Typography } from "@mui/material";
import { FormContainer } from "../../../components/mui/FleetPkgs";
import { CustomFormButton, CustomFormTextField, CustomSelect } from "../../../components/mui/FormPkgs";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { deepmerge } from "@mui/utils";

export const FormTwoColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  width: "100%",
}));

const BookingParticulars = () => {
  const form = useMultiStepForm();
  const { formData } = form;
  const { theme } = useTheme();

  const [bookingForm, setBookingForm] = useState({
    firstName: "",
    surname: "",
    companyName: "",
    street: "",
    zipCode: "",
    city: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBookingForm({
      ...bookingForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    form.updateFormData({ ...bookingForm });
    form.nextStep();
  };

  return (
    <Box>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
          <FormTwoColumn>
            <CustomFormTextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth />
            <CustomFormTextField label="Surname" name="surname" value={formData.surname} onChange={handleChange} fullWidth />
          </FormTwoColumn>
          <CustomFormTextField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
          <FormTwoColumn>
            <CustomFormTextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth />
            <CustomFormTextField label="Street" name="street" value={formData.street} onChange={handleChange} fullWidth />
          </FormTwoColumn>
          <CustomFormTextField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <FormTwoColumn>
            <CustomFormTextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
            />
            <CustomFormTextField label="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
          </FormTwoColumn>
        </ThemeProvider>
        <CustomFormButton type="submit" sx={{ width: "max-content", margin: "0 auto" }}>
          Submit
        </CustomFormButton>
      </FormContainer>
    </Box>
  );
};

export default BookingParticulars;
