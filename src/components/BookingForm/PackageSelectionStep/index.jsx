import React from "react";
import PackageSelection from "./PackageSelection";
import { Box } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading,
} from "../../mui/BookingFormPackages";

const Index = () => {
    return (
        <Box>
            <BookingFormHeading
                sx={{
                    marginBottom: "1rem",
                }}

            >
                Service Type
            </BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                Choose a service type
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
