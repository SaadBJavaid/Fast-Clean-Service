"use client";
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HomePkgsBox, HomePkgsInBox } from '../../components/mui/HomePkgs';
import { packages } from './data';
import { AutoTabContainer, AutoTab, AutoTabList } from "../../components/mui/AutoCarePkgs";
import { useTheme } from '../../contexts/themeContext';
import { AutoTabPackage } from '../../components/BookingForm/AutoCarePackagesStep/AutocarePackages';

const Page = () => {
    const { theme } = useTheme();

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
                <AutoTabContainerMod />
            </HomePkgsInBox>
        </HomePkgsBox >
    )
}

export default Page;


const AutoTabContainerMod = async () => {
    const color = "#00c3ff" || "#FFC107";

    return (
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
    )
}
