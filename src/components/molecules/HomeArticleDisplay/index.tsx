import styles from './styles.module.sass';
import React from "react";

const HomeArticleDisplay = () => {
    return (
        <div className={styles.textBox}>
            <p className={styles.articleWriter}>APIからユーザー名取得</p>
            <p className={styles.articleTitle}>APIからTitle取得/APIからTitle取得/APIからTitle取得</p>
        </div>
    )
}

export default HomeArticleDisplay;