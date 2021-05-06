import styles from "./styles.module.sass";
import React from "react";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    type: string
    label: string
    id: string
    error: string
    value: string
    required: boolean
    minLength: number
}

const Field = React.forwardRef<HTMLInputElement, Props>(({ onChange, name, type, label, id, error, value, required, minLength }, ref) => (

    <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input id={id} ref={ref} onChange={onChange} value={value} name={name} type={type} required={required} minLength={minLength} className={styles.textarea} />
        {error && <p>{error}</p>}
    </div>

));
export default Field;
