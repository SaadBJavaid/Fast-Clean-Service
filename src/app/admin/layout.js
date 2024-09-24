import {CssBaseline} from "@mui/material";
import React from "react";

export default function AdminLayout({ children }) {
    return (
        <div style={{minHeight: "100vh"}}>
            {/*<Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />*/}
            {children}
            <div style={{zIndex: 10, position: "relative"}}>
                {/*<Footer/>*/}
            </div>
        </div>
    );
}