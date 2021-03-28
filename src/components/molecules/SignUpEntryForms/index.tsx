import React from "react";
import { EntryForm } from "components/atoms"
import styles from "./styles.module.sass";

const SignUpEntryForms: React.VFC = () => {
    return (
        <div className={styles.container}>
            <EntryForm text="Name" />
            <EntryForm text="Email" />
            <EntryForm text="Password" />
            <EntryForm text="PasswordConfirmation" />
        </div>
    );
};

export default SignUpEntryForms;