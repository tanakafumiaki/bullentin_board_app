import styles from './styles.module.sass';
import React from "react";
import { PrimaryLink } from "../../atoms";

const HomeHeader: React.VFC = () => {
    return (
        <div className={styles.homeHeader}>
            <PrimaryLink
                href="/post"
                text="Post"
            />
        </div>
    )
}
export default HomeHeader;
