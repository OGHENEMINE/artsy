import ProductList from "@/app/data/products";
import { Filters } from "./interface";

export const getPaginatedProducts = (
  page: number,
  limit: number,
  filter: Filters,
  sort?: string
) => {
  console.log(sort);
  const filteredList = ProductList.filter((item) => {
    const matchCategory = !filter.category || item.category === filter.category;

    const matchPrice =
      item.price === null || typeof item.price === "string"
        ? true
        : (filter.priceMin === undefined || item.price >= filter.priceMin) &&
          (filter.priceMax === undefined || item.price <= filter.priceMax);

    const matchSearch =
      !filter.search ||
      item.name.toLowerCase().includes(filter.search.toLowerCase());

    return matchCategory && matchSearch && matchPrice;
  }).sort((a, b) => {
    switch (sort) {
      case "price_asc":
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      case "price_desc":
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "views_asc":
        return a.total_views - b.total_views;
      case "views_desc":
        return b.total_views - a.total_views;
      default:
        if (a.price === null && b.price === null) return 0;
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
    }
  });

  const total = filteredList.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filteredList.slice(start, end);

  return {
    data: paginated,
    total,
    totalPages: Math.ceil(total / limit),
    from: start + 1,
    to: Math.min(end, total),
  };
};
