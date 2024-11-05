"use client";

import {useMediaQuery,} from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";


const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:950px)");

  return isSmallScreen ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
