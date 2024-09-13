"use client"; // Marks this component as a client component

import { usePathname } from "next/navigation"; // Import usePathname for App Router
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Home/footer/Footer";

const LayoutWrapper = ({ children }) => {
    const pathname = usePathname(); // Get the current pathname

    // Check if the current route starts with "/admin"
    const isAdminRoute = pathname.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Navbar />}
            {children}
            {!isAdminRoute && <Footer />}
        </>
    );
};

export default LayoutWrapper;
