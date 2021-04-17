import React, {useEffect} from "react";
import {TopicTextForm, TitleForm, PrimaryButton} from 'components/atoms'
import { useInput } from "hooks";
import { useRouter } from 'next/router';

const PutPost: React.VFC　= () => {
    const [title, onChangeTitle] = useInput();
    const [text, onChangeText] = useInput();
    const router = useRouter();

    const onClickTopic = async () => {
        const accessToken = sessionStorage.getItem('access-token');
        const uid = sessionStorage.getItem('uid');
        const client = sessionStorage.getItem('client')
        // localで確認する場合は以下
        // const response = await fetch("http://localhost:3000/api/v1/topics", {
        const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/topics", {
            body: JSON.stringify({
                title: title,
                text: text
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
            router.push({pathname: '/home'})
        } else {
            alert("エラーが発生しました")
        };
    }
    return (
        <div>
            <TitleForm value= {title} onChange={onChangeTitle}/>
            <TopicTextForm value={text} onChange={onChangeText}/>
            <PrimaryButton text="POST" onClick={onClickTopic}/>
        </div>
    )
}
export default PutPost;
