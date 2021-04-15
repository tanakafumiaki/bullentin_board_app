import styles from './styles.module.sass';
import React from "react";

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleForm: React.VFC<Props> = ({ onChange, value }) => {
    return (
        <div>
            <input placeholder={"Title"} className={styles.title} onChange={onChange} value={value}/>
        </div>
    )
}
export default TitleForm;
