import React from "react";
import { EntryForm, PrimaryButton } from "components/atoms";
import styles from "./styles.module.sass";
import { useInput } from "hooks";
import { useRouter } from 'next/router';

const SignUpEntryForms: React.VFC = () => {
    const [name, onChangeName] = useInput();
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const [passwordConfirmaton, onChangePasswordConfirmation] = useInput();
    const router = useRouter();

    const onClickSignUp = async () => {
        const response = await fetch("http://localhost:3000/api/v1/auth", {
            body: JSON.stringify({
                name,
                email,
                password,
                passwordConfirmaton
            }),
            headers: {
                "Content-Type": "application/json",
            },

            method: "POST"
        })
        if (response.status === 200) {
            const { data } = await response.json();
            console.log(data);
            router.push('/home');
        } else {
            router.push('/signup');
            alert("エラーが発生しました")
        }
    }


    return (
        <div className={styles.container}>
            <EntryForm text="Name" name={name} onChange={onChangeName} />
            <EntryForm text="Email" email={email} onChange={onChangeEmail} />
            <EntryForm text="Password" password={password} onChange={onChangePassword} />
            <EntryForm text="PasswordConfirmation" passwordConfirmaton={passwordConfirmaton} onChange={onChangePasswordConfirmation} />
            <PrimaryButton text="SIGNUP" onClick={onClickSignUp} />
        </div>
    );
};

export default SignUpEntryForms;