import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.sass";
import { AddButton, CommentForm, CreatedAt } from "components/atoms";
import { useInput } from "hooks";
import { BaseClient } from "clients";

type CommentType = any;

const PostComment = () => {
    const router = useRouter()
    const [id, setId] = useState<number>()
    const [commentsData, changeComment] = useState<CommentType>([]);
    const [text, onChangeComment] = useInput();

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    useEffect(() => {
        (async () => {
            // topic idを指定してコメントをフィルタできるようにRailsの処理を変更する
            const response = await BaseClient.getComments()
            changeComment(response);
        })();
    }, [])

    const resetForm = () => {
        const element:HTMLFormElement = document.getElementById( "commentForm" ) as HTMLFormElement;
        element.value = ""
    };

    const onClickComment = async () => {
        if(text !== ""){
          try {
            // commentを返すようにRailsの処理を変更する
            const comment = BaseClient.postComment({
                    text,
                    topic_id: id
            });
            
            changeComment([...commentsData, comment]);
          } catch {
            alert("エラーが発生しました。再度投稿してください。")
          }
        } else{
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
                            <table key={comment.created_at} className={styles.table}>
                                <tbody>
                                    <tr className={styles.textBox}>
                                        <td className={styles.username}>{comment.user.name}</td>
                                        <td className={styles.textarea}>{comment.text}</td>
                                        <CreatedAt Data={comment}/>
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
