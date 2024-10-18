import React from "react";
import PackageSelection from "./PackageSelection";
import { Box } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading, BookingFormTagline,
} from "../../mui/BookingFormPackages";

const Index = () => {
    return (
        <Box>
            <BookingFormHeading>
                Service Type
            </BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                Choose a service type
            </BookingFormSubHeading>

            <BookingFormTagline>
                Enter your license plate to kickstart your personalized service.
            </BookingFormTagline>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",

                    "@media (max-width: 600px)": {
                        marginTop: "4.1rem",
                    },
                }}
            >
                <BookingFormSubHeading
                    sx={{
                        display: { xs: "block", sm: "none" },
                    }}
                >
                    Choose a service type
                </BookingFormSubHeading>

                <PackageSelection />
            </Box>
        </Box>
    );
};

export default Index;
