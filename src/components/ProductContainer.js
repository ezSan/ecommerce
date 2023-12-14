"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "@/context/CartContext";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, cartItems } = useCart();
  
  console.log("Carrito:", cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getProducts");
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          "Error al obtener productos. Por favor, inténtelo de nuevo más tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart}/>
      ))}
    </div>
  );
};

export default ProductContainer;
