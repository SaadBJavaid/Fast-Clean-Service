"use client";
import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Box,
    Typography,
    InputAdornment,
    Grid,
    Card,
    CardContent,
    Divider,
    Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import dynamic from 'next/dynamic';

// Dynamically import Sidebar and Navbar
const Sidebar = dynamic(() => import('../../../components/Admin/Sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../../../components/Admin/Navbar'), { ssr: false });

// Define columns for the table
const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'email', label: 'Email', minWidth: 200 },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 150 },
    { id: 'address', label: 'Address', minWidth: 250 },
];

// Create temporary data for the table
const contactsData = [
    { name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', address: '123 Elm St, New York, NY' },
    { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '987-654-3210', address: '456 Oak Ave, Beverly Hills, CA' },
    { name: 'Mike Johnson', email: 'mike@example.com', phoneNumber: '555-123-4567', address: '789 Maple Rd, Atlanta, GA' },
    { name: 'Emily Davis', email: 'emily@example.com', phoneNumber: '222-333-4444', address: '321 Cedar Dr, Austin, TX' },
    { name: 'Chris Lee', email: 'chris@example.com', phoneNumber: '777-888-9999', address: '654 Pine Ln, Seattle, WA' },
    { name: 'Sarah Connor', email: 'sarah@example.com', phoneNumber: '555-666-7777', address: '555 Mission St, San Francisco, CA' },
    { name: 'Tom Hanks', email: 'tom@example.com', phoneNumber: '888-999-0000', address: '123 Hollywood Blvd, Los Angeles, CA' },
    { name: 'Alice Brown', email: 'alice@example.com', phoneNumber: '999-888-7777', address: '456 River Rd, Miami, FL' },
    { name: 'Bruce Wayne', email: 'bruce@example.com', phoneNumber: '000-111-2222', address: 'Wayne Manor, Gotham City' },
    { name: 'Diana Prince', email: 'diana@example.com', phoneNumber: '333-444-5555', address: 'Themyscira' },
];

// Sticky Header Table with search functionality
export default function ContactsPage() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredContacts, setFilteredContacts] = React.useState(contactsData);

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Handle search functionality
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = contactsData.filter(contact =>
            contact.name.toLowerCase().includes(query) || contact.email.toLowerCase().includes(query)
        );
        setFilteredContacts(filtered);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '240px', width: '100%' }}> {/* Sidebar takes 240px */}
                <Navbar />
                <Box sx={{ padding: '30px' }}>
                    {/* Top Cards */}
                    <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                textAlign: 'center',
                                color: '#fff',
                                padding: '20px'
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Total Contacts
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                        10
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{
                                background: 'linear-gradient(45deg, #66BB6A 30%, #43A047 90%)',
                                textAlign: 'center',
                                color: '#fff',
                                padding: '20px'
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Active Contacts
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                        8
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{
                                background: 'linear-gradient(45deg, #FF7043 30%, #FF8A65 90%)',
                                textAlign: 'center',
                                color: '#fff',
                                padding: '20px'
                            }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        Inactive Contacts
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                        2
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Divider */}
                    <Divider sx={{ marginBottom: '20px' }} />

                    {/* Contacts Heading and Search Bar */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Contacts
                        </Typography>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearch}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ width: '300px', fontSize: '1.2rem' }}
                        />
                    </Box>

                    {/* Table */}
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    fontSize: '1.3rem',
                                                    fontWeight: 'bold',
                                                    backgroundColor: '#3f51b5',
                                                    color: '#fff',
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredContacts
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                                                <TableCell style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', color: '#555' }}>
                                                    <Avatar sx={{ marginRight: '10px', backgroundColor: '#2196F3' }}>
                                                        <PersonIcon />
                                                    </Avatar>
                                                    {row.name}
                                                </TableCell>
                                                {columns.slice(1).map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} style={{ fontSize: '1rem', color: '#555' }}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={filteredContacts.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{
                                fontSize: '1.1rem',
                            }}
                        />
                    </Paper>
                </Box>
            </div>
        </div>
    );
}
