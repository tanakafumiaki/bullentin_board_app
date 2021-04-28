import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.sass";
import { AddButton, CommentForm, CreatedAt } from "components/atoms";
import { useInput } from "hooks";

const PostComment = () => {
    const [flg, setFlg] = useState("Heads");
    const router = useRouter()
    const [id, setId] = useState<number>()
    type commentType = any;
    const [commentsData, changeComment] = useState<commentType>([]);
    const [text, onChangeComment] = useInput();

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    useEffect(() => {
        (async () => {
            //const url = 'https://bullentin-board-api.herokuapp.com/api/v1/comments'
            // localで確認する場合は以下
            const url = `http://localhost:3000/api/v1/comments`;
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
    }, [flg])

    const onClickComment = async () => {
        if (text !== "") {
            const topic_id = { id }.id
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client')
            // localで確認する場合は以下
            const response = await fetch("http://localhost:3000/api/v1/comments", {
                //const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/comments", {
                body: JSON.stringify({
                    text: text,
                    topic_id: topic_id
                }),
                headers: {
                    'access-token': `${accessToken}`,
                    'uid': `${uid}`,
                    'client': `${client}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            })
            if (response.status === 201) {
                // console.log(text);
                if (flg == "Heads") {
                    const change = "Tails";
                    return setFlg(change)
                } else {
                    const change = "Heads";
                    return setFlg(change)
                }
            } else {
                alert("エラーが発生しました")
            };
        } else {
            alert("コメントを記入してください。")
        }
    }
    const topicComments = commentsData.filter((item: any) => item.topic_id === id)

    if (topicComments) {
        return (
            <div>
                {topicComments.map(
                    (comment: any) => {
                        return (
                            <div>
                                <tr className={styles.textBox}>
                                    <td className={styles.username}>{comment.user.name}</td>
                                    <td className={styles.textarea}>{comment.text}</td>
                                    <CreatedAt Data={{ comment }} />
                                </tr>
                            </div>
                        )
                    }
                )}
                <div className={styles.commentBox}>
                    <p className={styles.formTitle}>CommentForm</p>
                    <AddButton onClick={onClickComment} />
                    <CommentForm value={text} onChange={onChangeComment} />
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default PostComment;
