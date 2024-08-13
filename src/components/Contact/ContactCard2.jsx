import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Link from "next/link";

export const CardHeading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "JakartaSans",
  fontWeight: "900",
  letterSpacing: "0.1em",
  fontSize: "3rem !important",
  color: special ? theme.palette.primary.accent : theme.palette.primary.contrastText,
  margin: "2rem 0",
}));

export const CardSubheading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "JakartaSans",
  fontWeight: "900",
  letterSpacing: "0.1em",
  fontSize: "1.5rem !important",
  color: special ? theme.palette.primary.accent : theme.palette.primary.contrastText,
  margin: "1rem 0",
}));

export const CardLink = styled(Link)(({ theme, special }) => ({
  color: theme.palette.primary.accent,
  textDecoration: "underline",
}));

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, flex: 1 }}>
      <CardContent>
        <CardHeading special>CONTACTGEGEVENS</CardHeading>

        <Typography variant="h5" component="div">
          Fast Clean Service is 7 dagen per week beschikbaar. Wij leveren de reinigingsservice voor uw vervoermiddel bij u aan
          huis, uw bedrijf of andere gewenste locatie!
        </Typography>
        <CardSubheading component="div">Maandag t/m zondag</CardSubheading>

        <Typography variant="h5" component="div">
          08.00 – 18.00 uur
        </Typography>
      </CardContent>
    </Card>
  );
}
