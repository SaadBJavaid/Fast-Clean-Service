import React from "react";
import LocationSelection from "./LocationSelection";
import { Box } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading, BookingFormTagline,
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
                Choose a location
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
