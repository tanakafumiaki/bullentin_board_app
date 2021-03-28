import styles from './style.module.sass';
import React from "react";

const ArticleForm: React.VFC = () => {
    return (
        <div>
            <textarea placeholder={"Title"} className={styles.title}/>
            <textarea className={styles.articleContent}/>
        </div>
    )
}
export default ArticleForm;
