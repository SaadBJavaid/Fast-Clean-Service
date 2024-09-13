"use client";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const SchedulingCard = () => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push('/admin/scheduling');
    };

    return (
        <Card
            sx={{
                backgroundColor: '#1E1E2F',
                color: '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.05)',
                },
            }}
            onClick={handleCardClick}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}
                >
                    Scheduling
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: '#fff', fontSize: '1.2rem', marginTop: '10px' }}
                >
                    Schedule and manage car cleaning services.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SchedulingCard;
