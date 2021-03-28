import React from "react";
import { HomeArticleDisplay } from "components/molecules"
import styles from "./styles.module.sass";

const HomeArticleDisplays: React.VFC = () => {
    return (
        <div className={styles.container}>
            <HomeArticleDisplay />
            <HomeArticleDisplay />
            <HomeArticleDisplay />
            <HomeArticleDisplay />
            <HomeArticleDisplay />
        </div>
    );
};

export default HomeArticleDisplays;
