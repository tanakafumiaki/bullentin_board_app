import styles from './styles.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
    text: string
}

const PrimaryLink: React.VFC<Props> = ({ href, text }) => {
    return (
        <div className={styles.wrapper}>
            <Link href={href}>
                <p className={styles.button}>{text}</p>
            </Link>
        </div>
    )
}
export default PrimaryLink;
