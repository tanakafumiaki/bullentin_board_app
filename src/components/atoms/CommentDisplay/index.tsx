import React, { useEffect, useState } from "react";
import styles from "./styles.module.sass";
import { useRouter } from "next/router";
import { CreatedAt } from "components/atoms";

const CommentDisplay = () => {
    const router = useRouter()
    const [id, setId] = useState<number>()

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    type commentType = any;
    const [commentsData, changeComment] = useState<commentType>([]);
    useEffect(() => {
        (async () => {
            const url = 'https://bullentin-board-api.herokuapp.com/api/v1/comments'
            // localで確認する場合は以下
            // const url = `http://localhost:3000/api/v1/comments`;
            // アクセストークンを取得しfecth実行
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client');
            const commentsData = await fetch(url, {
                method: 'GET',
                headers: {
                    'access-token': `${accessToken}`,
                    'uid': `${uid}`,
                    'client': `${client}`,
                    'Content-Type': 'application/json',
                },
            });
            const response = await commentsData.json();
            return changeComment(response);
        })();
    }, [])
    const topiccomments = commentsData.filter((item: any) => item.topic_id === id)

    if (topiccomments) {
        return (
            <div>
                {topiccomments.map(
                    (comment: any) => {
                        return (
                            <tr className={styles.textBox}>
                                <td className={styles.username}>{comment.user.name}</td>
                                <td className={styles.textarea}>{comment.text}</td>
                                <CreatedAt Data={{comment}}/>
                            </tr>
                        )
                    }
                )}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default CommentDisplay;
