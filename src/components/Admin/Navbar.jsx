import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = ({ toggleDrawer, handleSignOut }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 2,
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "#fff",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                backdropFilter: isScrolled ? "blur(8px)" : "none",
                transition: "background-color 0.3s ease",
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                    <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <IconButton aria-label="go back">
                            <ArrowBackIcon />
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            marginLeft: "8px",
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
