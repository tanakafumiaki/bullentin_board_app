import React from "react";
import styles from './styles.module.sass';

interface Props {
    text: string;
    onClick: () => void;
}

const OnClickButton: React.VFC<Props> = ({ text,onClick }) => {
    return (
        <button className={styles.LogoutButton} onClick={onClick}>{text}</button>
    )
}

export default OnClickButton;
