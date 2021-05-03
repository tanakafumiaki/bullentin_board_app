import React from "react";
import styles from "./styles.module.sass";

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommentForm: React.VFC<Props> = ({ onChange, value }) => {
    return (
        <div>
            <input className={styles.textarea} placeholder={"Add a Comment"} onChange={onChange} value={value} id={"commentForm"}/>
        </div>
    )
};

export default CommentForm;
