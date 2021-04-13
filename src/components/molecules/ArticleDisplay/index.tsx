import styles from './styles.module.sass';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

const ArticleDisplay: React.VFC = () => {
    const router = useRouter();
    // const topicId = `${router.query.id}`;
    const topicId = router.query.id;
    console.log(topicId);
    type topicType = any;
    const [topicData,changeTopic] = useState<topicType>([])

    useEffect(()=>{
        (async () => {
            const url = `http://localhost:3000/api/v1/topics/${topicId}`
            const topicsData = await fetch(url);
            const response = await topicsData.json();
            console.table(topicData)
            return changeTopic(response);
        })();
    },[])

    return (
        <div className={styles.textBox}>
            <h1 className={styles.articleTitle}>{topicData.title}</h1>
            {/*<p className={styles.articleWriter}>{topicData.user.name}</p>*/}
            <p className={styles.articleDetail}>{topicData.text}</p>
            <p>test</p>
        </div>
    )
}
export default ArticleDisplay;
