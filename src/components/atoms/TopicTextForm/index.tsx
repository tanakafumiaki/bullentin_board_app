import styles from './styles.module.sass';
import React from "react";

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ArticleForm: React.VFC<Props> = ({ onChange, value }) => {
    return (
        <div>
            <input className={styles.articleContent} onChange={onChange} value={value}/>
        </div>
    )
}
export default ArticleForm;
