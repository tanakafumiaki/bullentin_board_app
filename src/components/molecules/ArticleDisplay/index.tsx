import styles from './styles.module.sass';
import React from "react";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {route} from "next/dist/next-server/server/router";

const ArticleDisplay = () => {
    const router = useRouter()
    type topicType = any;
    const [topicData,changeArticle] = useState<topicType>([])

    console.log(router.query.id);

    useEffect(()=>{
        (async () => {
            // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/topics/${topicId}'
            // localの場合は以下
            const topicId = `${router.query.id}`;
            const url = `http://localhost:3000/api/v1/topics/${topicId}`;
            // const token = sessionStorage.getItem("token");
            // const topicData = await fetch(url,{
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'access-token': {token}
            //     }
            // })
            const topicData = await fetch(url);
            const response = await topicData.json();
            return changeArticle(response);
        })();
    },[])

    // const topic = topicData;
    // console.log("start");
    // console.log(topic);
    // console.log(topic.user.name);

    return (
        <div className={styles.textBox}>
            <h1 className={styles.articleTitle}>{topicData.title}</h1>
            {/*<p className={styles.articleWriter}>{topic.user.name}</p>*/}
            <p className={styles.articleWriter}>{topicData.user_id}</p>
            <p className={styles.articleDetail}>{topicData.text}</p>
        </div>
    )
}

export default ArticleDisplay;
