import React from "react";
import ProductPage from "./ProductPage";
import "./App.css";
import { products } from "./products";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Magical Hands MSA!</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductPage
            key={product.id}
            name={product.name}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;