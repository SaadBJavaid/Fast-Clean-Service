import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Sidebar = ({ drawerOpen, toggleDrawer, handleTabChange }) => {
    const [selectedTab, setSelectedTab] = useState("Dashboard");
    const router = useRouter();

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        handleTabChange(tab);
    };

    const handleLogout = async () => {
        await signOut({ redirect: false }); // Ends the session without auto-redirect
        router.push("/"); // Redirect to the home page
    };

    return (
        <Drawer
            variant="permanent"
            open={drawerOpen}
            sx={{
                width: drawerOpen ? 240 : 60,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerOpen ? 240 : 60,
                    boxSizing: "border-box",
                    transition: "width 0.3s ease",
                    overflowX: "hidden",
                    zIndex: 1101,
                },
            }}
        >
            <Toolbar />
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                    <List>
                        {[
                            { text: "Dashboard", icon: <HomeIcon /> },
                            { text: "My Bookings", icon: <EventIcon /> },
                        ].map((item) => (
                            <ListItem
                                key={item.text}
                                component="div"
                                onClick={() => handleTabClick(item.text)}
                                sx={{
                                    borderRadius: "8px",
                                    backgroundColor:
                                        selectedTab === item.text ? "rgba(0, 0, 255, 0.1)" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "rgba(0, 0, 255, 0.1)",
                                    },
                                    borderLeft: selectedTab === item.text ? "4px solid blue" : "none",
                                    marginBottom: 1,
                                    justifyContent: drawerOpen ? "flex-start" : "center",
                                    cursor: "pointer", // Ensures the item behaves like a button
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: selectedTab === item.text ? "blue" : "inherit",
                                        justifyContent: "center",
                                        minWidth: drawerOpen ? "auto" : "unset",
                                        marginRight: drawerOpen ? 2 : 0,
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                {drawerOpen && (
                                    <ListItemText
                                        primary={item.text}
                                        sx={{ fontSize: "1.2rem", fontWeight: 600 }}
                                    />
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
                <Box sx={{ mt: 2 }}>
                    <ListItem
                        component="div"
                        onClick={handleLogout}
                        sx={{
                            borderRadius: "8px",
                            backgroundColor: selectedTab === "Logout" ? "rgba(0, 0, 255, 0.1)" : "transparent",
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 255, 0.1)",
                            },
                            justifyContent: drawerOpen ? "flex-start" : "center",
                            cursor: "pointer", // Ensures the item behaves like a button
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: selectedTab === "Logout" ? "blue" : "inherit",
                                justifyContent: "center",
                                minWidth: drawerOpen ? "auto" : "unset",
                                marginRight: drawerOpen ? 2 : 0,
                            }}
                        >
                            <LogoutIcon />
                        </ListItemIcon>
                        {drawerOpen && (
                            <ListItemText primary="Logout" sx={{ fontSize: "1.2rem", fontWeight: 600 }} />
                        )}
                    </ListItem>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
