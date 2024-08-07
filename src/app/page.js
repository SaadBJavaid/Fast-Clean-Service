import Image from "next/image";
import styles from "./page.module.css";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import { Button } from "@mui/material";
import styleHome from "./Home.module.css";
import { Box } from "@mui/material";
import { HomeTypography } from "../components/mui/HomePkgs";
import PackagesOld from "../components/Home/packagesOld/PackagesOld";
import Info from "../components/Home/info/Info";
import VideoSection from "../components/Home/videoSec/VideoSection";
import Collage from "../components/Home/collage/Collage";
import WaBanner from "../components/Home/wabanner/WaBanner";
// import FooterOld from "../components/Home/footerOld/FooterOld";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Services from "../components/Home/services/Services";
import Testimonials from "../components/Home/testimonials/Testimonials";
import PastClientSlider from "../components/Home/pastclient/PastClientSlider";
import Footer from "../components/Home/footer/Footer";
import Packages from "../components/Home/packages/Packages";
import HowItWork from "../components/Home/howitwork/HowItWork";
import PackageSlider from "../components/Home/PackageSlider/PackageSlider";

export default function Home() {
  return (
    <>
      {/* <BackgroundVideo /> */}

      <AnimatedHomeContent />

      {/* <div className={styleHome.container}>
        <HomeTypography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "3rem", // 0px - 600px
              sm: "4rem", // 600px - 960px
              md: "5rem", // 960px - 1280px
              lg: "6rem", // 1280px - 1920px
              xl: "7rem", // 1920px and up
            },
            pb: "0",
            // marginBottom: "10px",
          }}
        >
          FAST CLEAN SERVICE
        </HomeTypography>
        <HomeTypography
          sx={{
            fontSize: {
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            },
          }}
          variant="h6"
          // className={styles.subtext}
        >
          ON YOUR LOCATION
        </HomeTypography>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          sx={{
            padding: {
              sm: "1.2rem 2.4rem",
              md: "1.4rem 2.8rem",
              lg: "1rem 3rem",
            },
            marginBottom: "1rem",
          }}
        >
          Book Now
        </Button>
      </div> */}
      {/* <Stats /> */}
      <PackageSlider />

      {/* <Packages /> */}
      <Services />

      <HowItWork />
      <Testimonials />
      <PastClientSlider />
      <Footer />
      {/* <PackagesOld /> */}
      {/* <Info />
      <VideoSection />
      <Collage />
      <WaBanner /> */}
      {/* <FooterOld /> */}
    </>
  );
}
