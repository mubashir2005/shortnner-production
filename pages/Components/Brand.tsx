import React from "react";
import styles from "../../styles/Brand.module.css";

export default function Brand() {
  return (
    <div className={styles.Brand}>
      <h1 className={styles.brand_title}>
        The Link Shortener which makes your brand bigger.
      </h1>
      <h2 className={styles.brand_subtitle}>
        Your brand was made to Woo people. Research shows that longer links
        reduce clicks while shorter links drive 34% more clicks
      </h2>
      <img
        src="https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80"
        alt="Brand"
        className={styles.img}
      />
    </div>
  );
}
