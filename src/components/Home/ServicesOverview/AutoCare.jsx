import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
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
  ServiceDetail,
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
                <ServiceName>Standard</ServiceName>
                <ServiceCat>Basic</ServiceCat>
              </Box>
              <ServiceDetails>
                <ServiceDetail>
                  <Typography>Interior</Typography>
                  <span>Duration: ± 45min</span>
                  <span>Price: €74,95</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                >
                  <Typography>Exterior</Typography>
                  <span>Duration: ± 45min</span>
                  <span>Price: €89,95</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                >
                  <Typography>Combi</Typography>
                  <span>Duration: ± 90min</span>
                  <span>Price: €139,95</span>
                </ServiceDetail>
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
                <ServiceName>Deluxe</ServiceName>
                <ServiceCat>Popular</ServiceCat>
              </Box>
              <ServiceDetails>
                <ServiceDetail>
                  <Typography>Interior</Typography>
                  <span>Duration: ± 60min</span>
                  <span>Price: €89,95</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                >
                  <Typography>Exterior</Typography>
                  <span>Duration: ± 90min</span>
                  <span>Price: €149,95</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                >
                  <Typography>Combi</Typography>
                  <span>Duration: ± 120/150min</span>
                  <span>Price: €189,95</span>
                </ServiceDetail>
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
                <ServiceName>Premium</ServiceName>
                <ServiceCat>Bespoke</ServiceCat>
              </Box>
              <ServiceDetails>
                <ServiceDetail>
                  <Typography>Showroom</Typography>
                  <span>Duration: ± 180min</span>
                  <span>Price: €394.95</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                >
                  <Typography>Paint Sealant</Typography>
                  <span>Duration: ± 1-2 days</span>
                  <span>Price: On Request</span>
                </ServiceDetail>

                <ServiceDetail
                  sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                >
                  <Typography>Pro Coating</Typography>
                  <span>Duration: ± 1-2 days</span>
                  <span>Price: On Request</span>
                </ServiceDetail>
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
