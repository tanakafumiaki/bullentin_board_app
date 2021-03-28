import React from "react";
import styles from "./styles.module.sass";
import { AddButton } from "../../atoms";

const CommentForm = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.user}>USER</p>
            <AddButton/>
            <textarea placeholder={"Add a Comment"} className={styles.textarea}>
            </textarea>
        </div>
    )
}

export default CommentForm;
