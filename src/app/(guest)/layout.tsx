import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";
import React from "react";

const GuestLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <TopNavbar />
      <main className=" my-10">{children}</main>
      <Footer/>
    </>
  );
};

export default GuestLayout;
