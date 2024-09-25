import Image from "next/image";
import {Box, Typography} from "@mui/material";
import {HomeBlueBanner} from "../../components/mui/HomePkgs";
import {
    AboutContainer,
    AboutImgContainer,
    AboutItem,
    AboutItemDetail,
    AboutItemHeading,
    AboutItemSection,
} from "../../components/mui/AboutPkgs";

export default function Scooters() {
  return (
    <>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          MOTOR, SCOOTER, BROMMER, E-BIKE EN FIETS
        </Typography>
      </HomeBlueBanner>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AboutContainer sx={{ flexDirection: "column" }}>
          <AboutItemHeading>
            HET BEHOUD VAN UW VERVOERMIDDEL IS.. STOOMREINIGEN!
          </AboutItemHeading>
          <Box sx={{ display: "flex", gap: "4rem" }}>
            <AboutItem>
              <AboutItemSection>
                <AboutItemDetail>
                  Uw vervoermiddel komt in weer en wind buiten en heeft heel wat
                  te verduren. De draaiende onderdelen maar ook de motor en
                  kettingkast zijn kwetsbaarder dan die van een auto: Deze staan
                  bloot aan meer weersinvloeden.
                </AboutItemDetail>
                <AboutItemDetail>
                  Fast Clean Service is gespecialiseerd in stoomreinigen en
                  werkt met de nieuwste technieken op het gebied van
                  stoomreiniging behandelingen voor uw motor, scooter, brommer,
                  e-bike en fiets.
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>

            <AboutItem>
              <AboutItemSection>
                <AboutItemDetail>
                  Met stoomreinigen werkt u aan het behoud van uw vervoermiddel.
                  Het stoomreinigen is een zeer efficiënte, doeltreffende en
                  milieuvriendelijke reinigingsmethode om hardnekkig vuil tegen
                  te gaan: De stoomreiniger haalt een temperatuur van tot wel
                  180 °C en met deze techniek komen we bij de kleinste gaatjes
                  en plekken waar vuil zich heeft opgehoopt. Zelfs de
                  moeilijkste bereikbare plekken op en in uw vervoermiddel
                  kunnen zo schoongemaakt worden. Geen enkel plekje wordt dus
                  overgeslagen. Daardoor kunt u weer over een fantastisch
                  schoon, glanzend vervoermiddel beschikken!
                </AboutItemDetail>
                <AboutItemDetail>
                  Uw schone vervoermiddel is ons visitekaartje!
                </AboutItemDetail>
              </AboutItemSection>
            </AboutItem>
          </Box>
        </AboutContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10rem",
        }}
      >
        <AboutContainer>
          <AboutItem sx={{ flexBasis: "100%", flexDirection: "row" }}>
            <AboutImgContainer sx={{ flexBasis: "calc(20% - 2rem)" }}>
              <Image src="/scooter1.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer sx={{ flexBasis: "calc(20% - 2rem)" }}>
              <Image src="/scooter2.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer sx={{ flexBasis: "calc(20% - 2rem)" }}>
              <Image src="/scooter3.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer sx={{ flexBasis: "calc(20% - 2rem)" }}>
              <Image src="/scooter4.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            <AboutImgContainer sx={{ flexBasis: "calc(20% - 2rem)" }}>
              <Image src="/scooter5.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
          </AboutItem>
        </AboutContainer>
      </Box>
    </>
  );
}
