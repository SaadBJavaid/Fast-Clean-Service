import Image from "next/image";
import Packages from "../../components/Home/packages/Packages";
import Info from "../../components/Home/info/Info";
import VideoSection from "../../components/Home/videoSec/VideoSection";
import Collage from "../../components/Home/collage/Collage";
import WaBanner from "../../components/Home/wabanner/WaBanner";
import Footer from "../../components/Home/footer/Footer";
import { Typography } from "@mui/material";
import { HomeBlueBanner, HomeBlueBtn } from "../../components/mui/HomePkgs";
import {
  AboutContainer,
  AboutItem,
  AboutItemSection,
  AboutItemHeading,
  AboutItemDetail,
  AboutImgContainer,
} from "../../components/mui/AboutPkgs";
import { Box } from "@mui/material";

export default function AboutUs() {
  return (
    <>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          About Us
        </Typography>
      </HomeBlueBanner>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AboutContainer>
          <AboutItem>
            <AboutItemSection>
              <AboutItemHeading>
                CAR LATEN CLEASON IN LOCATION BY FAST CLEAN SERVICE
              </AboutItemHeading>
              <AboutItemDetail>
                Fast Clean Service is the mobile car polishing company that
                cleans your vehicle thoroughly at any location and time. We
                specialize in steam cleaning, the perfect method to reach even
                the most difficult places. Our vans are equipped with modern
                equipment to clean any type of vehicle efficiently and
                professionally.
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <AboutItemHeading>
                FOR EVERY TYPE VEHICLE A TOP RESULT{" "}
              </AboutItemHeading>
              <AboutItemDetail>
                Whether it concerns passenger cars, vans, buses, motorbikes,
                campers, caravans, trucks, boats or other types of vehicles, we
                get the interior and exterior in top condition. You can easily
                make an appointment via our agenda, so we can clean your vehicle
                wherever and whenever you want. This not only saves you time and
                energy, but also fuel costs because you do not have to drive to
                the car wash. professionally.
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              <AboutItemHeading>
                GUARANTEED RESULT WITH FAST CLEAN SERVICE
              </AboutItemHeading>
              <AboutItemDetail>
                We treat your car with the necessary care and attention, as if
                it were our own car. That is why we deliver your vehicle spick
                and span to you, guaranteed with excellent results. Removing
                stubborn stains such as pet hair, nicotine flavor, fungus and
                vomit is also part of our expertise.
              </AboutItemDetail>
            </AboutItemSection>
            <Box
              sx={{
                alignSelf: "flex-start",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
              <HomeBlueBtn>Contact Us</HomeBlueBtn>
            </Box>
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image
                src="/Fast-clean-service-besel-wagens.webp"
                alt="img"
                height={500}
                width={500}
              />
            </AboutImgContainer>
            <AboutImgContainer>
              <Image src="/g2.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
          </AboutItem>
        </AboutContainer>
      </Box>
      <Footer />
    </>
  );
}
