import React from "react";
import styles from "../../styles/Customer.module.css";

export default function Customer() {
  return (
    <>
      <div className={styles.customer_container}>
        <h1 className={styles.customerMotto}>
          Link Shortener that understands your pain
        </h1>
        <h4 className={styles.custom}>
          Typing long links can be horrifying. Links weren't made to trouble
          you, they were made to make your life easier.
        </h4>
        <img
          src="https://github.com/dingus45191/shortnner-production/blob/main/public/links.png?raw=true"
          alt="Which one of these links do you want?"
          className={styles.links}
        />
      </div>
    </>
  );
}
