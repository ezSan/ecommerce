import { useState } from "react";
import styles from "../app/scss/globals.module.scss";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { cartContainer, cartIcon, cartItemCount, cartDropdown, cartItem, cart, cartButton } =
    styles;

  const totalItems = cartItems.length > 0 ? cartItems.length : 0;

  return (
    <div className={cart}>
      <div className={cartContainer}>
        <div className={cartIcon}>🛒</div>
        <div className={cartItemCount}>
          <p>{totalItems}</p>
        </div>
      </div>


      {totalItems > 0 &&
       <button
        onClick={openModal}
        className={cartButton}>
       Ver Carrito</button>}

      {isModalOpen && (
        <CartModal isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
    </div>
  );
};

export default Cart;
