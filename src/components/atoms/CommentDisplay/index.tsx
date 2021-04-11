import React, {useEffect, useState} from "react";
import styles from "./styles.module.sass";
import { useRouter } from "next/router";

const CommentDisplay = () => {
    const router = useRouter()
    type topicType = any;
    const [topicsData,changeTopics] = useState<topicType>([])

    useEffect(()=>{
        (async () => {
            const topicId = `${router.query.id}`;
            // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/topics'
            // localの場合は以下
            const url = `http://localhost:3000/api/v1/topics/${topicId}`;
            const topicsData = await fetch(url);
            const response = await topicsData.json();
            return changeTopics(response);
        })();
    },[])

    type commentType = any;
    const [commentsData,changeComment] = useState<commentType>([]);
    useEffect(()=>{
        (async () => {
            // const url = 'https://bullentin-board-api.herokuapp.com/api/v1/comments'
            // localで確認する場合は以下
            const url = `http://localhost:3000/api/v1/comments`;
            const commentsData = await fetch(url, {
                method: 'GET'
            });
            const response = await commentsData.json();
            return changeComment(response);
        })();
    },[])
    const comments = commentsData.filter((item:any) => item.topic_id === topicsData.id)

    // console.table(comments)

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
