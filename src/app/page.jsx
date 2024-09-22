// import FooterOld from "../components/Home/footerOld/FooterOld";
import { HomeContainer } from "../components/mui/HomePkgs";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../components/Home/testimonials/Testimonials";
import Footer from "../components/Home/footer/Footer";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";
import Services from "../components/Home/services/Services";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <HomeContainer>
      {/* <BackgroundVideo /> */}

      <AnimatedHomeContent />

      <Box
        sx={{
          backgroundColor: "primary.main",
          zIndex: 10,
          position: "relative",
        }}
      >
        <Stats />

        <About />
        <ServicesOverview />
        <Services />

        {/* <HowItWork /> */}
        <Testimonials />
        {/* <PastClientSlider /> */}
        {/* <PackagesOld /> */}
        {/* <Info />
      <VideoSection />
      <Collage />
      <WaBanner /> */}
        {/* <FooterOld /> */}
      </Box>
    </HomeContainer>
  );
}
