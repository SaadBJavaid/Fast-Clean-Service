import { Typography } from "@mui/material";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import FleetMain from "./FleetMain";

export default function page() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "BDSans",
          fontSize: "5rem !important",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "160px",
          marginBottom: "20px",
        }}
      >
        <HeadingLinesAnimation text="Fleet" />
      </Typography>
      <FleetMain />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "BDSans",
          fontSize: "2rem !important",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "160px",
          marginBottom: "20px",
        }}
      ></Typography>
    </>
  );
}
