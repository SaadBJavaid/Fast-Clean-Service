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
import { HomeContainer } from "../components/mui/HomePkgs";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Services from "../components/Home/services/Services";
import Testimonials from "../components/Home/testimonials/Testimonials";
import PastClientSlider from "../components/Home/pastclient/PastClientSlider";
import Footer from "../components/Home/footer/Footer";
import Packages from "../components/Home/packages/Packages";
import HowItWork from "../components/Home/howitwork/HowItWork";
import PackageSlider from "../components/Home/PackageSlider/PackageSlider";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";

export default function Home() {
  return (
    <HomeContainer>
      {/* <BackgroundVideo /> */}

      <AnimatedHomeContent />
      <Stats />

      <About />
      <ServicesOverview />
      {/* <Services /> */}

<<<<<<< HEAD
=======
      {/* <HowItWork /> */}
>>>>>>> 718ee1f (.)
      <Testimonials />
      {/* <PastClientSlider /> */}
      <Footer />
      {/* <PackagesOld /> */}
      {/* <Info />
      <VideoSection />
      <Collage />
      <WaBanner /> */}
      {/* <FooterOld /> */}
    </HomeContainer>
  );
}
