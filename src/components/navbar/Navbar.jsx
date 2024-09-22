import { Box } from "@mui/material";
import { NavbarContainer, NavbarCTA, NavLinksContainer, NavLinkT } from "../mui/navbarPkgs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import MoonIcon from "../../../public/navbar/Moon.svg";
import UserIcon from "../../../public/navbar/User.svg";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Box>
        <Image src={Logo} alt="logo" width={-1} height={61} />
      </Box>
      <NavLinksContainer>
        <NavLink href={"/"} options={["hello", "hi"]}>
          Home
        </NavLink>
        <NavLink href={"/"}>About</NavLink>
        <NavLink href={"/"}>Services</NavLink>
        <NavLink href={"/"}>Contact</NavLink>
      </NavLinksContainer>
      <NavLinksContainer>
        <NavbarCTA>Sign Up</NavbarCTA>
        <Image src={UserIcon} alt="google" width={20} height={20} />
        <Image src={MoonIcon} alt="google" width={30} height={30} />
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
