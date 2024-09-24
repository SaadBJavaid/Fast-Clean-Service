"use client";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Image from "next/image";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                    backgroundColor: "#1E1E2F",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100vh",
                    position: "fixed",
                },
            }}
        >
            <Box className={styles.sidebar}>
                <Box className={styles.sidebarLogo}>
                    <Image
                        src="/logo.png"
                        alt="Fast Clean Logo"
                        width={80}
                        height={80}
                        className={styles.logo}
                    />
                </Box>

                <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", marginBottom: "10px" }} />

                <Box className={styles.sidebarTitle}>FAST CLEAN SERVICE</Box>

                <List className={styles.sidebarList}>
                    <ListItem button className={styles.listItem}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button className={styles.listItem}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bookings" />
                    </ListItem>
                    <ListItem button className={styles.listItem}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                    <ListItem button className={styles.listItem}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Scheduling" />
                    </ListItem>
                </List>

                <Box className={styles.logoutButton} onClick={() => alert("Logout clicked!")}>
                    Logout
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
