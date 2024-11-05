"use client";
import React, { useState } from "react";
import { Box, IconButton, Modal, Table, TableBody, TableHead, Typography, MenuItem, FormControl, Select } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
    ButtonLearnMore,
    ModalButton,
    ModalCard,
    NavbarSearch,
    SearchInput,
    SectionHeading,
    StyledCard,
    StyledTable,
    TableCellCustom,
    TableHeaderCell,
    TableRowCustom
} from '../../../components/mui/AdminPkgs'; // Adjust according to file path
import { CustomFormTextField } from "../../../components/mui/FormPkgs";

export default function FleetProCareAppointments() {
        const [data, setData] = useState([
            { business: 'ABC Inc.', address: '123 Main St', name: 'John Doe', email: 'john@abc.com', vehicleType: 'Car', fleetSize: '1-5' },
            { business: 'XYZ Corp.', address: '456 Elm St', name: 'Jane Smith', email: 'jane@xyz.com', vehicleType: 'Truck', fleetSize: '6-10' },
            { business: 'Tech Solutions', address: '789 Oak St', name: 'Adam Black', email: 'adam@techsol.com', vehicleType: 'SUV', fleetSize: '11-50' },
            { business: 'Global Logistics', address: '321 Pine St', name: 'Eve Green', email: 'eve@globallog.com', vehicleType: 'Truck', fleetSize: '51-100' },
            { business: 'Fast Track Inc.', address: '654 Maple St', name: 'Kevin White', email: 'kevin@fasttrack.com', vehicleType: 'Car', fleetSize: '101-500' },
            { business: 'Mega Industries', address: '987 Elm St', name: 'Sophia Brown', email: 'sophia@megaindustries.com', vehicleType: 'Van', fleetSize: '1-10' },
            { business: 'Bright Future', address: '246 Cedar St', name: 'Liam Grey', email: 'liam@brightfuture.com', vehicleType: 'SUV', fleetSize: '11-50' },
            { business: 'Innovate Corp.', address: '135 Birch St', name: 'Olivia Blue', email: 'olivia@innovatecorp.com', vehicleType: 'Bike', fleetSize: '1-10' },
            { business: 'Visionary Tech', address: '789 Spruce St', name: 'Mason Violet', email: 'mason@visionary.com', vehicleType: 'Car', fleetSize: '1-5' },
            { business: 'NextGen Solutions', address: '123 Cypress St', name: 'Emma Silver', email: 'emma@nextgen.com', vehicleType: 'Truck', fleetSize: '101-500' },
            { business: 'Pioneer Logistics', address: '456 Willow St', name: 'James Gold', email: 'james@pioneerlogistics.com', vehicleType: 'SUV', fleetSize: '11-50' },
            { business: 'Blue Horizon', address: '321 Aspen St', name: 'Ava Red', email: 'ava@bluehorizon.com', vehicleType: 'Car', fleetSize: '51-100' },
            { business: 'Prime Services', address: '987 Beech St', name: 'Noah Green', email: 'noah@primeservices.com', vehicleType: 'Van', fleetSize: '101-500' },
            { business: 'Eagle Enterprises', address: '654 Cherry St', name: 'Lucas Indigo', email: 'lucas@eagleent.com', vehicleType: 'Car', fleetSize: '1-5' },
            { business: 'Streamline Inc.', address: '789 Redwood St', name: 'Isabella Orange', email: 'isabella@streamline.com', vehicleType: 'SUV', fleetSize: '6-10' },
            { business: 'Unified Logistics', address: '456 Fir St', name: 'Alexander Yellow', email: 'alex@unifiedlog.com', vehicleType: 'Truck', fleetSize: '11-50' },
            { business: 'Dynamic Corp.', address: '135 Palm St', name: 'Charlotte Pink', email: 'charlotte@dynamiccorp.com', vehicleType: 'Car', fleetSize: '51-100' },
            { business: 'Skyline Enterprises', address: '321 Sequoia St', name: 'Henry Bronze', email: 'henry@skylineent.com', vehicleType: 'SUV', fleetSize: '1-10' },
            { business: 'Summit Solutions', address: '654 Poplar St', name: 'Mia White', email: 'mia@summitsolutions.com', vehicleType: 'Van', fleetSize: '101-500' },
            { business: 'Peak Performers', address: '987 Dogwood St', name: 'Ethan Purple', email: 'ethan@peakperformers.com', vehicleType: 'Truck', fleetSize: '1-5' }
        ]);

    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        business: '',
        address: '',
        name: '',
        email: '',
        vehicleType: '',
        numVehicles: ''
    });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      business: formData.business,
      address: formData.address,
      name: formData.name,
      email: formData.email,
      vehicleType: formData.vehicleType,
      fleetSize: formData.numVehicles,
    };
    setData([...data, newData]);
    handleClose();
  };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Box sx={{ padding: "16px" }}>
      <SectionHeading sx={{ marginBottom: "2rem" }}>FleetCare Pro Appointments</SectionHeading>
      <StyledCard sx={{ marginBottom: "2rem" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "1.5rem" }}>
          <NavbarSearch sx={{ width: "250px" }}>
            <SearchInput placeholder="Search" value={searchTerm} onChange={handleSearch} />
          </NavbarSearch>
          <ButtonLearnMore onClick={handleOpen} sx={{ marginLeft: "1rem" }}>
            Add Service
          </ButtonLearnMore>
        </Box>

        <StyledTable component="div">
          <Table>
            <TableHead>
              <TableRowCustom>
                <TableHeaderCell>Business</TableHeaderCell>
                <TableHeaderCell>Address</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Vehicle Type</TableHeaderCell>
                <TableHeaderCell>Fleet Size</TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
              </TableRowCustom>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRowCustom key={index}>
                  <TableCellCustom>{row.business}</TableCellCustom>
                  <TableCellCustom>{row.address}</TableCellCustom>
                  <TableCellCustom>{row.name}</TableCellCustom>
                  <TableCellCustom>{row.email}</TableCellCustom>
                  <TableCellCustom>{row.vehicleType}</TableCellCustom>
                  <TableCellCustom>{row.fleetSize}</TableCellCustom>
                  <TableCellCustom>
                    <IconButton onClick={() => {}}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <MoreTimeIcon />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <DoneIcon />
                    </IconButton>
                  </TableCellCustom>
                </TableRowCustom>
              ))}
            </TableBody>
          </Table>
        </StyledTable>
      </StyledCard>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-service-modal"
                aria-describedby="form-to-add-service"
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100vh",
                }}>
                    <ModalCard sx={{
                        padding: '20px',
                        position: 'relative',
                        maxHeight: "80vh",
                        overflow: "auto",
                    }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{ position: 'absolute', top: '10px', right: '10px' }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" component="h2" sx={{ fontSize: '1.4rem', marginBottom: '20px' }}>
                            Add New Service
                        </Typography>
                        <StyledCard sx={{ backgroundColor: '#f0f0f0', backdropFilter: 'blur(10px)' }}>
                            <form onSubmit={handleSubmit}>
                                <CustomFormTextField
                                    label="Business"
                                    name="business"
                                    value={formData.business}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <CustomFormTextField
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <CustomFormTextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <CustomFormTextField
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <CustomFormTextField
                                    label="Vehicle Type"
                                    name="vehicleType"
                                    value={formData.vehicleType}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <CustomFormTextField
                                    label="Fleet Size"
                                    name="numVehicles"
                                    value={formData.numVehicles}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    sx={{ fontSize: '0.9rem !important' }}
                                />
                                <ModalButton type="submit" sx={{ fontSize: '1.4rem', width: 'max-content', margin: '20px auto' }}>
                                    Submit
                                </ModalButton>
                            </form>
                        </StyledCard>
                    </ModalCard>
                </Box>
            </Modal>
        </Box>
    );
}
