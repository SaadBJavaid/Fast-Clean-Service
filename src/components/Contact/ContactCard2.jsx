import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardHeading, CardImage, CardSubheading, CustomCard} from "../mui/CardPackages";
import {LockClock} from "@mui/icons-material";

export default function BasicCard() {
    return (
        <CustomCard>
            <CardContent
                sx={{
                    padding: "1rem",
                    width: "80%",
                    '@media (max-width: 600px)': {
                        padding: "0.5rem",
                    },
                }}
            >
                <CardHeading
                    sx={{
                        display: "flex",
                        gap: 1,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                    }}
                    special
                >
                    <CardImage src="/howitworkicons/appointment.gif" alt="Location" width={40} height={40} style={{ padding: "5px" }} />
                    WERKTIJDEN
                </CardHeading>

                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
                >
                    Fast Clean Service is 7 dagen per week beschikbaar. Wij leveren de reinigingsservice voor uw vervoermiddel bij u aan
                    huis, uw bedrijf of andere gewenste locatie!
                </Typography>
                <CardSubheading
                    component="div"
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
                >
                    Maandag t/m zondag
                </CardSubheading>

                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
                >
          <span style={{ paddingRight: "10px" }}>
            <LockClock />
          </span>
                    08.00 – 18.00 uur
                </Typography>
            </CardContent>
        </CustomCard>
    );
}
