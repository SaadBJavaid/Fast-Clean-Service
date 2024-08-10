import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import {
  HomePkgsBox,
  HomePkgsInBox,
  ServicesImgContainer,
  HomeServicesBox,
  ServiceSubheading,
  ServicesDesc,
  ServicesBtn,
  ServicesItem,
  ServicesGrid,
  ServiceContent,
  PkgImgCtr,
  ServiceName,
  ServiceDetails,
  ServiceCat,
  ServiceBtn,
} from "../../mui/HomePkgs";
import styles from "./CarService.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Autocare() {
  return (
    <HomePkgsBox sx={{ width: "100%" }}>
      <HomePkgsInBox sx={{ flexDirection: "column" }}>
        <ServiceSubheading special={true}>Anywhere Auto-Care</ServiceSubheading>
        <ServicesGrid container>
          <ServicesItem rowStart={2} rowEnd={9} colStart={1} colEnd={2}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem>
          <ServicesItem rowStart={1} rowEnd={8} colStart={2} colEnd={3}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem>
          <ServicesItem rowStart={2} rowEnd={9} colStart={3} colEnd={4}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem>
          {/* <ServicesItem rowStart={12} rowEnd={22} colStart={1} colEnd={2}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem> */}
          {/* <ServicesItem rowStart={11} rowEnd={21} colStart={2} colEnd={3}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent>
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem>
          <ServicesItem rowStart={12} rowEnd={22} colStart={3} colEnd={4}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent>
              <Box>
                <ServiceName>heading</ServiceName>
                <ServiceCat>Standard</ServiceCat>
              </Box>
              <ServiceDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate, iure reprehenderit suscipit cumque tenetur
                eius aperiam, aut expedita veritatis pariatur ullam. Quae ipsam,
                vitae atque eveniet accusamus quos ratione.
              </ServiceDetails>
              <ServiceBtn>
                Book Now
                <Box>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </ServiceBtn>
            </ServiceContent>
          </ServicesItem> */}
        </ServicesGrid>
      </HomePkgsInBox>
    </HomePkgsBox>
  );
}
