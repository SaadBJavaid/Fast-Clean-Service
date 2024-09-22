"use client";
import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Avatar
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import DoneIcon from '@mui/icons-material/Done';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { StyledCard, CardBody, CardHeading } from '../mui/AdminPkgs';

const statusDetails = {
    "Form accepted": { color: "#4CAF50", icon: <DoneIcon /> },
    "Car in showroom": { color: "#2196F3", icon: <LocalShippingIcon /> },
    "Car being worked on": { color: "#FF9800", icon: <WorkIcon /> },
    "Service Completed": { color: "#9C27B0", icon: <CheckCircleIcon /> },
    "Car ready for pickup": { color: "#F44336", icon: <MailIcon /> },
};

const notifications = [
    {
        booking: "Tesla Model S",
        status: "Form accepted",
        date: "April 7 at 11:30 AM",
    },
    {
        booking: "BMW X5",
        status: "Car in showroom",
        date: "April 7 at 10:30 AM",
    },
    {
        booking: "Ford Mustang",
        status: "Car being worked on",
        date: "April 7 at 9:45 AM",
    },
    {
        booking: "Honda Civic",
        status: "Service Completed",
        date: "April 6 at 3:15 PM",
    },
    {
        booking: "Jeep Wrangler",
        status: "Car ready for pickup",
        date: "April 6 at 2:00 PM",
    },
];

const NotificationCard = ({ booking, status, date }) => {
    const { color, icon } = statusDetails[status];

    return (
        <StyledCard
            sx={{
                mb: 2,
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <CardBody>
                <Grid container alignItems="center">
                    <Grid item>
                        <Avatar
                            sx={{
                                bgcolor: color,
                                width: 40,
                                height: 40,
                                marginRight: '16px',
                            }}
                        >
                            {icon}
                        </Avatar>
                    </Grid>

                    <Grid item xs>
                        <Typography
                            sx={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color,
                            }}
                        >
                            {status}
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', color: '#333' }}>
                            {booking}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography sx={{ fontSize: '0.9rem', color: '#888' }}>
                            {date}
                        </Typography>
                    </Grid>
                </Grid>
            </CardBody>
        </StyledCard>
    );
};

const NotifCard = () => {
    return (
        <StyledCard>
            <CardBody>
                <CardHeading sx={{ marginBottom: '20px', color: '#333' }}>
                    Notifications
                </CardHeading>

                {notifications.slice(0, 3).map((notif, index) => (
                    <NotificationCard
                        key={index}
                        booking={notif.booking}
                        status={notif.status}
                        date={notif.date}
                    />
                ))}
            </CardBody>
        </StyledCard>
    );
};

export default NotifCard;
