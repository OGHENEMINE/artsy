import Footer from "@/components/Footer";
import ResponsiveTopNavbar from "@/components/Navbar/ResponsiveTopNavbar";
import React from "react";
import StoreProvider from "../store/Provider";
import Alert from "@/components/Alert";

const GuestLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StoreProvider>
      <Alert />
      <ResponsiveTopNavbar />
      <main className="my-10">{children}</main>
      <Footer />
    </StoreProvider>
  );
};

export default GuestLayout;
