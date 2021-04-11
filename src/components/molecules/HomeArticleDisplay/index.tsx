import styles from './styles.module.sass';
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomeArticleDisplay = () => {
    type topicType = any;
    const [topicsData,changeArticles] = useState<topicType>([])

    useEffect(()=>{
        (async () => {
            // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/topics'
            // localの場合は以下
            const url = `http://localhost:3000/api/v1/topics`
            // const topicsData = await fetch(url)
            //アクセストークンを取得しfecth実行
            const token = sessionStorage.getItem('token');
            const topicsData = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            const response = await topicsData.json()
            return changeArticles(response)
        })();
    },[])

    return (
        <div>
            {topicsData.map(
                (topicData: any) => {
                    return (
                        <Link as={`article/${topicData.id}`} href={`/article?id=${topicData.id}`}>
                            <tr className={styles.textBox}>
                                <td className={styles.articleWriter}>{topicData.user.name}</td>
                                <td className={styles.articleTitle}>{topicData.title}</td>
                            </tr>
                        </Link>
                    )
                }
            )}
        </div>
    )
}

export default HomeArticleDisplay;
