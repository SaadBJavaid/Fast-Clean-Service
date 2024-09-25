"use client";
import React, { useState } from "react";
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
    ServiceBtn1,
} from "../../mui/HomePkgs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../../contexts/themeContext";

export default function Autocare() {
    const { theme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <HomePkgsBox
            sx={{
                width: "80%",
                padding: "2rem",
                marginBottom: "18rem"
            }}
        >
            <HomePkgsInBox sx={{ flexDirection: "column" }}>
                <ServicesGrid container>
                    <ServicesItem rowStart={1} rowEnd={8} colStart={1} colEnd={2}>
                        <PkgImgCtr
                            img="/toyotasteering.jpg"
                            // img="/bike2.jpg"
                        />
                        <ServiceContent className="service__content">
                            <Box>
                                <ServiceName sx={{ color: "#7ed56f" }}>Standard</ServiceName>
                                <ServiceCat>Basic</ServiceCat>
                            </Box>
                            <ServiceDetails>
                                <ServiceDetail>
                                    <Typography>Interior</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration: <span style={{ color: "white" }}>± 45mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€74.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                                >
                                    <Typography>Exterior</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration: <span style={{ color: "white" }}>± 45mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€89.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                                >
                                    <Typography>Combi</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration: <span style={{ color: "white" }}>± 90mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€139.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>
                            </ServiceDetails>
                            <Box
                                sx={{
                                    display: "flex",
                                    marginBottom: "3rem",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <ServiceBtn1>
                                    Learn More
                                    <Box>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Box>
                                </ServiceBtn1>
                                <ServiceBtn1 special={true}>Book Now</ServiceBtn1>
                            </Box>
                        </ServiceContent>
                    </ServicesItem>
                    <ServicesItem rowStart={2} rowEnd={9} colStart={2} colEnd={3} sx={{marginTop: "-12rem", marginBottom: "12rem"}}>
                        <PkgImgCtr
                            //  img="/bike2.jpg"
                            img="/mercedessteering.jpg"
                        />
                        <ServiceContent className="service__content">
                            <Box>
                                <ServiceName sx={{ color: "#2998ff" }}>Deluxe</ServiceName>
                                <ServiceCat>Popular</ServiceCat>
                            </Box>
                            <ServiceDetails>
                                <ServiceDetail>
                                    <Typography>Interior</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration: <span style={{ color: "white" }}>± 60mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€89.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                                >
                                    <Typography>Exterior</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration: <span style={{ color: "white" }}>± 90mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€149.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                                >
                                    <Typography>Combi</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration:{" "}
                                            <span style={{ color: "white" }}>± 1120/150mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€189.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>
                            </ServiceDetails>
                            <Box
                                sx={{
                                    display: "flex",
                                    marginBottom: "3rem",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <ServiceBtn1>
                                    Learn More
                                    <Box>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Box>
                                </ServiceBtn1>
                                <ServiceBtn1 special={true}>Book Now</ServiceBtn1>
                            </Box>
                        </ServiceContent>
                    </ServicesItem>
                    <ServicesItem rowStart={1} rowEnd={8} colStart={3} colEnd={4}>
                        <PkgImgCtr
                            // img="/bike2.jpg"
                            img="/ferraristeering.jpg"
                        />
                        <ServiceContent className="service__content">
                            <Box>
                                <ServiceName sx={{ color: "#ffb900" }}>Premium</ServiceName>
                                <ServiceCat>Bespoke</ServiceCat>
                            </Box>
                            <ServiceDetails>
                                <ServiceDetail>
                                    <Typography>Showroom</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration:{" "}
                                            <span style={{ color: "white" }}>± 180mins</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price: <span>€394.95</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                                >
                                    <Typography>Paint Sealant</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration:{" "}
                                            <span style={{ color: "white" }}>± 1-2 days</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price:
                                            <span>On Request</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>

                                <ServiceDetail
                                    // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                                >
                                    <Typography>Pro Coating</Typography>
                                    <Box>
                                        <div className="innerdeet">
                                            Duration:{" "}
                                            <span style={{ color: "white" }}>± 1-2 days</span>
                                        </div>
                                        <div className="innerdeet">
                                            Price:
                                            <span>On Request</span>
                                        </div>
                                    </Box>
                                </ServiceDetail>
                            </ServiceDetails>
                            <Box
                                sx={{
                                    display: "flex",
                                    marginBottom: "3rem",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <ServiceBtn1>
                                    Learn More
                                    <Box>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Box>
                                </ServiceBtn1>
                                <ServiceBtn1 special={true}>Book Now</ServiceBtn1>
                            </Box>
                        </ServiceContent>
                    </ServicesItem>
                </ServicesGrid>
            </HomePkgsInBox>
        </HomePkgsBox>
    );
}