import React from "react";
import { PrimaryButton } from "components/atoms"
import styles from "./styles.module.sass";

const TopButtons: React.VFC = () => {
    return (
        <div className={styles.container}>
            <PrimaryButton text="LOGIN" />
            <PrimaryButton text="SIGN UP" />
        </div>
    );
};

export default TopButtons;