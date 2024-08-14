import Image from "next/image";
import { Typography } from "@mui/material";
import { HomeBlueBanner } from "../../components/mui/HomePkgs";
import {
  AboutContainer,
  AboutItem,
  AboutItemSection,
  AboutItemHeading,
  AboutItemDetail,
  AboutImgContainer,
} from "../../components/mui/AboutPkgs";
import { ServicesItemHeading } from "../../components/mui/ServicesPkgs";
import { Box } from "@mui/material";

export default function Campers() {
  return (
    <>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Camper, Caravan, Boat or Truck
        </Typography>
      </HomeBlueBanner>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              <ServicesItemHeading>BEHANDELING/WERKWIJZE</ServicesItemHeading>
              <AboutItemDetail>
                Fast Clean Service doet ook aan caravan, camper, boot en
                vrachtwagenreiniging. Het interieur reinigen van een camper,
                caravan, boot en vrachtwagen is voor ons geen probleem.
              </AboutItemDetail>
              <AboutItemDetail>
                Door het gebruik van stoom kunnen wij ook bijvoorbeeld de keuken
                van uw caravan of camper met stoom reinigen en hetzelfde geldt
                voor het toilet. De stoomreiniger haalt een temperatuur van tot
                wel 180 °C en is zeer efficiënt om bacteriën en hardnekkig vuil
                tegen te gaan. Chemicaliën komen er niet aan te pas en bacteriën
                worden verwijderd en daarmee ook vieze geuren. Afhankelijk van
                uw wensen reinigen wij uw gehele voertuig.
              </AboutItemDetail>
              <AboutItemDetail>
                U kunt voor een vrijblijvende offerte contact met ons opnemen.
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>

          <AboutItem>
            <AboutItemSection>
              <AboutItemDetail>
                Afhankelijk van uw wensen reinigen wij uw gehele voertuig:
              </AboutItemDetail>
              <AboutItemDetail>
                Stoomreiniging is een zeer efficiënte milieubewuste manier voor
                het reinigen van uw caravan, boot of vrachtwagen. Het resultaat
                is dan ook verbluffend. Uw caravan, boot of vrachtwagen is nog
                nooit zo schoon geweest!!
              </AboutItemDetail>
            </AboutItemSection>
          </AboutItem>
        </AboutContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer sx={{ flexDirection: "row-reverse" }}>
          <AboutItem>
            <AboutImgContainer>
              <Image src="/camper1.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer>
              <Image src="/camper2.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/camper3.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer>
              <Image src="/camper4.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
          </AboutItem>
        </AboutContainer>
      </Box>
    </>
  );
}
