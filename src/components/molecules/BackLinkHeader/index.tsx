import styles from './styles.module.sass';
import React from "react";
import { PrimaryLink } from "../../atoms";

const BackLinkHeader: React.VFC = () => {
    return (
        <div className={styles.backLinkHeader}>
            <PrimaryLink
                href="/top"
                text="Back"
            />
        </div>
    )
}
export default BackLinkHeader;
