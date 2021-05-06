import { useForm } from "react-cool-form";
import styles from "./styles.module.sass";
import React from "react";
import { useInput } from "hooks";
import { useRouter } from 'next/router';
import Field from "components/atoms/Field";


const SignUpValidationForm = () => {
    const [name, onChangeName] = useInput();
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const [passwordReInput, onChangePasswordReInput] = useInput();
    const router = useRouter();

    const onClickSignUp = async () => {
        // localで確認する場合は以下
        //const response = await fetch("http://localhost:3000/api/v1/auth", {
        const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/auth", {
            body: JSON.stringify({
                name,
                email,
                password,
                passwordReInput
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        })
        if (response.status === 200) {
            const { data } = await response.json();
            (data);
            const accessToken: any = response.headers.get("access-token");
            const client: any = response.headers.get("client");
            const uid: any = response.headers.get("uid");
            sessionStorage.setItem('access-token', accessToken);
            sessionStorage.setItem('client', client);
            sessionStorage.setItem('uid', uid);
            router.push('/home');
        } else {
            alert("メールアドレスまたはパスワードが間違っています")
        };
    };

    const validateOnServer = async (passwordReInput: string) => {
        return passwordReInput === password;
    };
    const validatePasswordReInput = async (value: string) => {
        if (!value) {
            return "このフィールドに入力してください";
        } else {
            const CheckPasswordReInput = await validateOnServer(value);
            if (!CheckPasswordReInput) return "Passwordが異なっています";
        }
    };

    const { form, mon, field } = useForm({
        defaultValues: { name: "", email: "", password: "", passwordReInput: "" },
        onSubmit: () => onClickSignUp(),
    });

    const errors = mon("errors", { errorWithTouched: true })

    return (
        <form ref={form} noValidate>
            <Field
                label="Name"
                id="name"
                name="name"
                type="name"
                value={name}
                onChange={onChangeName}
                required
                minLength={3}
                error={errors.name}
            />
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
            <Field
                label="passwordConfirm"
                id="passwordReInput"
                name="passwordReInput"
                type="password"
                value={passwordReInput}
                onChange={onChangePasswordReInput}
                required
                ref={field(validatePasswordReInput)}
                minLength={6}
                error={errors.passwordReInput}
            />
            <div className={styles.wrapper}>
                <button type="submit" className={styles.button} onClick={onClickSignUp}>SIGNUP</button>
            </div>
        </form>
    );
};
export default SignUpValidationForm;
