import React from "react";
import styles from "./styles.module.sass";

const CommentForm = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.user}>USER</p>
            <textarea placeholder={"Add a Comment"} className={styles.textarea}>
            </textarea>
        </div>
    )
}

export default CommentForm;
