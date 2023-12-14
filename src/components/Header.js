// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../app/scss/globals.module.scss";
import Cart from "./Cart";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const {
    header,
    logo,
    logoContainer,
    nav,
    menuToggle,
    navList,
    navItem,
    navLink,
    movileNav,
  } = styles;

  return (
    <header className={header}>
      <div className={logoContainer}>
        <p>Ecommerce</p>
      </div>
      <nav className={nav}>
        <div className={menuToggle} onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${navList} ${isMobileNavOpen ? mobileNav : ""}`}>
          <Link href="/tienda" className={navLink}>
            INICIO
          </Link>

          <Link href="/adminPanel" className={navLink}>
            SOBRE NOSOTROS
          </Link>

          <Link href="/adminPanel" className={navLink}>
            ADMINISTRAR TIENDA
          </Link>
        </ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
