import { useForm } from "react-cool-form";
import styles from "./styles.module.sass";
import React from "react";
import { useInput } from "hooks";
import { useRouter } from 'next/router';
import Field from "components/atoms/Field";

const LoginValidationForm = () => {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const router = useRouter();

    const onClickLogin = async () => {
        // localで確認する場合は以下
        //const response = await fetch("http://localhost:3000/api/v1/auth/sign_in", {
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
            (data);
            router.push('/home');
        } else {
            alert("メールアドレスまたはパスワードが間違っています")
        };
    };
    const { form, mon } = useForm({
        defaultValues: { email: "", password: "" },
        onSubmit: () => onClickLogin(),
    });
    const errors = mon("errors", { errorWithTouched: true });


    return (
        <form ref={form} noValidate>
            <Field
                label="Email"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
                required
                minLength={6}
                error={errors.email}
            />
            <Field
                label="Password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                required
                minLength={6}
                error={errors.password}
            />
            <div className={styles.wrapper}>
                <button type="submit" className={styles.button} onClick={onClickLogin}>LOGIN</button>
            </div>

        </form>
    );
};
export default LoginValidationForm;