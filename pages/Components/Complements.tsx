import React from "react";
import styles from "../../styles/Complements.module.css";

export default function Complements() {
  return (
    <div className={styles.complements}>
      <h1 id={styles.comp}>Let the URL be private and limitless</h1>

      <a
        href="https://shortnner-blog.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className={styles.learn_more}
      >
        Learn More
      </a>
    </div>
  );
}
