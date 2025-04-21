"use client"
import LargeMarketNav from "./LargeMarketNav";
import MobileMarketNav from "./MobileMarketNav";

const ResponsiveMarketNav = ({
  currentPage,
  limit,
}: {
  currentPage: number;
  limit: number;
}) => {
  return (
    <>
      <LargeMarketNav currentPage={currentPage} limit={limit} />
      <MobileMarketNav currentPage={currentPage} limit={limit} />
    </>
  );
};

export default ResponsiveMarketNav;
