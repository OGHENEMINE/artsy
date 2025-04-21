import { useCheckoutContext } from "@/app/context/CheckoutContext";

const CartNav = () => {
  const { activeStep} = useCheckoutContext();
  const navItems = [
    {
      label: "Shopping cart",
      active: activeStep === 0,
    },
    {
      label: "Shipping details",
      active: activeStep === 1,
    },
    {
      label: "payment details",
      active: activeStep === 2,
    },
  ];
  return (
    <nav className="">
      <ul className="border-b dark:border-neutral-800 pb-1 flex items-center justify-between max-w-xl w-full mx-auto">
        {navItems.map((item) => (
          <li
            className={`inline-block relative before:absolute before:inline-block before:left-0 before:-bottom-1 transition-discrete duration-500 ease-in-out text-nowrap ${
              item.active
                ? "dark:before:bg-white before:h-0.5 before:w-full "
                : "text-gray-400"
            }`}
            key={item.label}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CartNav;
