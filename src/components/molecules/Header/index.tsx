import styles from './styles.module.sass';
import React from "react";
import { PrimaryLink } from "../../atoms";
import { LogoutButton } from "../../molecules";

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

            <LogoutButton
                text="Logout"
            />
        </div>
    )
}
export default Header;
