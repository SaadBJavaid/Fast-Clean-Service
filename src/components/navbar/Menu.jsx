import React, { useRef, useEffect, useState } from "react";
import { Box, ListItem } from "@mui/material";
import { NavSidebar, NavSidebarContent } from "../../components/mui/NavPkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MenuFooterSection } from "../mui/MenuPkgs";
import SocialsDiv from "../Home/footer/SocialsDiv";
import styles from "./UserMenu.module.css";

const SubMenu = ({ option }) => {
    const [openOptions, setOpenOptions] = useState(false);

    return (
        <ListItem
            key={option.name || 0}
            className={`${styles.menuItem} ${openOptions ? styles.open : ""}`}
        >
            {option.name && (
                <Box onClick={() => setOpenOptions((prev) => !prev)}>
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
                    {option?.link ? (
                        <Link href={`${option.link}`}>{option.name}</Link>
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
        ],
    };

    return (
        <NavSidebar menuOpen={menuOpen}>
            <Box
                className={styles.topbar}
                sx={{
                    cursor: "pointer",
                }}
            >
                <FontAwesomeIcon icon={faClose} onClick={() => setMenuOpen(false)} />
            </Box>
            <br/>
            <SubMenu option={sidebar} />
            <MenuFooterSection className={""}>
                <SocialsDiv />
            </MenuFooterSection>
        </NavSidebar>
    );
};

export default UserMenu;
