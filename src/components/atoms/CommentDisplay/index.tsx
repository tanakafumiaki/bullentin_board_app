import React, {useEffect, useState} from "react";
import styles from "./styles.module.sass";
import { useRouter } from "next/router";

const CommentDisplay = () => {
    const router = useRouter()
    const [id, setId] = useState<number>()
    type topicType = any;
    const [topicsData,changeTopics] = useState<topicType>([])

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
            const response = await topicsData.json();
            return changeTopics(response);
        })();
    }},[id])

    type commentType = any;
    const [commentsData,changeComment] = useState<commentType>([]);
    useEffect(()=>{
        (async () => {
            // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/comments'
            // localで確認する場合は以下
            const url = `http://localhost:3000/api/v1/comments`;
            // const commentsData = await fetch(url);
            // アクセストークンを取得しfecth実行
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client')
            const commentsData = await fetch(url,{
                method: 'GET',
                headers: {
                    'access-token': `${accessToken}`,
                    'uid': `${uid}`,
                    'client': `${client}`,
                    'Content-Type': 'application/json',
                },
            })
            const response = await commentsData.json();
            return changeComment(response);
        })();
    },[])
    const comments = commentsData.filter((item:any) => item.topic_id === topicsData.id)

    return (
        <div>
            {comments.map(
                (comment: any) => {
                    return (
                        <tr className={styles.textBox}>
                            <td className={styles.username}>{comment.user.name}</td>
                            <td className={styles.textarea}>{comment.text}</td>
                        </tr>
                    )
                }
            )}
        </div>
    )
}
export default CommentDisplay;
