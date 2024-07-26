import Image from "next/image";
import styles from "./page.module.css";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import { Button } from "@mui/material";
import styleHome from "./Home.module.css";

export default function Home() {
  return (
    <>
      <BackgroundVideo />

      <div className={styleHome.container}>
        <h1 className={styleHome.heading}>FAST CLEAN SERVICE</h1>
        <p className={styleHome.subtext}>ON YOUR LOCATION</p>
        <Button
          className={styleHome.button}
          variant="contained"
          color="primary"
          size="large"
        >
          Book Now
        </Button>
      </div>
    </>
  );
}
