"use client";
import { styled, Typography, Box, Button, Card, CardContent, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { AppBar,Toolbar, InputBase, IconButton } from "@mui/material";


/* Typography Components */
export const CardHeading = styled(Typography)(({ theme }) => ({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '10px',
}));

export const CardSubheading = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
    marginBottom: '10px',
}));

export const TableHeading = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3f51b5',
    padding: '10px',
}));

export const SectionHeading = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '20px',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

export const CardBody = styled(CardContent)(({ theme }) => ({
    padding: '16px',
    '&:last-child': {
        paddingBottom: '16px',
    },
}));

export const CardActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '16px',
}));

export const StyledTable = styled(TableContainer)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
}));

export const TableRowCustom = styled(TableRow)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const TableCellCustom = styled(TableCell)(({ theme }) => ({
    padding: '10px',
    fontSize: '1rem',
    color: theme.palette.text.primary,
}));

export const TableHeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#3f51b5',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '10px',
}));

export const FlexContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
    padding: '20px',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
    padding: '20px',
}));

/* Button Component */
export const PrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));



// Navbar Container
export const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#fff",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "0 30px",
    height: "10vh",
    fontFamily: "JakartaSans, sans-serif",
    position: "fixed",
    width: "100%",
    zIndex: 1100,
    transition: "background-color 0.3s ease",
}));

// Navbar Box
export const NavbarBox = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

// Navbar Heading (Breadcrumb)
export const NavbarHeading = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    fontFamily: "JakartaSans, sans-serif",
}));

// Navbar Search
export const NavbarSearch = styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: "8px",
    backgroundColor: "#f1f3f4",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    width: "250px",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "0.9rem",
    color: "#333",
    fontFamily: "JakartaSans, sans-serif",
}));

export const NavbarIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
}));

export const IconWrapper = styled(IconButton)(({ theme }) => ({
    color: "#333",
}));
