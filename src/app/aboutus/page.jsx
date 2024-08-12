import Footer from "../../components/Home/footer/Footer";
import { Typography, Box } from "@mui/material";
import {
  HomeBlueBanner,
  HomeBlueBtn,
  SectionHeading,
  SectionHeadingCentered,
  ServiceSubheading,
} from "../../components/mui/HomePkgs";
import {
  AboutContainer,
  AboutItem,
  AboutItemSection,
  AboutItemHeading,
  AboutItemDetail,
  AboutImgContainer,
  AboutUsWrappers,
} from "../../components/mui/AboutPkgs";
import { ServicesItemHeading } from "../../components/mui/ServicesPkgs";
import Autos from "../../components/Services/Auto";
import Campers from "../../components/Services/Camper";
import Scooters from "../../components/Services/Scooter";
import Image from "next/image";
import { HomeWrapper } from "../../components/mui/HomePkgs";
import MeetTeam from "./MeetTeam";
import BackgroundSection from "./BackgroundSection";
import HowItWork from "../../components/Home/howitwork/HowItWork";
import FAQ from "../../components/FAQ/FAQ";
import Testimonials from "./AboutTestimonial";
import { FormButton } from "../../components/mui/LoginRegisterPkgs";
import zIndex from "@mui/material/styles/zIndex";

import Reviews from "../../components/Reviews/Reviews";

import FooterCTA from "../../components/FooterCTA/FooterCTA";

export default function AboutUs() {
  return (
    <>
      <HomeWrapper sx={{ marginTop: 20 }}>
        <SectionHeadingCentered variant="h2">Meet the team</SectionHeadingCentered>
        <MeetTeam />
      </HomeWrapper>

      <SectionHeadingCentered variant="h2">Our Services</SectionHeadingCentered>

      <ServiceSubheading variant="h3" sx={{ textAlign: "center" }}>
        Autos
      </ServiceSubheading>
      <BackgroundSection />
      <HowItWork />
      <FAQ />

      <Reviews />
      <FooterCTA />
      {/* 
      <Testimonials />

      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <SectionHeadingCentered variant="h2" sx={{ width: "70%", margin: "0 auto" }}>
          READY TO LET DIRTY GO DOWN IN HISTORY
        </SectionHeadingCentered>
        <Typography
          variant="h2"
          sx={{ fontFamily: "JakartaSans", maxWidth: "500px", textAlign: "center", margin: "3rem auto", fontSize: "2rem" }}
        >
          Choose from one of our Car Detail Plans and always drive a clean car from now on!
        </Typography>

        <FormButton
          sx={{
            maxWidth: "500px",
            margin: "10rem auto",
            alignSelf: "center",
            display: "flex",
            fontSize: "3rem",
            fontFamily: "BDSansBold",
          }}
        >
          Apply Now
        </FormButton>

        <Box
          sx={{
            position: "absolute",
            overflow: "hidden",
            bottom: "0",
            background: "linear-gradient(to top, #00000090, transparent);",
            height: "200px",
            width: "100%",
            zIndex: -1,
          }}
        ></Box>
      </Box> */}
    </>
    // <AboutUsWrappers>
    //   <HomeBlueBanner>
    //     <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
    //       About Us
    //     </Typography>
    //   </HomeBlueBanner>
    //   <Box sx={{ display: "flex", justifyContent: "center" }}>
    //     <AboutContainer>
    //       <AboutItem>
    //         <AboutItemSection>
    //           <AboutItemHeading>
    //             CAR LATEN CLEASON IN LOCATION BY FAST CLEAN SERVICE
    //           </AboutItemHeading>
    //           <AboutItemDetail>
    //             Fast Clean Service is the mobile car polishing company that
    //             cleans your vehicle thoroughly at any location and time. We
    //             specialize in steam cleaning, the perfect method to reach even
    //             the most difficult places. Our vans are equipped with modern
    //             equipment to clean any type of vehicle efficiently and
    //             professionally.
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         <AboutItemSection>
    //           <AboutItemHeading>
    //             FOR EVERY TYPE VEHICLE A TOP RESULT{" "}
    //           </AboutItemHeading>
    //           <AboutItemDetail>
    //             Whether it concerns passenger cars, vans, buses, motorbikes,
    //             campers, caravans, trucks, boats or other types of vehicles, we
    //             get the interior and exterior in top condition. You can easily
    //             make an appointment via our agenda, so we can clean your vehicle
    //             wherever and whenever you want. This not only saves you time and
    //             energy, but also fuel costs because you do not have to drive to
    //             the car wash. professionally.
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         <AboutItemSection>
    //           <AboutItemHeading>
    //             GUARANTEED RESULT WITH FAST CLEAN SERVICE
    //           </AboutItemHeading>
    //           <AboutItemDetail>
    //             We treat your car with the necessary care and attention, as if
    //             it were our own car. That is why we deliver your vehicle spick
    //             and span to you, guaranteed with excellent results. Removing
    //             stubborn stains such as pet hair, nicotine flavor, fungus and
    //             vomit is also part of our expertise.
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         <Box
    //           sx={{
    //             alignSelf: "flex-start",
    //             display: "flex",
    //             flexDirection: "column",
    //             gap: "2rem",
    //           }}
    //         >
    //           <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
    //           <HomeBlueBtn>Contact Us</HomeBlueBtn>
    //         </Box>
    //       </AboutItem>

    //       <AboutItem>
    //         <AboutImgContainer>
    //           <Image
    //             src="/Fast-clean-service-besel-wagens.webp"
    //             alt="img"
    //             height={500}
    //             width={500}
    //           />
    //         </AboutImgContainer>
    //         <AboutImgContainer>
    //           <Image src="/g2.jpg" alt="img" height={500} width={500} />
    //         </AboutImgContainer>
    //       </AboutItem>
    //     </AboutContainer>
    //   </Box>

    //   <HomeBlueBanner>
    //     <Typography
    //       sx={{ fontSize: "4rem", fontWeight: "bold", textAlign: "center" }}
    //     >
    //       Our Services
    //     </Typography>
    //   </HomeBlueBanner>
    //   <Box sx={{ display: "flex", justifyContent: "center" }}>
    //     <AboutContainer>
    //       <AboutItem>
    //         <AboutItemHeading>
    //           REINIGING EXTERIEUR EN INTERIEUR
    //         </AboutItemHeading>
    //         <AboutItemSection>
    //           <ServicesItemHeading>Voertuigen algemeen</ServicesItemHeading>
    //           <AboutItemDetail>
    //             Laat uw voertuig door ons op professionele, efficiënte,
    //             doelgerichte en duurzame wijze wassen. Met behulp van onze
    //             stoomtechnieken komen we in uw voertuig ook op de plekken waar u
    //             zelf niet bij kunt komen Met gespecialiseerde apparatuur! Dat is
    //             waar wij voor staan. Uw schone voertuig is ons visitekaartje!
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         <AboutItemSection>
    //           {/* <ServicesItemHeading>OPTIES</ServicesItemHeading> */}
    //           <AboutItemDetail>
    //             Een gemiddelde wasbeurt bij de wasstraat kost ongeveer 220 liter
    //             drinkwater per auto. Met stomen verbruiken we gemiddeld per auto
    //             3 liter drinkwater. Dit is een zeer milieuvriendelijke oplossing
    //             om waterverspilling tegen te gaan. Het handmatig wassen met
    //             stoom zorgt er tevens voor dat geen enkele plek wordt
    //             overgeslagen. De stoomreiniger haalt een temperatuur van tot wel
    //             180 °C en is zeer efficiënt om bacteriën en hardnekkig vuil
    //             tegen te gaan.
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         <AboutItemSection>
    //           {/* <AboutItemHeading>
    //             GUARANTEED RESULT WITH FAST CLEAN SERVICE
    //           </AboutItemHeading> */}
    //           <AboutItemDetail>
    //             Chemicaliën komen er niet aan te pas en bacteriën worden
    //             verwijderd en daarmee ook vieze geuren. Zowel uw interieur als
    //             exterieur kan door ons geheel worden gereinigd. Het interieur
    //             hoeft niet te drogen en kan meteen in gebruik worden genomen.
    //           </AboutItemDetail>
    //         </AboutItemSection>
    //         {/* <Box
    //           sx={{
    //             alignSelf: "flex-start",
    //             display: "flex",
    //             flexDirection: "column",
    //             gap: "2rem",
    //           }}
    //         >
    //           <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
    //           <HomeBlueBtn>Contact Us</HomeBlueBtn>
    //         </Box> */}
    //       </AboutItem>

    //       <AboutItem>
    //         <AboutImgContainer>
    //           <Image src="/services.jpg" alt="img" height={500} width={500} />
    //         </AboutImgContainer>
    //         {/* <AboutImgContainer>
    //           <Image src="/g2.jpg" alt="img" height={500} width={500} />
    //         </AboutImgContainer> */}
    //       </AboutItem>
    //     </AboutContainer>
    //   </Box>
    //   <Autos />
    //   <Campers />
    //   <Scooters />

    //   <Footer />
    // </AboutUsWrappers>
  );
}
