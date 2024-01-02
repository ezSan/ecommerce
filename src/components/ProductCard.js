// ProductCard.js
import React from "react";
import PropTypes from "prop-types";
import styles from "@/app/scss/globals.module.scss";
import Image from "next/image";

const ProductCard = ({ product, addToCart }) => {
  const { name, brand, capacity, price, image } = product;
  
  const {
    product_card,
    card_image,
    card_info,
    card_name,
    card_brand,
    card_capacity,
    card_price,
    buy_button,
  } = styles;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={product_card}>
      <div className={card_image}>
        <Image src={image} alt={`${name} product`} width={150} height={150}  priority />
      </div>
      <div className={card_info}>
        <h2 className={card_name}>{name}</h2>
        <p className={card_brand}>{brand}</p>
        <p className={card_capacity}>{`${capacity} GB`}</p>
        <p className={card_capacity}>{` ${price} u$`}</p>

        <button className={buy_button} onClick={handleAddToCart}>
          Comprar
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
