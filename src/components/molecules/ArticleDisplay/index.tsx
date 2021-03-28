import styles from './styles.module.sass';
import React from "react";

const ArticleDisplay = () => {
    return (
        <div className={styles.textBox}>
            <h1 className={styles.articleTitle}>APIからTitle取得</h1>
            <p className={styles.articleWriter}>APIからユーザー名取得</p>
            <p className={styles.articleDetail}>「APIから記事内容を取得」
                The Tokyo Metropolitan Government says it confirmed 330 new cases of coronavirus infection on Saturday.
                This brings the total number of infections in the Japanese capital to 115,170.
                The seven-day average of daily case counts through Saturday stands at 278.9. That's up 4.3 percent from the week before.
                Tokyo officials say 40 people are in serious condition, up three from the Friday tally.
            </p>
        </div>
    )
}

export default ArticleDisplay;