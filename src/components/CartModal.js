// CartModal.js

import React from 'react';
import Modal from 'react-modal';
import { useCart } from '@/context/CartContext';

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems } = useCart();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Carrito"
      ariaHideApp={false}
    >
      <h2>Detalles del Carrito</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <button onClick={onRequestClose}>Cerrar Carrito</button>
    </Modal>
  );
};

export default CartModal;
