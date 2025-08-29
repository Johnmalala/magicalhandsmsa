// --- Important Note ---
// 1. Create a folder at: src/assets/images/
// 2. Place your product images inside it.
// 3. Update the file names below to match your images.

import productImage1 from "./assets/images/product1.jpg";
import productImage2 from "./assets/images/product2.png";

// Define a type for a Product for better type safety and autocompletion.
export interface Product {
  id: number;
  name: string;
  imageSrc: string;
}

// In a real app, this data would likely come from a database or API.
export const products: Product[] = [
  {
    id: 1,
    name: "Handcrafted Item 1",
    imageSrc: productImage1,
  },
  {
    id: 2,
    name: "Artisanal Product 2",
    imageSrc: productImage2,
  },
  // Add more products here. All image imports are now in one place!
];