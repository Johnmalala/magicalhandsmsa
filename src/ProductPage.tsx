import React from "react";

interface ProductPageProps {
  name: string;
  imageSrc: string;
}

function ProductPage({ name, imageSrc }: ProductPageProps) {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={`Image of ${name}`} />
      <h2>{name}</h2>
    </div>
  );
}

export default ProductPage;