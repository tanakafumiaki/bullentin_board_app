import { useForm } from "react-cool-form";
import styles from "./styles.module.sass";
import React from "react";
import { useInput } from "hooks";
import { useRouter } from 'next/router';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: any
    type: any
    label: any
    id: any
    error: any
    value: string
    required: any
    minLength: any
}

const Field: React.VFC<Props> = ({ onChange, value, label, id, error, ...rest }) => (

    <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input id={id} onChange={onChange} value={value} className={styles.textarea} {...rest} />
        {error && <p>{error}</p>}
    </div>

);

const ValidationForm = () => {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const router = useRouter();
    const { form, mon } = useForm({
        defaultValues: { email: "", password: "" },
        onSubmit: () => onClickLogin(),
    });
    const errors = mon("errors", { errorWithTouched: true });

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
            console.log(data);
            const accessToken: any = response.headers.get("access-token");
            const client: any = response.headers.get("client");
            const uid: any = response.headers.get("uid");
            sessionStorage.setItem('access-token', accessToken);
            sessionStorage.setItem('client', client);
            sessionStorage.setItem('uid', uid);
            router.push('/home');
        } else {
            router.push('/login')
            alert("ログインまたはパスワードが間違っています")
        };
    };


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
                <input type="submit" className={styles.button} value={"LOGIN"} onClick={onClickLogin} />
            </div>

        </form>
    );
};
export default ValidationForm;
