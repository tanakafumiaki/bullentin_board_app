import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.sass";
import { AddButton, CommentForm, CreatedAt } from "components/atoms";
import { useInput } from "hooks";

type CommentType = [];

const PostComment = () => {
    const [flg, setFlg] = useState("Heads");
    const router = useRouter()
    const [id, setId] = useState<number>()
    const [commentsData, changeComment] = useState<CommentType>([]);
    const [text, setText] = useInput();

    // const [text, onChangeComment] = useInput();
    const resetForm = () => {
        const element:HTMLFormElement = document.getElementById( "commentForm" ) as HTMLFormElement;
        element.value = ""
    };

    const onChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        // setText(event.target.value)
        // console.log(event);
        setText(event)
    };

    // const resetForm = () => {
    //     console.log(text)
    //     setText('')
    // };

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

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
            changeComment(response);
        })();
    }, [flg])

    const onClickComment = async () => {
        if(text !== ""){
            const topic_id = id
            const accessToken = sessionStorage.getItem('access-token');
            const uid = sessionStorage.getItem('uid');
            const client = sessionStorage.getItem('client')
            // localで確認する場合は以下
            // const response = await fetch("http://localhost:3000/api/v1/comments", {
            const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/comments", {
                body: JSON.stringify({
                    text,
                    topic_id
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
                if (flg == "Heads") {
                    setFlg("Tails")
                } else {
                    setFlg("Heads")
                }
            } else {
                alert("エラーが発生しました。再度投稿してください。")
            };
        }else{
            alert("コメントを記入してください。")
        }
    }
    const topicComments = commentsData.filter((item: {topic_id: number, key: [], user:{name:string}, text:string}) => item.topic_id === id)

    if (topicComments) {
        return (
            <div>
                {topicComments.map(
                    (comment: {created_at: string, user:{name:string}, text:string}) => {
                        return (
                            <table key={comment.created_at} className={styles.table}>
                                <tbody>
                                    <tr className={styles.textBox}>
                                        <td className={styles.username}>{comment.user.name}</td>
                                        <td className={styles.textarea}>{comment.text}</td>
                                        <CreatedAt created_at={comment.created_at}/>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                )}
                <div className={styles.commentBox}>
                    <p className={styles.formTitle}>CommentForm</p>
                    <AddButton text={"reset"} onClick={resetForm} />
                    <AddButton text={"add"} onClick={onClickComment} />
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
