import React, { useRef, useEffect, useState } from "react";
import { Box, ListItem } from "@mui/material";
import { NavSidebar, NavSidebarContent } from "../../components/mui/NavPkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { MenuFooterSection } from "../mui/MenuPkgs";
import SocialsDiv from "../Home/footer/SocialsDiv";

const SubMenu = ({ option }) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <ListItem key={option.name || 0}>
      {option.name && (
        <Box onClick={() => setOpenOptions((prev) => !prev)}>
          {option.options && (
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                transform: openOptions ? "translateY(1px) rotate(90deg)" : "translateY(1px)",
              }}
            />
          )}
          {option?.link ? <Link href={`${option.link}`}>{option.name}</Link> : <>{option.name}</>}
        </Box>
      )}
      <NavSidebarContent
        openOptions={openOptions}
        sx={{
          marginLeft: option.name ? "2.2rem" : 0,
          marginTop: option.name ? "5px" : 0,
          height: openOptions || !option.name ? "100%" : 0,
          opacity: openOptions || !option.name ? 1 : 0,
          pointerEvents: openOptions || !option.name ? "auto" : "none",
          transform: openOptions || !option.name ? "auto" : "translateY(-100%)",
        }}
      >
        {option?.options?.map((option) => (
          <SubMenu key={option.name} option={option} />
        ))}
      </NavSidebarContent>
    </ListItem>
  );
};

const Menu = ({ menuOpen, setMenuOpen }) => {
  const sidebar = {
    options: [
      { name: "Home", link: "/" },
      {
        name: "Services",
        options: [
          { name: "Standard packages" },
          { name: "Deluxe packages" },
          { name: "Premium packages", options: [{ name: "hello" }] },
        ],
      },
      { name: "About Us", link: "/aboutus" },
      { name: "Book now" },
      { name: "Fleet", link: "/fleet" },
      { name: "Contact", link: "/contact" },
    ],
  };

  return (
    <NavSidebar menuOpen={menuOpen}>
      <Box className="topbar">
        <FontAwesomeIcon icon={faClose} onClick={() => setMenuOpen(false)} />
      </Box>
      <SubMenu option={sidebar} />
      {/* <NavSidebarContent sx={{ marginLeft: 0 }}>
        {options.map((option) => (
          <SubMenu key={option.name} option={option} />
        ))}
      </NavSidebarContent> */}

      <MenuFooterSection className={""}>
        <SocialsDiv />
      </MenuFooterSection>
    </NavSidebar>
  );
};

export default Menu;
