// components/ProductContainer.js
import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json'; // Ajusta la ruta según la ubicación de tu archivo de datos

const ProductContainer = () => {
  return (
    <div>
      {productsData.map((product) => (
        
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
  );
};

export default ProductContainer;
