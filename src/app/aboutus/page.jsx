import {HomeWrapper, SectionHeadingCentered, ServiceSubheading,} from "../../components/mui/HomePkgs";
import MeetTeam from "./MeetTeam";
import BackgroundSection from "./BackgroundSection";
import HowItWork from "../../components/Home/howitwork/HowItWork";
import FAQ from "../../components/FAQ/FAQ";
import { Box } from "@mui/material";
import Reviews from "../../components/Reviews/Reviews";

import FooterCTA from "../../components/FooterCTA/FooterCTA";

export default function AboutUs() {
  return (
    <>
      <HomeWrapper sx={{ marginTop: 20 }}>
        <SectionHeadingCentered variant="h2">
          Meet the team
        </SectionHeadingCentered>
        <MeetTeam />
      </HomeWrapper>

      <SectionHeadingCentered variant="h2">Our Services</SectionHeadingCentered>

      <ServiceSubheading variant="h3" sx={{ textAlign: "center" }}>
        Autos
      </ServiceSubheading>
      <BackgroundSection />
      <HowItWork />
      <FAQ />
        <Box sx={{marginTop: "4rem"}}>
            <Reviews />
        </Box>
      <FooterCTA />
    </>
  );
}
