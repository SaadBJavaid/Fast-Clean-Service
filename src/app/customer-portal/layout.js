import {getServerSession} from "next-auth";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
    title: "Fast clean service",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <div style={{ minHeight: "100vh" }}>
            {children}
        </div>
    );
}
