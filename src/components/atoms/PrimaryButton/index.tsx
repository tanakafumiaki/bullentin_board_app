import React from "react";
import styles from "./styles.module.sass";

interface Props {
  text: string;
  onClick: (onClick: any) => void;
}

const PrimaryButton: React.VFC<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>{text}</button>
    </div>
  )
};

export default PrimaryButton;
