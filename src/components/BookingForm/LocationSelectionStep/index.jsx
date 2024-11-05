import React from "react";
import LocationSelection from "./LocationSelection";
import { Box, Typography } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading,
} from "../../mui/BookingFormPackages";

const Index = () => {
    return (
        <Box>
            <BookingFormHeading>
                Location Selection
            </BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                Please select your cleaning location<br />
                Whether it’s on-site or at our branch, we’re ready to clean!
            </BookingFormSubHeading>

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
                <LocationSelection />
            </Box>
        </Box>
    );
};

export default Index;
