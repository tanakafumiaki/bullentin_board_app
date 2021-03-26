import styles from './style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
}

const HomeLink: React.VFC<Props> = ({ href }) => {
    return (
        <Link href={href}>
            <p className={styles.HomeLink}>Home</p>
        </Link>
    )
}
export default HomeLink;
