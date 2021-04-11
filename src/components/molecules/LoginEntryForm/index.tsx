import React from "react";
import { EntryForm, PrimaryButton } from "components/atoms";
import styles from "./styles.module.sass";
import { useInput } from "hooks";

const LoginEntryForms: React.VFC = () => {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    const onClickLogin = async () => {
        const response = await fetch("http://localhost:3000/api/v1/auth/sign_in", {
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
        } else {
            alert("エラーが発生しました")
        }
    }
    return (
        <div className={styles.container}>
            <EntryForm text="Name" name={email} onChange={onChangeEmail} />
            <EntryForm text="Password" password={password} onChange={onChangePassword} />
            <PrimaryButton text="LOGIN" onClick={onClickLogin} />
        </div>
    );
};

export default LoginEntryForms;
