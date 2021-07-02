import React from "react";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copy}>Copyright &copy; Hasan 2020</p>
      <p className={styles.copy}>All rights reserved.</p>
    </div>
  );
}
