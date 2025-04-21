const currencyFormatter = (currency: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

export default currencyFormatter;
