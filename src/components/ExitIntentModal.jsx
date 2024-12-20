// components/ExitIntentModal.js
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components for customization
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: "black",
    textAlign: 'center',
}));

const StyledDialogContentText = styled(DialogContentText)(({ theme }) => ({
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
    textAlign: 'center',
    margin: '0 20px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '25px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
}));

const ExitIntentModal = ({ onLeave, onStay }) => {
    return (
        <Dialog open onClose={onStay} PaperProps={{ style: { borderRadius: 20 } }}>
            <StyledDialogTitle>Wait!</StyledDialogTitle>
            <DialogContent>
                <StyledDialogContentText>
                    Are you sure you want to leave? We would love to assist you further.
                </StyledDialogContentText>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center', padding: '20px' }}>
                <StyledButton
                    onClick={onStay}
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: '10px' }}
                >
                    Stay
                </StyledButton>
                <StyledButton
                    onClick={onLeave}
                    color="secondary"
                    variant="contained"
                >
                    Leave
                </StyledButton>
            </DialogActions>
        </Dialog>
    );
};

export default ExitIntentModal;
