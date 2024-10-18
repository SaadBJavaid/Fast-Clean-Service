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

            <BookingFormSubHeading>
                Please select a cleaning package<br/>
                Tailored solutions for spotless spaces!
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
                <PackageSelection />
            </Box>
        </Box>
    );
};

export default Index;
