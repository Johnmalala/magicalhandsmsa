// src/products.ts

// This file is updated to use the centralized image assets
// and provides a sample list of products with correct image references.
// Note: The primary product data for the application pages is managed within `src/pages/ProductsPage.tsx`.

import { images } from './assets';

// Define a type for a Product for better type safety and autocompletion.
export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  category: string;
}

// In a real app, this data would likely come from a database or API.
export const products: Product[] = [
  {
    id: 1,
    name: 'Self-inking Stamp',
    imageSrc: images.selfInkingStamps,
    category: 'Rubber Stamps'
  },
  {
    id: 2,
    name: 'Manual Stamp',
    imageSrc: images.manualStamp,
    category: 'Rubber Stamps'
  },
  {
    id: 3,
    name: 'Date Stamp',
    imageSrc: images.selfInkingDaterStamps,
    category: 'Rubber Stamps'
  },
  {
    id: 4,
    name: 'Heavy Duty Stamp',
    imageSrc: images.heavyDutyStamp,
    category: 'Rubber Stamps'
  },
  {
    id: 5,
    name: 'Embossing Seal',
    imageSrc: images.companySeals,
    category: 'Company Seals'
  },
  {
    id: 6,
    name: 'Common Seal',
    imageSrc: images.companySeal2,
    category: 'Company Seals'
  },
  {
    id: 7,
    name: 'A4 Photo Mount',
    imageSrc: images.photoMount,
    category: 'Photo Mounts'
  },
  {
    id: 8,
    name: 'Custom Size Mount',
    imageSrc: images.photoMount2,
    category: 'Photo Mounts'
  },
  {
    id: 9,
    name: 'Business Cards',
    imageSrc: images.businessCards,
    category: 'Branding'
  },
  {
    id: 10,
    name: 'Promotional Banners',
    imageSrc: images.banners,
    category: 'Branding'
  },
  {
    id: 11,
    name: 'Branded T-shirts & Mugs',
    imageSrc: images.tshirtsMugs,
    category: 'Branding'
  },
  {
    id: 12,
    name: 'Corporate Gifts',
    imageSrc: images.corporateGifts,
    category: 'Branding'
  },
];
