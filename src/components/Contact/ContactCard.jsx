import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeading, CardImage, CardLink, CustomCard, CardSpacer } from "../../components/mui/CardPackages";
import { LocationCityOutlined, Mail, Phone, WhatsApp } from "@mui/icons-material";

export default function BasicCard() {
  return (
    <CustomCard>
      <CardContent>
        <CardHeading sx={{ display: "flex", gap: 1 }} special>
          <CardImage src="/howitworkicons/location.gif" alt="Location" width={40} height={40} />
          CONTACTGEGEVENS
        </CardHeading>

        <Typography variant="h5" component="div">
          <span style={{ paddingRight: "10px" }}>
            <Phone />
          </span>
          Bel nummer: <CardLink href={"tel:+31202440994"}>020 2440994</CardLink>
        <Typography variant="h5" component="div">
        </Typography>
          <span style={{ paddingRight: "10px" }}>
            <WhatsApp />
          </span>
          Whatsapp: <CardLink href={"https://wa.me/31202440994"}>020 – 244 099 4</CardLink>
        </Typography>
        <Typography variant="h5" component="div">
          <span style={{ paddingRight: "10px" }}>
            <Mail/>
          </span>
          E-mail: <CardLink href={"mailto:Info@fastcleanservice.nl"}>Info@fastcleanservice.nl</CardLink>
        </Typography>

        <CardSpacer></CardSpacer>

        <Typography variant="h5" component="div">
          <span style={{ paddingRight: "10px" }}>
            <LocationCityOutlined />
          </span>
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
    </CustomCard>
  );
}
