import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeading, CardImage, CardSubheading, CustomCard } from "../mui/CardPackages";
import { LockClock, PunchClock } from "@mui/icons-material";

export default function BasicCard() {
  return (
    <CustomCard>
      <CardContent>
        <CardHeading sx={{ display: "flex", gap: 1 }} special>
          <CardImage src="/howitworkicons/appointment.gif" alt="Location" width={40} height={40} style={{ padding: "5px" }} />
          WERKTIJDEN
        </CardHeading>

        <Typography variant="h5" component="div">
          Fast Clean Service is 7 dagen per week beschikbaar. Wij leveren de reinigingsservice voor uw vervoermiddel bij u aan
          huis, uw bedrijf of andere gewenste locatie!
        </Typography>
        <CardSubheading component="div">Maandag t/m zondag</CardSubheading>

        <Typography variant="h5" component="div">
          <span style={{ paddingRight: "10px" }}>
            <LockClock />
          </span>
          08.00 – 18.00 uur
        </Typography>
      </CardContent>
    </CustomCard>
  );
}
