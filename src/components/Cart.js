// components/Cart.js
import { useState } from "react";
import styles from "../app/scss/globals.module.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cartContainer, cartIcon, cartItemCount, cartDropdown, cartItem } =
    styles;

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className={cartContainer}>
      <div className={cartIcon}>🛒</div>
      <div className={cartItemCount}>
        <p>{cartItems.length}</p>
      </div>
    </div>
  );
};

export default Cart;
