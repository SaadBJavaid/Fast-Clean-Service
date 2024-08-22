import React, { useRef, useEffect, useState } from "react";
import { Box, ListItem } from "@mui/material";
import { NavSidebar, NavSidebarContent } from "../../components/mui/NavPkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MenuFooterSection } from "../mui/MenuPkgs";
import SocialsDiv from "../Home/footer/SocialsDiv";
import styles from "./UserMenu.module.css";
import { Badge } from "../mui/HomePkgs";
import { useTheme } from "../../app/contexts/themeContext";

const SubMenu = ({ option, setMenuOpen }) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleLinkClick = () => {
    if (option.link) {
      setMenuOpen(false);
    }
  };

  return (
    <ListItem
      key={option.name || 0}
      className={`${styles.menuItem} ${
        openOptions ? styles.open : styles.normal
      }`}
    >
      {option.name && (
        <Box onClick={() => setOpenOptions((prev) => !prev)}>
          {option?.link ? (
            <Link href={option.link} onClick={handleLinkClick}>
              {option.name}
            </Link>
          ) : (
            <>{option.name}</>
          )}
          {option.options && (
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                transform: openOptions
                  ? "translateY(1px) rotate(90deg)"
                  : "translateY(1px)",
                transition: "transform 0.3s ease",
              }}
            />
          )}
        </Box>
      )}
      <NavSidebarContent
        openOptions={openOptions}
        sx={{
          marginLeft: option.name ? "4rem" : 0,
          marginTop: option.name ? "5px" : "20px",
          height: openOptions || !option.name ? "100%" : 0,
          opacity: openOptions || !option.name ? 1 : 0,
          pointerEvents: openOptions || !option.name ? "auto" : "none",
          transform: openOptions || !option.name ? "auto" : "translateY(-100%)",
          transition: "all 0.3s ease",
        }}
      >
        {option?.options && <Box sx={{ marginTop: "1.5rem" }}></Box>}
        {option?.options?.map((option) => (
          <SubMenu
            key={option.name}
            option={option}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </NavSidebarContent>
    </ListItem>
  );
};

const UserMenu = ({ menuOpen, setMenuOpen }) => {
  const { theme } = useTheme();
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
          { name: "FleetCare Pro", link: "/fleet" },
          { name: "Subscription Plans", link: "/subscribe" },
          {
            name: "Anywhere AutoCare",
            options: [
              { name: "Standard Package", link: "/autocare" },
              { name: "Deluxe Package", link: "/autocare" },
              { name: "Premium Package", link: "/autocare" },
            ],
          },
          {
            name: (
              <>
                Store <Badge>Coming Soon!</Badge>
              </>
            ),
            link: "#",
          },
        ],
      },
      { name: "About", link: "/aboutus" },
      { name: "Contact", link: "/contact" },
    ],
  };

  return (
    <NavSidebar
      sx={{
        "--color-accent": theme.palette.primary.accent,
      }}
      menuOpen={menuOpen}
      ref={sidebarRef}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box className={styles.topbar}>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setMenuOpen(false)}
            sx={{
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      <br />
      <SubMenu option={sidebar} setMenuOpen={setMenuOpen} />
      <MenuFooterSection
        sx={{
          // marginTop: "4rem",
          padding: "4rem 0",
          borderTop: "1px solid white",
          "& .x": {
            color: "white",
          },
        }}
        className={styles.navFooter}
      >
        <SocialsDiv nav />
      </MenuFooterSection>
    </NavSidebar>
  );
};

export default UserMenu;
