import styles from './styles.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
    text: string
}

const PrimaryLink: React.VFC<Props> = ({ href, text }) => {
    return (
        <Link href={href}>
            <p className={styles.PrimaryLink}>{text}</p>
        </Link>
    )
}
export default PrimaryLink;
