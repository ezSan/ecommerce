import React from "react";
import PropTypes from "prop-types";
import styles from "@/app/scss/globals.module.scss";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, brand, capacity, price, image } = product;
  const {
    product_card,
    card_image,
    card_info,
    card_name,
    card_brand,
    card_capacity,
    card_price,
    buy_button
  } = styles;

  return (
    <div className={product_card}>
      <div className={card_image}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={`${name} product`}
        />
      </div>
      <div className={card_info}>
        <h2 className={card_name}>{name}</h2>
        <p className={card_brand}>{brand}</p>
        <p className={card_capacity}>{`Capacity: ${capacity} GB`}</p>
        
        <button className={buy_button}>Add to Cart</button>
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
};

export default ProductCard;
