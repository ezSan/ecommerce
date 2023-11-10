// components/ProductForm.js
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
} from '@chakra-ui/react';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    brand: '',
    capacity: '',
    price: '',
    image: '',
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
    console.log('Datos del producto:', productData);
    // Aquí realizarías la lógica de envío a la API
  };

  return (
    <VStack spacing={4} align="stretch">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre del Producto:</FormLabel>
          <Input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Marca:</FormLabel>
          <Input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Capacidad:</FormLabel>
          <Select
            name="capacity"
            value={productData.capacity}
            onChange={handleChange}
            required
          >
            <option value="32">32 GB</option>
            <option value="64">64 GB</option>
            <option value="128">128 GB</option>
            <option value="256">256 GB</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Precio:</FormLabel>
          <Input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Imagen:</FormLabel>
          <Input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Agregar Producto
        </Button>
      </form>
    </VStack>
  );
};

export default ProductForm;
