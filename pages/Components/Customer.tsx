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
          src="https://document-export.canva.com/OUY-s/DAEMj5OUY-s/5/thumbnail/DggPj1BBPXKXy6ByeL2kDg-0001-12690992133.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20210712%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210712T042906Z&X-Amz-Expires=30654&X-Amz-Signature=57141bb700f71167ec156f0c252486ba367694acf75fa568b477186ea6c36225&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2012%20Jul%202021%2013%3A00%3A00%20GMT"
          alt="Which one of these links do you want?"
          className={styles.links}
        />
      </div>
    </>
  );
}
