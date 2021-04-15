import React from "react";
import styles from "./styles.module.sass";

interface Props {
    onClick: () => void;
}

const AddButton: React.VFC<Props> = ({ onClick }) => {
    return (
        <button className={styles.addButton} onClick={onClick}>Add</button>
    )
}

export default AddButton;

