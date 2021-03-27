import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string
}

const EntryForm: React.VFC<Props> = ({ text }) => {
    return (
        <div>
            <label className={styles.label}>
                {text}
            </label>
            <textarea className={styles.textarea}/>
        </div>
    )
}

export default EntryForm;
