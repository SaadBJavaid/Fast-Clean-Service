import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SchedulingCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Scheduling
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Schedule and manage car cleaning services.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SchedulingCard;
