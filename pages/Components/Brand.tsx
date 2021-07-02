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
            <img src="https://raw.githubusercontent.com/dingus45191/short-shortnner/main/src/Components/images/brand.jpg" alt="Brand" className={styles.img} />
        </div>
    );
}
