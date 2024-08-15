import React, { useRef, useEffect, useState } from "react";
import { Box, ListItem } from "@mui/material";
import { NavSidebar, NavSidebarContent } from "../../components/mui/NavPkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MenuFooterSection } from "../mui/MenuPkgs";
import SocialsDiv from "../Home/footer/SocialsDiv";
import styles from "./UserMenu.module.css";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import { Badge } from "../mui/HomePkgs";
import { useTheme } from "../../app/contexts/themeContext";

const SubMenu = ({ option }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const handleLinkClick = () => {
    if (option.link) {
      setMenuOpen(false);
    }
  };
  return (
    <ListItem key={option.name || 0} className={`${styles.menuItem} ${openOptions ? styles.open : ""}`}>
      {option.name && (
        <Box onClick={() => setOpenOptions((prev) => !prev)}>
          {option.options && (
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                transform: openOptions ? "translateY(1px) rotate(90deg)" : "translateY(1px)",
                transition: "transform 0.3s ease",
              }}
            />
          )}
          {option?.link ? (
            <Link href={`${option.link}`} onClick={handleLinkClick}>
              {option.name}
            </Link>
          ) : (
            <>{option.name}</>
          )}
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
          transition: "all 0.3s ease",
        }}
      >
        {option?.options?.map((option) => (
          <SubMenu key={option.name} option={option} />
        ))}
      </NavSidebarContent>
    </ListItem>
  );
};

const UserMenu = ({ menuOpen, setMenuOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

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
      { name: "Book now", link: "/subscribe" },
      { name: "Fleet", link: "/fleet" },
      { name: "Contact", link: "/contact" },
      {
        name: (
          <>
            Store <Badge>Coming Soon!</Badge>
          </>
        ),
        link: "/contact",
      },
    ],
  };

  const { theme } = useTheme();

  return (
    <NavSidebar
      sx={{
        "--color-accent": theme.palette.primary.accent,
      }}
      menuOpen={menuOpen}
      ref={sidebarRef}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box className={styles.topbar}>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setMenuOpen(false)}
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>

        <ThemeSwitcher />
      </Box>
      <br />
      <SubMenu option={sidebar} />
      <MenuFooterSection className={""}>
        <SocialsDiv />
      </MenuFooterSection>
    </NavSidebar>
  );
};

export default UserMenu;
