"use client";
import {HomeWrapper} from "../../components/mui/HomePkgs";
import MeetTeam from "./MeetTeam";
import BackgroundSection from "./BackgroundSection";
import HowItWork from "../../components/Home/howitwork/HowItWork";
import CollabSection from "./CollabSection";
import { Box } from "@mui/material";
import Reviews from "../../components/Reviews/Reviews";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import CallToActionBox from "../../components/Home/actioncard/CallToActionBox";
import DecorativeSpacer from "../../components/Decorative/Spacer";
import { DecorativeBackgroundImage, FoggyBackgroundImage } from "../../components/Decorative/Decorative.style";

export default function AboutUs() {
  return (
    <Box sx={{marginTop: "15rem"}}>
        <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
            <HeadingLinesAnimation>ABOUT</HeadingLinesAnimation>
        </Box>

        <BackgroundSection />

        <DecorativeSpacer reversed />
        <HowItWork />
        <DecorativeSpacer />

        <Box sx={{marginTop: "11.3rem"}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>FAST CLEAN X TESLA</HeadingLinesAnimation>
            </Box>
            <CollabSection />
        </Box>

      <HomeWrapper sx={{ marginTop: "8rem" }}>
          <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <HeadingLinesAnimation>MEET THE TEAM</HeadingLinesAnimation>
          </Box>
        <MeetTeam />
      </HomeWrapper>

        <DecorativeSpacer reversed />
        <Box sx={{marginTop: "8rem"}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>TESTIMONIALS</HeadingLinesAnimation>
            </Box>
            <Reviews />
        </Box>
        <DecorativeSpacer />

        <Box sx={{marginTop: "8rem"}}>
            <CallToActionBox hideImage={true} />
        </Box>
        <DecorativeBackgroundImage top="50rem" right="0" width="92rem" height="68.2rem" />
        <DecorativeBackgroundImage bottom="200rem" left="0" width="54rem" height="68rem" flip={true} />
    </Box>
  );
}
