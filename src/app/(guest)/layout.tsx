import Footer from "@/components/Footer";
import ResponsiveTopNavbar from "@/components/Navbar/ResponsiveTopNavbar";
import React from "react";

const GuestLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <ResponsiveTopNavbar />
      <main className="my-10">{children}</main>
      <Footer/>
    </>
  );
};

export default GuestLayout;
