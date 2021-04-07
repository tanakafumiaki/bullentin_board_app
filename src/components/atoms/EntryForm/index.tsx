import React from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EntryForm: React.VFC<Props> = ({ text, onChange, value }) => {
    return (
        <div>
            <label className={styles.label}>
                {text}
            </label>
            <input className={styles.textarea} onChange={onChange} value={value} />
        </div>
    )
};

export default EntryForm;
