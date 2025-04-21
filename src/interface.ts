
export interface productInterface {
    id: string;
    name: string;
    creator: string;
    location: string;
    description: string;
    category: string;
    collection: string;
    listing_type: "fixed_price" | "coming_soon" | "auction";
    total_views: number;
    price: string | number;
    image: string;
}