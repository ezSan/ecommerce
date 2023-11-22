import fs from "fs/promises";
import path from "path";
import multiparty from "multiparty";
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Método no permitido
  }

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error al parsear el formulario:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    const { name, brand, capacity, price } = fields;
    const { image } = files;

    if (!image || !image[0].path) {
      return res
        .status(400)
        .json({ error: "No se proporcionó ninguna imagen." });
    }

    // Obtener la ruta del archivo de productos
    const productsFilePath = path.resolve(
      process.cwd(),
      "src",
      "data",
      "products.json"
    );

    // Verificar si el archivo existe antes de leerlo
    try {
      await fs.access(productsFilePath);
    } catch (error) {
      console.error(
        "El archivo products.json no existe en la ubicación especificada.",
        error
      );
      res.status(500).json({ error: "Error interno del servidor" });
      return;
    }

    // Leer los productos actuales desde el archivo
    const existingProducts = JSON.parse(
      await fs.readFile(productsFilePath, "utf-8")
    );
    console.log("Productos actuales:", existingProducts);

    // Obtener el nombre único de la imagen (usando el id del producto)
    const productId = uuidv4();
   /*  const imageFileName = `${brand}_${name}_${capacity}`; */

     const imageFileName = `${path.basename(image[0].path)}`;

    // Ruta de la imagen en /public
    const publicImagePath = path.join(process.cwd(), "public", imageFileName);

    // Copiar la imagen a /public
    try {
      await fs.copyFile(image[0].path, publicImagePath);
    } catch (error) {
      console.error("Error al copiar la imagen a /public:", error);
      res
        .status(500)
        .json({ error: "Error interno del servidor al copiar la imagen" });
      return;
    }

    // Crear un nuevo producto con el nombre único de la imagen
    const newProduct = {
      id: productId,
      name,
      brand,
      capacity,
      price,
      image: "/" + imageFileName,
    };

    // Agregar el nuevo producto a la lista de productos
    const updatedProducts = [...existingProducts, newProduct];
    console.log("Productos actualizados:", updatedProducts);

    // Escribir la lista actualizada de productos en el archivo
    await fs.writeFile(
      productsFilePath,
      JSON.stringify(updatedProducts, null, 2)
    );

    res.status(200).json({
      message: "Producto agregado exitosamente",
      product: newProduct,
    });
  });
}
