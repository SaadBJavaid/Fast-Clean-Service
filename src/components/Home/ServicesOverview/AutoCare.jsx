import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import {
  HomePkgsBox,
  HomePkgsInBox,
  ServiceSubheading,
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
          <ServicesItem rowStart={1} rowEnd={8} colStart={1} colEnd={2}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>Exterieur</ServiceName>
                <ServiceCat>€74,95</ServiceCat>
              </Box>
              <ServiceDetails>
                <span>Duration: ± 45min</span>
                <span>Type: Standard</span>
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
          <ServicesItem rowStart={2} rowEnd={9} colStart={2} colEnd={3}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>Interieur</ServiceName>
                <ServiceCat>€89,95</ServiceCat>
              </Box>
              <ServiceDetails>
                <span>Duration: ± 45min</span>
                <span>Type: Standard</span>
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
          <ServicesItem rowStart={1} rowEnd={8} colStart={3} colEnd={4}>
            <PkgImgCtr img="/bike2.jpg" />
            <ServiceContent className="service__content">
              <Box>
                <ServiceName>Combi</ServiceName>
                <ServiceCat>€139,95</ServiceCat>
              </Box>
              <ServiceDetails>
                <span>Duration: ± 90min</span>
                <span>Type: Standard</span>
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
        </ServicesGrid>
      </HomePkgsInBox>
    </HomePkgsBox>
  );
}
