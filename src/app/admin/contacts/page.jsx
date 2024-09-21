"use client";
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Box,
    InputAdornment,
    Avatar,
    IconButton,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledCard, CardHeading, StyledTable, TableRowCustom, TableHeaderCell, TableCellCustom, CardSubheading } from '../../../components/mui/AdminPkgs';

const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'email', label: 'Email', minWidth: 200 },
    { id: 'phoneNumber', label: 'Phone Number', minWidth: 150 },
    { id: 'address', label: 'Address', minWidth: 250 },
];

const contactsData = [
    { name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', address: '123 Elm St, New York, NY' },
    { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '987-654-3210', address: '456 Oak St, Los Angeles, CA' },
    { name: 'Michael Johnson', email: 'michael.j@example.com', phoneNumber: '456-789-1230', address: '789 Pine St, Chicago, IL' },
    { name: 'Emily Davis', email: 'emily.d@example.com', phoneNumber: '321-654-9870', address: '101 Maple Ave, San Francisco, CA' },
    { name: 'David Brown', email: 'david.b@example.com', phoneNumber: '654-321-9870', address: '234 Birch Ave, Austin, TX' },
    { name: 'Sophia Lee', email: 'sophia.lee@example.com', phoneNumber: '789-123-4560', address: '456 Cedar Dr, Seattle, WA' },
    { name: 'Chris White', email: 'chris.white@example.com', phoneNumber: '123-789-4560', address: '789 Redwood Rd, Miami, FL' },
    { name: 'Sarah Wilson', email: 'sarah.w@example.com', phoneNumber: '321-123-6540', address: '123 Willow St, Denver, CO' },
    { name: 'James Taylor', email: 'james.t@example.com', phoneNumber: '654-987-3210', address: '345 Oak Ridge, Boston, MA' },
    { name: 'Olivia Anderson', email: 'olivia.a@example.com', phoneNumber: '789-654-3210', address: '789 Birch St, Houston, TX' },
    { name: 'Daniel Martin', email: 'daniel.m@example.com', phoneNumber: '456-321-7890', address: '456 Poplar St, Atlanta, GA' },
    { name: 'Laura Jackson', email: 'laura.j@example.com', phoneNumber: '321-789-6540', address: '987 Sycamore Dr, Portland, OR' },
    { name: 'Robert Harris', email: 'robert.h@example.com', phoneNumber: '123-654-9870', address: '567 Ash St, Phoenix, AZ' },
    { name: 'Jessica Clark', email: 'jessica.c@example.com', phoneNumber: '987-321-6540', address: '345 Cherry St, Philadelphia, PA' },
    { name: 'Matthew Lewis', email: 'matthew.l@example.com', phoneNumber: '654-123-9870', address: '123 Maple Dr, Las Vegas, NV' },
    { name: 'Isabella Moore', email: 'isabella.m@example.com', phoneNumber: '789-987-3210', address: '456 Pine St, Orlando, FL' },
    { name: 'Ethan Scott', email: 'ethan.s@example.com', phoneNumber: '321-654-1230', address: '789 Cypress Ave, Dallas, TX' },
    { name: 'Ava Turner', email: 'ava.t@example.com', phoneNumber: '987-123-4560', address: '345 Spruce St, Nashville, TN' },
    { name: 'Henry Walker', email: 'henry.w@example.com', phoneNumber: '654-789-1230', address: '123 Sequoia Blvd, San Diego, CA' },
    { name: 'Mia Hall', email: 'mia.h@example.com', phoneNumber: '456-987-1230', address: '678 Redwood Ave, Austin, TX' }
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
        <Box sx={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
            <StyledCard sx={{ width: '90%', padding: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Contacts</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                width: '250px',
                                backgroundColor: '#f1f1f1',
                                borderRadius: '8px',
                                marginRight: '16px',
                            }}
                        />
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Box>
                </Box>

                <StyledTable sx={{ marginTop: '20px' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="contacts table">
                            <TableHead>
                                <TableRowCustom>
                                    {columns.map((column) => (
                                        <TableHeaderCell
                                            key={column.id}
                                            style={{
                                                minWidth: column.minWidth,
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            {column.label}
                                        </TableHeaderCell>
                                    ))}
                                </TableRowCustom>
                            </TableHead>
                            <TableBody>
                                {filteredContacts
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRowCustom hover role="checkbox" tabIndex={-1} key={row.email}>
                                            <TableCellCustom>
                                                <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                                                    <Avatar sx={{ marginRight: '10px', backgroundColor: '#2196F3' }}>
                                                        <PersonIcon />
                                                    </Avatar>
                                                    {row.name}
                                                </Box>
                                            </TableCellCustom>
                                            <TableCellCustom>{row.email}</TableCellCustom>
                                            <TableCellCustom>{row.phoneNumber}</TableCellCustom>
                                            <TableCellCustom>{row.address}</TableCellCustom>
                                        </TableRowCustom>
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
                </StyledTable>
            </StyledCard>
        </Box>
    );
}
