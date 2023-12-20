import styles from "../app/scss/globals.module.scss";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  const { cartContainer, cartIcon, cartItemCount, cartDropdown, cartItem } =
    styles;

  const totalItems = cartItems.length > 0 ? cartItems.length : 0;

  return (
    <div className={cartContainer}>
      <div className={cartIcon}>🛒</div>
      <div className={cartItemCount}>
        <p>{totalItems}</p>
      </div>
    </div>
  );
};

export default Cart;
