import styles from './styles.module.sass';
import React from "react";
import { useEffect, useState } from "react";

const HomeArticleDisplay = () => {
    const [topicsData,changeArticle] = useState([])

    useEffect(()=>{
        console.log("fetch")
        // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/topics'
        // localで確認する場合は以下
        const url = `http://localhost:3000/api/v1/topics`
        fetch(url)
            .then( res => res.json() )
            .then( res => {
                changeArticle(res);
            })
    },[])

    return (
        <div>
            {topicsData.map(
                topicsData => {
                    return (
                        <tr className={styles.textBox}>
                            <td className={styles.articleWriter}>{topicsData.user_id}</td>
                            <td className={styles.articleTitle}>{topicsData.title}</td>
                        </tr>
                    )
                }
            )}
        </div>
    )
}

export default HomeArticleDisplay;
