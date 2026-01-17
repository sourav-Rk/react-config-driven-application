import type { AppConfig } from "../types";

export const productsPage: AppConfig["pages"]["products"] = {
  route: "/products",
  title: "Products",
  components: [
    {
      type: "container",
      children: [
        {
          type: "productsHeader",
          title: "Our Products",
          subtitle:
            "Discover amazing products with powerful search and filtering",
        },
        {
          type: "searchFilters",
          placeholder: "Search products...",
          categories: ["Electronics", "Accessories", "Furniture"],
          sortOptions: [
            { label: "Price: Low to High", value: "price-asc" },
            { label: "Price: High to Low", value: "price-desc" },
            { label: "Name: A to Z", value: "name-asc" },
          ],
        },
        {
          type: "productList",
          itemsPerRow: 3,
        },
        {
          type: "promoBanner",
          title: "Special Offer!",
          description: "Get 20% off on all electronics. Limited time only!",
          buttonText: "Shop Now",
          buttonRoute: "/products",
        },
      ],
      maxWidth: "xl",
    },
  ],
};
