import styles from './styles.module.sass';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loading, CreatedAtArticle } from "components/atoms";

const ArticleDisplay: React.VFC = () => {
    const router = useRouter();
    const [id, setId] = useState<number>()
    type topicType = any;
    const [topicData, changeTopic] = useState<topicType>()

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    useEffect(() => {
        if (id) {
            (async () => {
                //const url = `https://bullentin-board-api.herokuapp.com/api/v1/topics/${id}`
                // localで確認する場合は以下
                const url = `http://localhost:3000/api/v1/topics/${id}`
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
                const topicData = await topicsData.json();
                return changeTopic(topicData);
            })();
        }
    }, [id])

    if (topicData) {
        return (
            <div className={styles.textBox}>
                <h1 className={styles.articleTitle}>{topicData.title}</h1>
                <CreatedAtArticle Data={topicData} />
                <p className={styles.articleWriter}>{topicData.user.name}</p>
                <p className={styles.articleDetail}>{topicData.text}</p>
            </div>
        )
    } else {
        return (
            <div className={styles.textBox}>
                <h1 className={styles.articleTitle}><Loading /></h1>
            </div>
        )
    }
}
export default ArticleDisplay;
