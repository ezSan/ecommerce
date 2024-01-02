"use client";
import { useEffect } from "react";
import Modal from "react-modal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function MainLayout({ children }) {
  useEffect(() => {
    return () => {
      Modal.setAppElement(null);
    };
  }, []);

  return (
    <div id="mainLayout">
      <CartProvider>
        <Header />
        {children}
        <Footer />
      </CartProvider>
    </div>
  );
}
