import React from "react";
import { SecondaryLink } from "components/atoms"
import styles from "./styles.module.sass";

const TopButtons: React.VFC = () => {
    return (
        <div className={styles.container}>
            <SecondaryLink text="LOGIN" href="/login"/>
            <SecondaryLink text="SIGN UP" href="/signup"/>
        </div>
    );
};

export default TopButtons;
