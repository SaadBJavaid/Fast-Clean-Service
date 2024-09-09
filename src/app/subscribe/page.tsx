"use client";
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../app/contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from '../../components/mui/HomePkgs';
import { packages } from './data';
import { AutoTabContainer, AutoTab, AutoTabList } from "../../components/mui/AutoCarePkgs";

const Page = () => {
    const { theme } = useTheme();
    const color = "#00c3ff" || "#FFC107";

    return (
        <HomePkgsBox sx={{
            paddingTop: "12rem",
            position: "relative",
            backgroundColor: "primary.main",
            backgroundImage: theme.palette.mode === "light" ? "url(/bg3.jpg)" : "url(/bg-dark2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {theme.palette.mode === "dark" && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, #141414 1%,rgba(0,0,0,0.7), #141414 99%)",
                        zIndex: 0,
                    }}
                />
            )}
            <HomePkgsInBox sx={{ justifyContent: "center", width: '100%' }}>
                <AutoTabContainer sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    justifyContent: 'center',
                    '@media (min-width: 600px) and (max-width: 900px)': {
                        '& > div': {
                            flex: '1 1 calc(50% - 16px)',
                            maxWidth: 'calc(50% - 16px)',
                        }
                    },
                    '@media (max-width: 600px)': {
                        '& > div': {
                            flex: '1 1 70%',
                            maxWidth: '70%',
                        }
                    },
                    '@media (max-width: 450px)': {
                        '& > div': {
                            flex: '1 1 50%',
                            maxWidth: '50%',
                        }
                    }
                }}>
                    {packages.map((pkg, index) => (
                        <AutoTabPackage
                            key={index}
                            pkg={pkg}
                            index={index}
                            color={color}
                        />
                    ))}
                </AutoTabContainer>
            </HomePkgsInBox>
        </HomePkgsBox >
    )
}

export default Page;

const AutoTabPackage = ({ pkg, index, color }) => {
    const [additional, setAdditional] = useState(false);
    const [duration, setDuration] = useState(false);
    const [frequency, setFrequency] = useState(false);

    return (
        <AutoTab sx={{ width: '100%', maxWidth: '37rem' }}>
            <div className="tab__side tab__side--front" style={{ position: "relative" }}>
                <div className={`tab__picture tab__picture--${index + 1}`}></div>
                <Typography className="heading">
                    <span className={`heading--span heading--span-${index + 1}`}>{pkg.name}</span>
                </Typography>
                <Box sx={{ marginBottom: "8px" }}>
                    <Typography sx={{ color: "primary.text1 !important", fontSize: "1.2rem !important", textAlign: "center", transform: "translateY(10px)" }}>
                        FROM
                    </Typography>
                    <Typography sx={{ fontSize: "4rem !important", textAlign: "center", fontWeight: "900" }}>
                        {pkg.price}
                    </Typography>
                    <Typography sx={{ color: "primary.text1 !important", fontSize: "1.5rem !important", textAlign: 'center' }}>
                        {pkg.duration}
                    </Typography>
                </Box>

                <AutoTabList sx={{
                    padding: "8px 0",
                    margin: "0 2rem",
                    width: "100%",
                    minHeight: "210px", height: "100%",
                    justifyContent: "flex-start",
                }}>
                    {pkg.packages.map((item, index) => (
                        <Box key={item} sx={{ width: "100%", display: 'flex', justifyContent: "", padding: '2px 0' }}>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{
                                    color: color,
                                    marginRight: "1rem",
                                    transform: "translateY(2px)",
                                }}
                            />
                            <Typography sx={{ textAlign: "left !important" }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </AutoTabList>

                {pkg.durationOptions && (
                    <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                        <Typography onClick={() => setDuration(!duration)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                            Duration options
                            {duration ? <FontAwesomeIcon
                                    icon={faChevronUp}
                                    style={{ marginLeft: "6px" }}
                                />
                                : <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{ marginLeft: "6px" }}
                                />
                            }
                        </Typography>
                        {duration && (
                            <AutoTabList sx={{
                                padding: "8px 0",
                                margin: "0",
                                width: "100%"
                            }}>
                                {pkg.durationOptions?.map((item) => (
                                    <Box key={item.duration} sx={{ width: "100%", display: 'flex', justifyContent: "", padding: "4px 0" }}>
                                        <Typography sx={{
                                            textAlign: "left !important",
                                            textWrap: "nowrap",
                                        }}>
                                            {item.duration}
                                        </Typography>
                                        <Typography sx={{ textAlign: "right !important", width: "100%", fontWeight: "bold !important", color: "primary.accent" }}>
                                            {item.additionalCost === 0 ? "" : `+ `}
                                            € {item.additionalCost.toFixed(1)}
                                        </Typography>
                                    </Box>
                                ))}
                            </AutoTabList>
                        )}
                    </Box>
                )}

                {pkg.cleaningFrequencyOptions && (
                    <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                        <Typography onClick={() => setFrequency(!frequency)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                            Cleaning Frequency
                            {frequency ? <FontAwesomeIcon
                                    icon={faChevronUp}
                                    style={{ marginLeft: "1rem" }}
                                />
                                : <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{ marginLeft: "6px" }}
                                />
                            }
                        </Typography>
                        {frequency && (
                            <AutoTabList sx={{
                                padding: "8px 0",
                                margin: "0",
                                width: "100%"
                            }}>
                                {pkg.cleaningFrequencyOptions?.map((item) => (
                                    <Box key={item.frequency} sx={{ width: "100%", display: 'flex', justifyContent: "space-between", padding: '4px 0', textWrap: "nowrap" }}>
                                        <Typography sx={{
                                            textAlign: "left !important"
                                        }}>
                                            {item.frequency}
                                        </Typography>
                                        <Typography sx={{ textAlign: "right !important", color: "primary.accent", fontWeight: "bold", textWrap: 'nowrap' }}>
                                            {item.additionalCost === 0 ? "" : `+ `}
                                            € {item.additionalCost.toFixed(1)}
                                        </Typography>
                                    </Box>
                                ))}
                            </AutoTabList>
                        )}
                    </Box>
                )}

                {pkg.additionalOptions.length > 0 ? (
                    <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                        <Typography onClick={() => setAdditional(!additional)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                            Additional Options
                            {additional ? <FontAwesomeIcon
                                    icon={faChevronUp}
                                    style={{ marginLeft: "1rem" }}
                                />
                                : <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{ marginLeft: "6px" }}
                                />
                            }
                        </Typography>

                        {
                            additional && (
                                <AutoTabList sx={{
                                    padding: "8px 0",
                                    margin: "0",
                                    width: "100%"
                                }}>
                                    {pkg.additionalOptions?.map((item) => (
                                        <Box key={item.option} sx={{ width: "100%", display: 'flex', justifyContent: "space-between", padding: "4px 0" }}>
                                            <Typography sx={{
                                                textAlign: "left"
                                            }}>
                                                {item.option}
                                            </Typography>
                                            <Typography sx={{ textAlign: "right", color: "primary.accent", fontWeight: "bold", textWrap: 'nowrap' }}>
                                                {item.additionalCost === 0 ? "" : `+ `}
                                                € {item.additionalCost.toFixed(1)}
                                            </Typography>
                                        </Box>
                                    ))}
                                </AutoTabList>
                            )
                        }
                    </Box>
                ) : (
                    <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                        <Typography sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900", color: '#00000050' }}>
                            Additional Options
                            {additional ? <FontAwesomeIcon
                                    icon={faChevronUp}
                                    style={{ marginLeft: "1rem" }}
                                />
                                : <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{ marginLeft: "6px" }}
                                />
                            }
                        </Typography>
                    </Box>
                )}
            </div>
        </AutoTab>
    )
}
