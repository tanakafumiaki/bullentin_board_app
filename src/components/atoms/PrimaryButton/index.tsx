import React from "react";
import styles from "./styles.module.sass";

interface Props {
  text: string;
}

const PrimaryButton: React.VFC<Props> = ({ text }) => {
  return (
      <div className={styles.wrapper}>
        <button className={styles.button}>{text}</button>
      </div>
      )
};

export default PrimaryButton;
