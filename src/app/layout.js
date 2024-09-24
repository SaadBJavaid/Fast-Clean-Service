import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../lib/SessionProvider";
import { ThemeProvider } from "../contexts/themeContext";
import { CssBaseline } from "@mui/material";
import LayoutWrapper from "../components/LayoutWrapper";
import { SnackbarProvider } from "../contexts/SnackBarContext";
import { ValidationProvider } from "../contexts/ValidationContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Home/footer/Footer";

export const metadata = {
  title: "Fast clean service",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
      <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ThemeProvider>
            <SnackbarProvider>
              <ValidationProvider>
                <CssBaseline />
                <div style={{ minHeight: "100vh" }}>
                  <Navbar />
                  {children}
                  <div style={{ zIndex: 10, position: "relative" }}>
                    <Footer />
                  </div>
                </div>
              </ValidationProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </SessionProvider>
      <SessionProvider session={session}>
        <ThemeProvider>
          <CssBaseline />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </SessionProvider>
      </body>
      </html>
  );
}
