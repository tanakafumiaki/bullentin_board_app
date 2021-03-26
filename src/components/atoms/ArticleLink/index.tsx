import styles from './style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
}

const ArticleLink: React.VFC<Props> = ({ href }) => {
    return (
        <Link href={href}>
            <p className={styles.ArticleLink}>Article</p>
        </Link>
    )
}
export default ArticleLink;
