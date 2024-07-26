import Image from "next/image";
import styles from "./page.module.css";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import { Button } from "@mui/material";
import styleHome from "./Home.module.css";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <BackgroundVideo />

      <div className={styleHome.container}>
        <Typography
          variant="h1"
          className={styles.heading}
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "3rem", // 0px - 600px
              sm: "4rem", // 600px - 960px
              md: "5rem", // 960px - 1280px
              lg: "6rem", // 1280px - 1920px
              xl: "7rem", // 1920px and up
            },
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          FAST CLEAN SERVICE
        </Typography>
        <Typography
          sx={{
            fontSize: {
              sm: "2rem", // 600px - 960px
              md: "2.5rem", // 960px - 1280px
              lg: "3rem", // 1280px - 1920px
            },
            textAlign: "center",
            marginBottom: "10px",
          }}
          variant="h6"
          className={styles.subtext}
        >
          ON YOUR LOCATION
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontSize: {
              sm: "1.2rem",
              md: "1.5rem",
              lg: "1.8rem",
            },
            padding: {
              sm: "12px 24px",
              md: "14px 28px",
              lg: "16px 32px",
            },
            marginBottom: "10px",
          }}
        >
          Book Now
        </Button>
      </div>
    </>
  );
}
