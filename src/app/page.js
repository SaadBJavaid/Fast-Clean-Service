// import FooterOld from "../components/Home/footerOld/FooterOld";
import { HomeContainer } from "../components/mui/HomePkgs";
// import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../components/Home/testimonials/Testimonials";
import Footer from "../components/Home/footer/Footer";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";

export default function Home() {
  return (
    <HomeContainer>
      {/* <BackgroundVideo /> */}

      <AnimatedHomeContent />
      {/* <Stats /> */}

      <About />
      <ServicesOverview />
      {/* <Services /> */}

      {/* <HowItWork /> */}
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
