import React from "react";
import styles from "./styles.module.sass";
import text from "node-html-parser/dist/nodes/text";

interface Props {
    onClick: () => void;
    text: string
}

const AddButton: React.VFC<Props> = ({ onClick, text }) => {
    return (
        <button className={styles.addButton} onClick={onClick}>{text}</button>
    )
}

export default AddButton;

