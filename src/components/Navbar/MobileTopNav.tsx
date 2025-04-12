import { AlignLeft, Search, ShoppingCart } from "lucide-react";

const MobileTopNav = () => {
  return (
    <nav>
      <div className="lg:hidden px-5 py-5 flex items-center justify-between">
        <AlignLeft />
        <p>ARTSY.</p>
        <ul className="flex items-center gap-x-5">
          <li><Search className="size-5"/></li>
          <li><ShoppingCart className="size-5"/></li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileTopNav;
