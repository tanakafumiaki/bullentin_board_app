import styles from './styles.module.sass';
import React from "react";

interface Props {
    title: string
}

const PrimaryTitle: React.VFC<Props> = ({ title }) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    )
}
export default PrimaryTitle;
