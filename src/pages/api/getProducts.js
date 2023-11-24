// pages/api/getProducts.js
import productsData from '../../data/products.json'; 


export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  res.status(200).json(productsData);
}
