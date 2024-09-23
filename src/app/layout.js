import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../lib/SessionProvider";
import { ThemeProvider } from "../contexts/themeContext";
import { CssBaseline } from "@mui/material";
import LayoutWrapper from "../components/LayoutWrapper";

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
          <CssBaseline />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </SessionProvider>
      </body>
      </html>
  );
}
