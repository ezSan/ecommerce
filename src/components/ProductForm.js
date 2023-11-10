// components/ProductForm.js
import { useState } from "react";

import styles from "@/app/scss/globals.module.scss";

const { product_form_container, product_form, form_control, submit_button } =
  styles;

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    capacity: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos al servidor (simulado)
    console.log("Datos del producto:", productData);
    // Aquí realizarías la lógica de envío a la API
  };

  return (
    <div className={product_form_container}>
      <form onSubmit={handleSubmit} className={product_form}>
        <div className={form_control}>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={form_control}>
          <label>Marca:</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className={form_control}>
          <label>Capacidad:</label>
          <select
            name="capacity"
            value={productData.capacity}
            onChange={handleChange}
            required
          >
            <option value="32">32 GB</option>
            <option value="64">64 GB</option>
            <option value="128">128 GB</option>
            <option value="256">256 GB</option>
          </select>
        </div>
        <div className={form_control}>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className={form_control}>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={submit_button}>
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
