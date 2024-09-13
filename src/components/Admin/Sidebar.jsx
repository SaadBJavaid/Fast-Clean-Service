"use client";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const router = useRouter();

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

                <List className={styles.sidebarList}>
                    <ListItem button className={styles.listItem} onClick={() => router.push('/admin')}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <HomeIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" sx={{ fontSize: "1.5rem" }} />
                    </ListItem>
                    <ListItem button className={styles.listItem} onClick={() => router.push('/admin/booking')}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <EventIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Bookings" sx={{ fontSize: "1.5rem" }} />
                    </ListItem>
                    <ListItem button className={styles.listItem} onClick={() => router.push('/admin/contacts')}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <ContactMailIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" sx={{ fontSize: "1.5rem" }} />
                    </ListItem>
                    <ListItem button className={styles.listItem} onClick={() => router.push('/admin/scheduling')}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <AssignmentIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Scheduling" sx={{ fontSize: "1.5rem" }} />
                    </ListItem>
                </List>

                <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} />

                <ListItem button className={styles.logoutButton} onClick={() => alert("Logout clicked!")}>
                    <ListItemIcon className={styles.listItemIcon}>
                        <LogoutIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ fontSize: "1.5rem" }} />
                </ListItem>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
