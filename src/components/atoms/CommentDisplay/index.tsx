import React from "react";
import styles from "./styles.module.sass";

const CommentDisplay = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.username}>USERNAME</p>
            <textarea placeholder={"Comment"} className={styles.textarea}></textarea>
        </div>
    )
}

export default CommentDisplay;
