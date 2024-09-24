import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ContactsCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Contacts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    View and manage all customer contacts.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ContactsCard;
