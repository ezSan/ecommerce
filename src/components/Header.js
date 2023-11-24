// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../app/scss/globals.module.scss";
import Image from "next/image";
import Logo from "/public/assets/logo.png";
const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={140} height={140} className={styles.logo}/>
          </Link>
        </div>
        <ul
          className={`${styles.navList} ${
            isMobileNavOpen ? styles.mobileNav : ""
          }`}
        >
          <li>
            <Link href="/tienda" className={styles.navLink}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/adminPanel" className={styles.navLink}>
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <Link href="/adminPanel" className={styles.navLink}>
              ADMINISTRAR TIENDA
            </Link>
          </li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
        <div className={styles.searchCartContainer}>
          {/* Agrega el componente de búsqueda aquí */}
          <div className={styles.searchIcon}>
            {/* <img src="/path/to/your/search-icon.png" alt="Search" /> */}
          </div>
          {/* Agrega el componente del carrito aquí */}
          <div className={styles.cartIcon}>
            {/*  <img src="/path/to/your/cart-icon.png" alt="Cart" /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
