import React from "react";
import Link from "next/link";
import styles from "../../styles/Main.module.css";
import { Button } from "react-bootstrap";

function Main() {
  return (
    <div className={styles.container}>
      <h1 className={styles.motto}>Smaller Links, more profit</h1>
      <h2 className={styles.slogan}>
        The URL Shortener which cares for you, your brand <br /> and your
        customers.
      </h2>
      <img
        src="https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80"
        className={styles.profit}
        alt="profit with short-shortnner"
      />

      <Link href="/shorten">
        <Button className={styles.button}>Start Now</Button>
      </Link>
    </div>
  );
}

export default Main;
