import { Box, Input } from "@mui/material";
import Image from "next/image";
import React from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {
  LisencePlateContainer,
  LisencePlateImg,
  LisencePlateInput,
} from "../../mui/BookingFormPackages";

const LiscencePlate = () => {
  const form = useMultiStepForm();

  return (
    <Box>
      <LisencePlateContainer>
        <Box className="border" />

        <LisencePlateImg>
          <Image width={120} height={-1} alt="logo" src="/eu_flag.jpg" />
        </LisencePlateImg>
        <LisencePlateInput>
          <Input
            sx={{}}
            placeholder="AA-1234"
            value={form.formData.licensePlate}
            onChange={(e) => {
              const upperCaseValue = e.target.value.toUpperCase();
              form.updateFormData({ licensePlate: upperCaseValue });
            }}
          />
        </LisencePlateInput>
      </LisencePlateContainer>
    </Box>
  );
};

export default LiscencePlate;
