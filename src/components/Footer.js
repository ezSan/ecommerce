import React from "react";
import styles from "../app/scss/globals.module.scss";

const { styledFooter } = styles;

export default function Footer() {
  return (
    <div className={styledFooter}>
      <p>| ezSan Development |</p>
    </div>
  );
}
