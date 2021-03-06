import React from "react";
import { EntryForm, PrimaryButton } from "components/atoms";
import { RevealPasswordForm } from "components/molecules";
import styles from "./styles.module.sass";
import { useInput } from "hooks";
import { useRouter } from 'next/router';

const LoginEntryForms: React.VFC = () => {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    //const router = useRouter();

    const onClickLogin = async () => {
        //const accessToken = sessionStorage.getItem('access-token');
        //const uid = sessionStorage.getItem('uid');
        //const client = sessionStorage.getItem('client');
        // localで確認する場合は以下
        // const response = await fetch("http://localhost:3000/api/v1/auth/sign_in", {
        const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/auth/sign_in", {
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-Type": "application/json",
            },

            method: "POST"
        })
        if (response.status === 200) {
            const { data } = await response.json();
            console.log(data);
            const accessToken: any = response.headers.get("access-token");
            const client: any = response.headers.get("client");
            const uid: any = response.headers.get("uid");
            sessionStorage.setItem('access-token', accessToken);
            sessionStorage.setItem('client', client);
            sessionStorage.setItem('uid', uid);
            //router.push('/home');
        } else {
            //router.push('/login')
            alert("エラーが発生しました")
        };
    };


    return (
        <div className={styles.container}>
            <EntryForm text="Email" value={email} onChange={onChangeEmail} />
            <RevealPasswordForm text="Password" value={password} onChange={onChangePassword} />
            <PrimaryButton text="LOGIN" onClick={onClickLogin} />
        </div>
    );
};

export default LoginEntryForms;
