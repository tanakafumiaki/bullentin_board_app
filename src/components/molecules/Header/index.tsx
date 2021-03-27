import styles from './style.module.sass';
import React from "react";
import { PrimaryLink } from "../../atoms";

const Header: React.VFC = () => {
    return (
        <div className={styles.header}>
            <PrimaryLink
                href="/home"
                text="Home"
            />

            <PrimaryLink
                href="/post"
                text="Post"
            />
        </div>
    )
}
export default Header;
