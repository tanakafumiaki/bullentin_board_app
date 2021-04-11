import styles from './styles.module.sass';
import React from "react";

interface Props {
    title: string
    text: string
    userName: string
}

const ArticleDisplay: React.VFC<Props> = ({title,text,userName}) => {
    return (
        <div className={styles.textBox}>
            <h1 className={styles.articleTitle}>{title}</h1>
            <p className={styles.articleWriter}>{userName}</p>
            <p className={styles.articleDetail}>{text}</p>
        </div>
    )
}
export default ArticleDisplay;
