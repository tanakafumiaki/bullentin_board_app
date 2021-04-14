import styles from './styles.module.sass';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

const ArticleDisplay: React.VFC = () => {
    const router = useRouter();
    const [id, setId] = useState<number>()
    type topicType = any;
    const [topicData,changeTopic] = useState<topicType>()

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    useEffect(()=>{
        if (id) {(async () => {
            const url = `http://localhost:3000/api/v1/topics/${id}`
            // const topicsData = await fetch(url);
            //アクセストークンを取得しfecth実行
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client')
            const topicsData = await fetch(url,{
                method: 'GET',
                headers: {
                    'access-token': `${accessToken}`,
                    'uid': `${uid}`,
                    'client': `${client}`,
                    'Content-Type': 'application/json',
                },
            })
            const topicData = await topicsData.json();
            console.log(topicData)
            return changeTopic(topicData);
        })();
    }},[id])

    if(topicData) {
        return (
            <div className={styles.textBox}>
                <h1 className={styles.articleTitle}>{topicData.title}</h1>
                <p className={styles.articleWriter}>{topicData.user.name}</p>
                <p className={styles.articleDetail}>{topicData.text}</p>
            </div>
        )
    } else {
        return (
            <div className={styles.textBox}>
                <h1 className={styles.articleTitle}>Roading...</h1>
                <p className={styles.articleWriter}>Roading...</p>
                <p className={styles.articleDetail}>Roading...</p>
            </div>
        )
    }
}
export default ArticleDisplay;
