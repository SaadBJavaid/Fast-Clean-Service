import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";

export const CardHeading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "JakartaSans",
  fontWeight: "900",
  letterSpacing: "0.1em",
  fontSize: "3rem !important",
  color: special ? theme.palette.primary.accent : theme.palette.primary.contrastText,
  margin: "2rem 0",
}));

export const CardLink = styled(Link)(({ theme, special }) => ({
  color: theme.palette.primary.accent,
  textDecoration: "underline",
}));

export const CardSpacer = styled(Box)(({ theme }) => ({
  margin: "0.8rem 0",
  // borderBottom: `1px solid ${theme.palette.primary.lightContrast}`,
}));

export const CardImage = styled(Image)(({ theme }) => ({
  backgroundColor: theme.palette.primary.accent,
  borderRadius: "50%",
}));

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, flex: 1, animation: "showContent 1s ease-in-out forwards" }}>
      <CardContent>
        <CardHeading sx={{ display: "flex", gap: 1 }} special>
          <CardImage src="/howitworkicons/location.gif" alt="Location" width={40} height={40} />
          CONTACTGEGEVENS
        </CardHeading>

        <Typography variant="h5" component="div">
          Bel nummer: <CardLink href={"tel:+31202440994"}>020 2440994</CardLink>
        </Typography>
        <Typography variant="h5" component="div">
          Whatsapp: <CardLink href={"https://wa.me/31202440994"}>020 – 244 099 4</CardLink>
        </Typography>
        <Typography variant="h5" component="div">
          E-mail: <CardLink href={"mailto:Info@fastcleanservice.nl"}>Info@fastcleanservice.nl</CardLink>
        </Typography>

        <CardSpacer></CardSpacer>

        <Typography variant="h5" component="div">
          {"("}Post adres{")"}: Omweg 38
        </Typography>

        <CardSpacer></CardSpacer>

        <Typography variant="h5" component="div">
          1566 HP Assendelft
        </Typography>
        <Typography variant="h5" component="div">
          KVK nummer: 70208085
        </Typography>
        <Typography variant="h5" component="div">
          BTW nummer: NL002346426B12
        </Typography>
      </CardContent>
    </Card>
  );
}
