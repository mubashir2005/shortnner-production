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
        src="https://github.com/dingus45191/shortnner-production/blob/main/public/profit.jpg?raw=true"
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
