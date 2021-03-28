import React from "react";
import styles from "./styles.module.sass";

const ArticleTitleDisplay = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.writer}>WRITER</p>
            <textarea placeholder={"ArticleTitle"} className={styles.textarea}></textarea>
        </div>
    )
}

export default ArticleTitleDisplay;

