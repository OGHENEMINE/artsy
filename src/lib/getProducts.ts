import ProductList from "@/app/data/products";

export const getPaginatedProducts = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = ProductList.slice(start, end);
  const totalPages = Math.ceil(ProductList.length / limit);
  const from = start + 1;
  const to = Math.min(end, ProductList.length);

  return {
    data: paginated,
    total: ProductList.length,
    totalPages,
    from,
    to,
  };
};
