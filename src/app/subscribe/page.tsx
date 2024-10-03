"use client";
import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import { packages } from './data';
import { ServiceHeading } from "../../components/Home/ServicesOverview/ServiceColumnGroup";
import {DecorativeBackgroundImage} from "../../components/Decorative/ItemBoxes";

const colors = ["#5DFA48", "#005BAC", "#BA8B1D"];
const gradients = [
    { top: '#5DFA48', bottom: '#38E274' },
    { top: '#40A7FF', bottom: '#1C79CC' },
    { top: '#F2DB01', bottom: '#D6AB01' },
];

// Styled Components
const StyledCard = styled(Box)(({ theme }) => ({
    width: '393px',
    height: '795px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    boxShadow: '0px 4px 30.1px rgba(0, 0, 0, 0.25)',
    backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : '#fff',
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.3s ease',
}));

const StyledImageContainer = styled(Box)(({ highlightColor, theme }) => ({
    width: '100%',
    height: '260px',
    overflow: 'hidden',
    backgroundColor: highlightColor,
    clipPath: "path('M -2 265 Q 200 160 393 200 L 393 -2 L -2 -2 Z')",
    boxShadow: theme.palette.mode === 'light' ? '0px 10px 30.1px rgba(0, 0, 0, 1)' : 'none',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: highlightColor,
        opacity: 0.35,
    },
    '& > img': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        top: 0,
        left: "-3.1rem",
    },
}));

const GradientBox = styled(Box)(({ gradient }) => ({
    position: 'absolute',
    top: '18.4rem',
    right: '1.5rem',
    width: '201px',
    height: '5.7rem',
    background: `linear-gradient(to bottom, ${gradient.top}, ${gradient.bottom})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '2.4rem',
    color: '#fff',
    zIndex: 2,
}));

const StyledPriceContainer = styled(Box)({
    textAlign: 'center',
    marginTop: "-1rem",
});

const StyledOptionsList = styled(Box)(({ theme }) => ({
    marginTop: '2.5rem',
    paddingRight: "6.1rem",
    paddingLeft: "5.1rem",
    '& > div': {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 0',
    },
    '& img': {
        width: '23px',
        height: '23px',
        marginRight: '1rem',
    },
    '& p': {
        fontSize: '1.4rem',
        color: theme.palette.mode === 'dark' ? '#C1C1C1' : '#525252',
        fontWeight: "300",
        width: '100%',
        textAlign: 'left',
    },
}));
const PackageCard = ({ pkg, index, highlightColor }) => {
    const [duration, setDuration] = useState(false);
    const [frequency, setFrequency] = useState(false);
    const [additional, setAdditional] = useState(false);

    const theme = useTheme();

    return (
        <StyledCard>
            <StyledImageContainer highlightColor={highlightColor} theme={theme}>
                <img src={`/sub${index + 1}.png`} alt={`${pkg.name} image`} style={{ width: '460px', height: '270px', objectFit: 'cover', boxShadow: theme.palette.mode === 'light' ? '0px 4px 30.1px rgba(0, 0, 0, 0.5)' : 'none', }} />
            </StyledImageContainer>
            <GradientBox gradient={gradients[index]}>
                {pkg.name}
            </GradientBox>

            <StyledPriceContainer>
                <Typography sx={{ color: theme.palette.mode === 'dark' ? '#C1C1C1' : '#525252', fontSize: '1.2rem', fontWeight: "400" }}>
                    FROM
                </Typography>
                <Typography sx={{ fontSize: '3.8rem', fontWeight: '600', color: '#78D53F' }}>
                    {pkg.price}
                </Typography>
                <Typography sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#525252', fontSize: '1.6rem', fontWeight: '600' }}>
                    {pkg.duration}
                </Typography>
            </StyledPriceContainer>

            <StyledOptionsList theme={theme}>
                {pkg.packages.map((item) => (
                    <Box key={item}>
                        <img src="/Checkmark.png" alt="Checkmark" />
                        <Typography sx={{ color: theme.palette.mode === 'dark' ? '#C1C1C1' : '#525252' }}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </StyledOptionsList>

            {pkg.durationOptions && (
                <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
                    <Typography onClick={() => setDuration(!duration)} sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: 'pointer', textAlign: 'center' }}>
                        Duration options
                        <FontAwesomeIcon icon={duration ? faChevronUp : faChevronDown} style={{ marginLeft: '0.5rem' }} />
                    </Typography>
                    {duration && (
                        <Box>
                            {pkg.durationOptions.map(option => (
                                <Box key={option.duration} sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                                    <Typography sx={{ fontWeight: '600' }}>{option.duration}</Typography>
                                    <Typography sx={{ color: '#78D53F', fontWeight: 'bold' }}>{option.additionalCost === 0 ? '' : `+ €${option.additionalCost}`}</Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            )}

            {pkg.cleaningFrequencyOptions && (
                <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
                    <Typography onClick={() => setFrequency(!frequency)} sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: 'pointer', textAlign: 'center' }}>
                        Cleaning Frequency
                        <FontAwesomeIcon icon={frequency ? faChevronUp : faChevronDown} style={{ marginLeft: '0.5rem' }} />
                    </Typography>
                    {frequency && (
                        <Box>
                            {pkg.cleaningFrequencyOptions.map(option => (
                                <Box key={option.frequency} sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                                    <Typography sx={{ fontWeight: '600' }}>{option.frequency}</Typography>
                                    <Typography sx={{ color: '#78D53F', fontWeight: 'bold' }}>{option.additionalCost === 0 ? '' : `+ €${option.additionalCost}`}</Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            )}

            {pkg.additionalOptions.length > 0 ? (
                <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
                    <Typography onClick={() => setAdditional(!additional)} sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: 'pointer', textAlign: 'center' }}>
                        Additional Options
                        <FontAwesomeIcon icon={additional ? faChevronUp : faChevronDown} style={{ marginLeft: '0.5rem' }} />
                    </Typography>
                    {additional && (
                        <Box>
                            {pkg.additionalOptions.map(option => (
                                <Box key={option.option} sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                                    <Typography sx={{ fontWeight: '600' }}>{option.option}</Typography>
                                    <Typography sx={{ color: '#78D53F', fontWeight: 'bold' }}>{option.additionalCost === 0 ? '' : `+ €${option.additionalCost}`}</Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ) : (
                <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem", paddingBottom: "3.9rem" }}>
                    <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: 'pointer', textAlign: 'center' }}>
                        Additional Options
                        <FontAwesomeIcon icon={additional ? faChevronUp : faChevronDown} style={{ marginLeft: '0.5rem' }} />
                    </Typography>
                </Box>
            )}
        </StyledCard>
    );
};

const Page = () => {
    return (
        <Box sx={{ marginTop: "15rem" }}>
            <ServiceHeading variant={"h3"} sx={{ fontSize: "5.6rem !important", }}>SUBSCRIPTIONS</ServiceHeading>
            <DecorativeBackgroundImage top={"60%"} right={"0"} width="90rem" height="65rem" />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2.6rem', marginTop: '14rem', marginBottom: '20rem' }}>
                {packages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} index={index} highlightColor={colors[index % 3]} />
                ))}
            </Box>
        </Box>
    );
};

export default Page;
