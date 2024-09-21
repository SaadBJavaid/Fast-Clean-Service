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
    Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'email', label: 'Email', minWidth: 200 },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 150 },
    { id: 'address', label: 'Address', minWidth: 250 },
];

const contactsData = [
    { name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', address: '123 Elm St, New York, NY' },
    // Add more data
];

export default function ContactsPage() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredContacts, setFilteredContacts] = React.useState(contactsData);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = contactsData.filter(contact =>
            contact.name.toLowerCase().includes(query) || contact.email.toLowerCase().includes(query)
        );
        setFilteredContacts(filtered);
    };

    return (
        <Box sx={{ padding: '30px' }}>
            <Typography variant="h4" gutterBottom>
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
                sx={{ width: '300px', marginBottom: '20px' }}
            />

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
                                        <TableCell>
                                            <Avatar sx={{ marginRight: '10px', backgroundColor: '#2196F3' }}>
                                                <PersonIcon />
                                            </Avatar>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.phoneNumber}</TableCell>
                                        <TableCell>{row.address}</TableCell>
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
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => setRowsPerPage(+event.target.value)}
                />
            </Paper>
        </Box>
    );
}
