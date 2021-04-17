import styles from './styles.module.sass';
import React from "react";
import { PrimaryLink } from "../../atoms";
import { LogoutButton } from "../../molecules";

const HomeHeader: React.VFC = () => {
    return (
        <div className={styles.homeHeader}>
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
export default HomeHeader;
