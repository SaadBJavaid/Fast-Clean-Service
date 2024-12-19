"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    IconButton,
    Tabs,
    Tab,
    Grid,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';

// Import Autocare and Subscription Packages Data
import { packages as autocarePackages } from "../../autocare/data";
import { packages as subscriptionPackages } from "../../subscribe/data";

const Page = () => {
    const [tabValue, setTabValue] = useState(0); // 0: Service Packages, 1: Subscription Packages
    const [openModal, setOpenModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isSubscription, setIsSubscription] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleOpenModal = (pkg, subscription = false) => {
        setSelectedPackage(pkg);
        setIsSubscription(subscription);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedPackage(null);
        setIsSubscription(false);
    };

    const renderVehiclePricing = (vehicleOptions) => {
        if (!vehicleOptions) return null;
        return (
            <Box sx={{ marginBottom: "16px" }}>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "8px" }}
                >
                    Vehicle-Specific Pricing
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", paddingLeft: 0 }}>
                    {Object.keys(vehicleOptions).map((vehicle) => (
                        <li
                            key={vehicle}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}
                        >
                            <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{vehicle}</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: "1.6rem" }}>
                                €{vehicleOptions[vehicle].basePrice.toFixed(2)}
                                {vehicleOptions[vehicle].additionalPrice !== 0 && (
                                    <span> + €{vehicleOptions[vehicle].additionalPrice.toFixed(2)}</span>
                                )}
                                {vehicleOptions[vehicle].additionalTime !== 0 && (
                                    <span> (± {vehicleOptions[vehicle].additionalTime} min.)</span>
                                )}
                            </Typography>
                        </li>
                    ))}
                </Box>
            </Box>
        );
    };

    const renderAddOns = (additionalOptions) => {
        if (!additionalOptions) return null;
        const { interior, exterior, detailing } = additionalOptions;

        const renderSection = (title, items) => (
            <Box sx={{ marginBottom: "16px" }}>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "8px" }}
                >
                    {title}
                </Typography>
                {items?.length > 0 ? (
                    <Box component="ul" sx={{ listStyle: "none", paddingLeft: 0 }}>
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "8px",
                                }}
                            >
                                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{item.name}</Typography>
                                <Typography sx={{ fontWeight: 600, fontSize: "1.6rem" }}>
                                    {typeof item.additionalCost === "number"
                                        ? `€${item.additionalCost}`
                                        : item.additionalCost}
                                </Typography>
                            </li>
                        ))}
                    </Box>
                ) : (
                    <Typography color="text.secondary" sx={{ fontSize: "1.6rem" }}>
                        No {title.toLowerCase()} available.
                    </Typography>
                )}
            </Box>
        );

        return (
            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "8px" }}
                >
                    Add-Ons
                </Typography>
                {renderSection("Interior Add-Ons", interior)}
                {renderSection("Exterior Add-Ons", exterior)}
                {renderSection("Detailing Options", detailing)}
            </Box>
        );
    };


    const renderServicePackages = (internalPackages, category) => {
        return internalPackages.map((pkg) => (
            <Accordion
                key={pkg.id}
                sx={{
                    marginBottom: "16px",
                    borderBottom: "1px solid #E4E4E7",
                    borderRadius: "0px",
                    backgroundColor: "transparent",
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        padding: "8px 16px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold", flexGrow: 1, fontSize: "1.8rem" }}>
                            {`${category.charAt(0).toUpperCase() + category.slice(1)} Package - ${pkg.name}`}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", marginRight: "0.8rem", textAlign: "right" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.price}</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.duration}</Typography>
                            </Box>
                            <IconButton
                                sx={{ color: "#1976d2" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenModal(pkg, false);
                                }}
                            >
                                <img src="/edit-icon.svg" alt="Edit Icon" style={{ width: "50px", height: "50px" }} />
                            </IconButton>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "16px" }}>
                    <Typography
                        sx={{ marginBottom: "16px", fontStyle: "normal", fontSize: "1.6rem" }}
                        color="text.secondary"
                    >
                        {pkg.description}
                    </Typography>

                    <Divider sx={{ marginBottom: "16px" }} />

                    {pkg.vehicleOptions && renderVehiclePricing(pkg.vehicleOptions)}

                    {pkg.packages && (
                        <Box sx={{ marginBottom: "16px" }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "8px" }}
                            >
                                Included Services
                            </Typography>
                            <Box component="ul" sx={{ listStyle: "disc", paddingLeft: "20px" }}>
                                {pkg.packages.map((service, idx) => (
                                    <li key={idx} style={{ fontSize: "1.6rem" }}>
                                        {service}
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    )}

                    {pkg.additionalOptions && renderAddOns(pkg.additionalOptions)}
                </AccordionDetails>
            </Accordion>
        ));
    };

    const renderSubscriptionPackages = (packages) => {
        return packages.map((pkg) => (
            <Accordion
                key={pkg.id}
                sx={{
                    marginBottom: "16px",
                    borderBottom: "1px solid #E4E4E7",
                    borderRadius: "0px",
                    backgroundColor: "transparent",
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        padding: "8px 16px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold", flexGrow: 1, fontSize: "1.8rem" }}>
                            {`Subscription Package - ${pkg.name}`}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", marginRight: "0.8rem", textAlign: "right" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.price}</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.duration}</Typography>
                            </Box>
                            <IconButton
                                sx={{ color: "#1976d2" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenModal(pkg, true);
                                }}
                            >
                                <img src="/edit-icon.svg" alt="Edit Icon" style={{ width: "50px", height: "50px" }} />
                            </IconButton>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "16px" }}>
                    <Typography
                        sx={{ marginBottom: "16px", fontStyle: "normal", fontSize: "1.6rem" }}
                        color="text.secondary"
                    >
                        {pkg.description}
                    </Typography>

                    <Divider sx={{ marginBottom: "16px" }} />

                    {pkg.vehicleOptions && renderVehiclePricing(pkg.vehicleOptions)}

                    {pkg.packages && (
                        <Box sx={{ marginBottom: "16px" }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "8px" }}
                            >
                                Included Services
                            </Typography>
                            <Box component="ul" sx={{ listStyle: "disc", paddingLeft: "20px" }}>
                                {pkg.packages.map((service, idx) => (
                                    <li key={idx} style={{ fontSize: "1.6rem" }}>
                                        {service}
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    )}

                    {pkg.additionalOptions && renderAddOns(pkg.additionalOptions)}
                </AccordionDetails>
            </Accordion>
        ));
    };

    const renderModalContent = () => {
        if (!selectedPackage) return null;

        const handleInputChange = (field, value, index, subfield) => {
            // Implement state updates for the form fields if needed
            // For now, this function is a placeholder
        };

        const category =
            selectedPackage?.category?.charAt(0).toUpperCase() + selectedPackage?.category?.slice(1) || "Unknown";

        return (
            <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="lg" sx={{ padding: "2.2rem 5rem" }}>
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2.2rem" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "0.5rem" }}>Edit Package</Typography>
                        <Typography
                            sx={{ fontWeight: 600, color: "#A7A5B0", fontSize: "1.4rem", marginBottom: "2rem" }}
                        >
                            Make changes to the package details, pricing, and add-ons below.
                        </Typography>
                    </Box>
                    <IconButton onClick={handleCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{ padding: "2.2rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
                        <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Package Name:</Typography>
                        <TextField
                            variant="outlined"
                            value={`${category} Package - ${selectedPackage.name}`}
                            disabled
                            fullWidth
                            sx={{ fontSize: "1.6rem", borderRadius: "10px", "& .MuiInputBase-input.Mui-disabled": { opacity: 1, WebkitTextFillColor: "black",}, }}
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
                        <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Base Price (€):</Typography>
                        <TextField
                            variant="outlined"
                            type="number"
                            inputProps={{ step: "0.01" }}
                            value={selectedPackage.vehicleOptions
                                ? Object.values(selectedPackage.vehicleOptions)[0].basePrice
                                : selectedPackage.price.replace("€", "")}
                            onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                            fullWidth
                            sx={{ fontSize: "1.6rem", borderRadius: "10px" }}
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
                        <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Duration (min):</Typography>
                        <TextField
                            variant="outlined"
                            type="number"
                            value={parseInt(selectedPackage.duration.replace("±", "").replace("min.", "").trim())}
                            onChange={(e) => handleInputChange("duration", parseInt(e.target.value))}
                            fullWidth
                            sx={{ fontSize: "1.6rem", borderRadius: "10px" }}
                        />
                    </Box>

                    <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "1rem" }}>
                            Vehicle-Specific Pricing
                        </Typography>
                        <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                            <Grid item xs={12} sm={4}>
                                <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Vehicle Type</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Base Price (€)</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Additional Price (€)</Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Additional Time (min)</Typography>
                            </Grid>
                        </Grid>
                        {Object.keys(selectedPackage.vehicleOptions).map((vehicle, index) => (
                            <Grid container spacing={2} key={vehicle} sx={{ marginBottom: "1.5rem" }}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        variant="outlined"
                                        value={vehicle}
                                        disabled
                                        fullWidth
                                        sx={{ fontSize: "1.6rem", borderRadius: "10px", "& .MuiInputBase-input.Mui-disabled": { opacity: 1, WebkitTextFillColor: "black",}, }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        value={selectedPackage.vehicleOptions[vehicle].basePrice}
                                        onChange={(e) => handleInputChange("basePrice", parseFloat(e.target.value), index, "basePrice")}
                                        fullWidth
                                        sx={{ fontSize: "1.6rem", borderRadius: "10px" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        value={selectedPackage.vehicleOptions[vehicle].additionalPrice}
                                        onChange={(e) => handleInputChange("additionalPrice", parseFloat(e.target.value), index, "additionalPrice")}
                                        fullWidth
                                        sx={{ fontSize: "1.6rem", borderRadius: "10px" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        value={selectedPackage.vehicleOptions[vehicle].additionalTime}
                                        onChange={(e) => handleInputChange("additionalTime", parseInt(e.target.value), index, "additionalTime")}
                                        fullWidth
                                        sx={{ fontSize: "1.6rem", borderRadius: "10px" }}
                                    />
                                </Grid>
                            </Grid>
                        ))}
                    </Box>

                    <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "1rem" }}>
                            Included Services
                        </Typography>
                        {selectedPackage.packages.map((service, idx) => (
                            <Box key={idx} sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                                <TextField
                                    variant="outlined"
                                    value={service}
                                    fullWidth
                                    sx={{ fontSize: "1.6rem", borderRadius: "10px", "& .MuiInputBase-root": { color: "black" } }}
                                />
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "2rem",
                            }}
                        >
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem" }}>Add-Ons</Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#18181A",
                                    color: "#B1B8B4",
                                    padding: "0.8rem 2.2rem",
                                    fontSize: "1.4rem",
                                    fontWeight: "400",
                                    borderRadius: "10px",
                                    "&:hover": {
                                        backgroundColor: "#18181A",
                                    },
                                }}
                            >
                                Add Add-On
                            </Button>
                        </Box>

                        {selectedPackage.additionalOptions?.interior && (
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.6rem", marginBottom: "8px" }}>
                                    Interior Add-Ons
                                </Typography>
                                {selectedPackage.additionalOptions.interior.map((addon, idx) => (
                                    <Box key={idx} sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                                        <TextField
                                            variant="outlined"
                                            value={addon.name}
                                            disabled
                                            fullWidth
                                            sx={{ fontSize: "1.6rem", marginRight: "0.8rem", borderRadius: "10px", "& .MuiInputBase-input.Mui-disabled": { opacity: 1, WebkitTextFillColor: "black",}, }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            value={addon.additionalCost}
                                            onChange={(e) => handleInputChange("addonPrice", parseFloat(e.target.value), idx, "interior")}
                                            fullWidth
                                            sx={{ width: "40%", fontSize: "1.6rem", borderRadius: "10px" }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {selectedPackage.additionalOptions?.exterior && (
                            <Box sx={{ marginBottom: "2rem" }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "1.6rem", marginBottom: "8px" }}>
                                    Exterior Add-Ons
                                </Typography>
                                {selectedPackage.additionalOptions.exterior.map((addon, idx) => (
                                    <Box key={idx} sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                                        <TextField
                                            variant="outlined"
                                            value={addon.name}
                                            disabled
                                            fullWidth
                                            sx={{ fontSize: "1.6rem", marginRight: "0.8rem", borderRadius: "10px", "& .MuiInputBase-input.Mui-disabled": { opacity: 1, WebkitTextFillColor: "black",}, }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            value={addon.additionalCost}
                                            onChange={(e) => handleInputChange("addonPrice", parseFloat(e.target.value), idx, "exterior")}
                                            fullWidth
                                            sx={{ width: "40%", fontSize: "1.6rem", borderRadius: "10px" }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {selectedPackage.additionalOptions?.detailing && (
                            <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem" }}>Detailing Options</Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#18181A",
                                            color: "#B1B8B4",
                                            padding: "0.8rem 2.2rem",
                                            fontSize: "1.4rem",
                                            fontWeight: "400",
                                            borderRadius: "10px",
                                            "&:hover": {
                                                backgroundColor: "#18181A",
                                            },
                                        }}
                                    >
                                        Add Detailing
                                    </Button>
                                </Box>
                                {selectedPackage.additionalOptions.detailing.map((addon, idx) => (
                                    <Box key={idx} sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                                        <TextField
                                            variant="outlined"
                                            value={addon.name}
                                            disabled
                                            fullWidth
                                            sx={{ fontSize: "1.6rem", marginRight: "0.8rem", borderRadius: "10px", "& .MuiInputBase-input.Mui-disabled": { opacity: 1, WebkitTextFillColor: "black",}, }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            value={addon.additionalCost}
                                            onChange={(e) => handleInputChange("addonPrice", parseFloat(e.target.value), idx, "detailing")}
                                            fullWidth
                                            sx={{ width: "40%", fontSize: "1.6rem", borderRadius: "10px" }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ padding: "2.2rem" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#18181A",
                            color: "#B1B8B4",
                            padding: "2rem 2.2rem",
                            fontSize: "1.4rem",
                            fontWeight: "400",
                            "&:hover": {
                                backgroundColor: "#18181A",
                            },
                        }}
                    >
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };


    return (
        <Box sx={{ padding: "24px", margin: "0 auto" }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontSize: "4.6rem", marginBottom: "24px" }}
            >
                Package & Pricing Management
            </Typography>

            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                sx={{
                    marginBottom: "24px",
                    borderBottom: "1px solid #D3D3D3",
                    "& .MuiTab-root": {
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                        color: "#000",
                    },
                    "& .Mui-selected": {
                        color: "#1976d2",
                    },
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#1976d2",
                        height: "4px",
                    },
                }}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Service Packages" />
                <Tab label="Subscription Packages" />
            </Tabs>

            <Box
                sx={{
                    border: "1px solid #D3D3D3",
                    borderRadius: "10px",
                    padding: "3rem",
                    margin: "3rem 0",
                    backgroundColor: "#fff",
                }}
            >
                {tabValue === 0 && (
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 500, fontSize: "3.6rem", marginBottom: "8px" }}
                        >
                            Service Packages
                        </Typography>
                        <Typography
                            sx={{ fontSize: "1.6rem", fontWeight: 600, color: "#A7A5B0", marginBottom: "24px" }}
                        >
                            Manage your service packages, pricing structure, and add-ons
                        </Typography>

                        {Object.entries(autocarePackages).map(([category, packages]) => (
                            <Box key={category} sx={{ marginBottom: "16px" }}>
                                {renderServicePackages(packages, category)}
                            </Box>
                        ))}
                    </Box>
                )}

                {tabValue === 1 && (
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 500, fontSize: "3.6rem", marginBottom: "8px" }}
                        >
                            Subscription Packages
                        </Typography>
                        <Typography
                            sx={{ fontSize: "1.6rem", fontWeight: 600, color: "#A7A5B0", marginBottom: "24px" }}
                        >
                            Manage your subscription packages and pricing
                        </Typography>

                        {renderSubscriptionPackages(subscriptionPackages)}
                    </Box>
                )}
            </Box>

            {selectedPackage && renderModalContent()}
        </Box>
    );

};

export default Page;
