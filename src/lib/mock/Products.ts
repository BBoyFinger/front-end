import { ProductType } from "../interface";

const products: ProductType[] = [
  {
    id: "1",
    name: "Kids Knu Skool Shoe",
    description: "A Puffy 90s Style Inspired by the Past, But Built for Today",
    price: "45",
    quality: 120,
    currency: "$",
    images: [
      "/products/vans/1.webp",
      "/products/vans/2.webp",
      "/products/vans/3.webp",
      "/products/vans/4.webp",
    ],
    categories: ["Vans"],
  },
  {
    id: "2",
    name: "NB 9060",
    description: "NB so beautiful",
    price: "149.99",
    quality: 2,
    currency: "$",
    images: [
      "/products/nb/1.webp",
      "/products/nb/2.webp",
      "/products/nb/3.webp",
    ],
    categories: ["nb"],
  },
  {
    id: "3",
    name: "puma",
    description: "Puma so beautiful",
    price: "240",
    quality: 2,
    currency: "$",
    images: [
      "/products/puma/1.avif",
      "/products/puma/2.avif",
      "/products/puma/3.avif",
      "/products/puma/4.avif",
    ],
    categories: ["puma"],
  }
];

export default products;
