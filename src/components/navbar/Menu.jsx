import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import List from "@mui/material/List";


import { MenuDivider, MenuFooterSection } from "../../components/mui/MenuPkgs";
import SocialsDiv from "../Home/footer/SocialsDiv";

const Menu = ({
  menuOpen,
  isServiceOpen,
  isPackageTypeOpen,
  packageOptions,
  selectedPackageType,
  handleBack,
  handleClose,
  handlePackageType,
  handleService,
  pathname,
  styles,
}) => {
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const mainRef = useRef(null);
  const serviceRef = useRef(null);
  const packageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isServiceOpen || isPackageTypeOpen) {
      tl.fromTo(contentRef.current, { x: "-50%", opacity: 0 }, { x: "0%", opacity: 1, duration: 0.3 });
    }

    // } else {
    //   tl.to(menuRef.current, {
    //     x: "100%",
    //     opacity: 0,
    //     clearProps: "all",
    //     duration: 0.5,
    //   }).to(contentRef.current, {
    //     x: "100%",
    //     opacity: 0,
    //     duration: 0.5,
    //     clearProps: "all",
    //   });
    // }
  }, [isServiceOpen, isPackageTypeOpen]);

  return (
    <div
      ref={menuRef}
      className={`${styles["navbar-menu"]} ${menuOpen ? styles.open : ""}`}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <div className={styles.menuHeader}>
          {(isServiceOpen || isPackageTypeOpen) && (
            <div className={styles.backButton}>
              <IconButton onClick={handleBack} className={styles.backIcon}>
                <ArrowBackIcon sx={{ fontSize: "15px", color: "white" }} />
              <span className={styles.backText}>Back</span>
              </IconButton>
            </div>
          )}
          <IconButton className={styles.closeButton} onClick={handleClose}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <div className={styles.menuContent}>
          <div ref={contentRef}>
            {isServiceOpen && isPackageTypeOpen && (
              <List ref={packageRef} className={styles.navLinks}>
                {packageOptions[selectedPackageType].map((pkg) => (
                  <li key={pkg}>
                    <Link href="#" onClick={handleClose}>
                      {pkg}
                    </Link>
                  </li>
                ))}
              </List>
            )}

            {isServiceOpen && !isPackageTypeOpen && (
              <List ref={serviceRef} className={styles.navLinks}>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Standard")}>
                    Standard Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Deluxe")}>
                    Deluxe Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Premium")}>
                    Premium Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
              </List>
            )}

            {!isServiceOpen && !isPackageTypeOpen && (
              <List ref={mainRef} className={styles.navLinks}>
                <li>
                  <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={handleClose}>
                    Home
                  </Link>
                </li>
                <li className={styles.navLinkWithArrow}>
                  <Link href="#" className={pathname === "/" ? styles.active : ""} onClick={handleService}>
                    Services
                  </Link>
                  <ArrowForwardIosIcon className={styles.arrowIcon} />
                </li>
                <li>
                  <Link href="/aboutus" className={pathname === "/aboutus" ? styles.active : ""} onClick={handleClose}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/bookus" className={pathname === "/bookus" ? styles.active : ""} onClick={handleClose}>
                    Book now
                  </Link>
                </li>
                <li>
                  <Link href="/fleet" className={pathname === "/fleet" ? styles.active : ""} onClick={handleClose}>
                    Fleet
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={pathname === "/contact" ? styles.active : ""} onClick={handleClose}>
                    Contact
                  </Link>
                </li>
              </List>
            )}
          </div>
        </div>
      </div>

      <MenuFooterSection className={styles.menuContent}>
        <SocialsDiv />
      </MenuFooterSection>
    </div>
  );
};

export default Menu;
