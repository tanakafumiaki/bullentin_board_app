import styles from './styles.module.sass';
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading, CreatedAt } from "components/atoms";

const HomeArticleDisplay = () => {
    type topicType = any;
    const [topicsData, changeArticles] = useState<topicType>()

    useEffect(() => {
        (async () => {
            const url = 'https://bullentin-board-api.herokuapp.com/api/v1/topics'
            // localの場合は以下
            // const url = `http://localhost:3000/api/v1/topics`
            //アクセストークンを取得しfecth実行
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client')
            const topicsData = await fetch(url, {
                method: 'GET',
                headers: {
                    'access-token': `${accessToken}`,
                    'uid': `${uid}`,
                    'client': `${client}`,
                    'Content-Type': 'application/json',
                },
            })
            const response = await topicsData.json()
            return changeArticles(response)
        })();
    }, [])

    if (topicsData) {
        return (
            <div>
                {topicsData.map(
                    (topicData: any) => {
                        return (
                            <table key={topicData.id} className={styles.textBox}>
                                <tbody>
                                    <Link as={`article/${topicData.id}`} href={`/article?id=${topicData.id}`}>
                                        <tr>
                                            <td className={styles.articleWriter}>{topicData.user.name}</td>
                                            <td className={styles.articleTitle}>{topicData.title}</td>
                                            <CreatedAt Data={{topicData}}/>
                                        </tr>
                                    </Link>
                                </tbody>
                            </table>
                        )
                    }
                )}
            </div>
        )
    } else {
        return (
            <div className={styles.loading}>
                <Loading/>
            </div>
        )
    }
}
export default HomeArticleDisplay;
