import React from "react";
import styles from "./styles.module.sass";

const CommentDisplay = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.username}>USERNAME</p>
            <p className={styles.textarea}>「APIからコメント取得」
                Wow! Just amazing. I love your profile content. Look Forward to see more. Well done!
            </p>
        </div>
    )
}

export default CommentDisplay;
