import React, { useEffect, useState } from "react";
import { AddButton, CommentForm } from "components/atoms";
import styles from "./styles.module.sass";
import { useInput } from "hooks";
import { useRouter } from "next/router";

const AddCommentForm: React.VFC = () => {
    const router = useRouter()
    const [id, setId] = useState<number>()
    const [text, onChangeComment] = useInput();

    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            setId(Number(router.query.id));
        }
    }, [router]);

    const onClickComment = async () => {
        const topic_id = { id }.id
        const accessToken = sessionStorage.getItem('access-token');
        const uid = sessionStorage.getItem('uid');
        const client = sessionStorage.getItem('client')
        const response = await fetch("http://localhost:3000/api/v1/comments", {
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
            window.location.reload();
        } else {
            alert("エラーが発生しました")
        };
    }
    return (
        <div className={styles.textBox}>
            <p className={styles.user}>CommentForm</p>
            <AddButton onClick={onClickComment} />
            <CommentForm value={text} onChange={onChangeComment} />
        </div>
    );
};
export default AddCommentForm;
