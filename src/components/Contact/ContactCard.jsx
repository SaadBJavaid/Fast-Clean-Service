import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardHeading, CardImage, CardLink, CardSpacer, CustomCard} from "../../components/mui/CardPackages";
import {LocationCityOutlined, Mail, Phone, WhatsApp} from "@mui/icons-material";

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
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '1.5rem' }
              }}
              special
          >
            <CardImage src="/howitworkicons/location.gif" alt="Location" width={40} height={40} />
            CONTACTGEGEVENS
          </CardHeading>

          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
          <span style={{ paddingRight: "10px" }}>
            <Phone />
          </span>
            Bel nummer: <CardLink href={"tel:+31202440994"}>020 2440994</CardLink>
          </Typography>
          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
          <span style={{ paddingRight: "10px" }}>
            <WhatsApp />
          </span>
            Whatsapp: <CardLink href={"https://wa.me/31202440994"}>020 – 244 099 4</CardLink>
          </Typography>
          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
          <span style={{ paddingRight: "10px" }}>
            <Mail/>
          </span>
            E-mail: <CardLink href={"mailto:Info@fastcleanservice.nl"}>Info@fastcleanservice.nl</CardLink>
          </Typography>

          <CardSpacer></CardSpacer>

          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
          <span style={{ paddingRight: "10px" }}>
            <LocationCityOutlined />
          </span>
            {"("}Post adres{")"}: Omweg 38
          </Typography>

          <CardSpacer></CardSpacer>

          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
            1566 HP Assendelft
          </Typography>
          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
            KVK nummer: 70208085
          </Typography>
          <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          >
            BTW nummer: NL002346426B12
          </Typography>
        </CardContent>
      </CustomCard>
  );
}
