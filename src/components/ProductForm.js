// components/ProductForm.js
import { useState } from "react";
import styles from "@/app/scss/globals.module.scss";

const { product_form_container, product_form, form_control, submit_button } =
  styles;

const capacities = ["32 GB", "64 GB", "128 GB", "256 GB"];

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    capacity: "",
    price: "",
    image: null, // Usamos null para el campo de imagen
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("brand", productData.brand);
    formData.append("capacity", productData.capacity);
    formData.append("price", productData.price);
    formData.append("image", productData.image);

    try {
      const response = await fetch("/api/newProduct", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Producto enviado exitosamente:", result.product);
        // Puedes redirigir o realizar otras acciones después de agregar el producto
      } else {
        console.error("Error al enviar el producto");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
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
            {capacities.map((option) => (
              <option key={option} value={option.split(" ")[0]}>
                {option}
              </option>
            ))}
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
            placeholder="Selecciona una imagen"
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
