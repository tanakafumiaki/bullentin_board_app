import styles from './style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
}

const BackLink: React.VFC<Props> = ({ href}) => {
    return (
        <Link href={href}>
            <p className={styles.backLink}>Back</p>
        </Link>
    )
}
export default BackLink;
