import React from "react";
import { EntryForm } from "components/atoms"
import styles from "./styles.module.sass";

const LoginEntryForms: React.VFC = () => {
    return (
        <div className={styles.container}>
            <EntryForm text="Name" />
            <EntryForm text="Password" />
        </div>
    );
};

export default LoginEntryForms;
