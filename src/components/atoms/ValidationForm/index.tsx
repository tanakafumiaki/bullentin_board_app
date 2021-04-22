import { useForm } from "react-cool-form";
import styles from "./styles.module.sass";
import React from "react";
// import { useRouter } from 'next/router';

const Field = ({ label, id, error, ...rest }) => (
    <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input id={id} className={styles.textarea} {...rest} />
        {error && <p>{error}</p>}
    </div>
);

const onClickLogin = async (values:any) => {
    // const router = useRouter();
    const email = values.email;
    const password = values.password;
    // localで確認する場合は以下
    const response = await fetch("http://localhost:3000/api/v1/auth/sign_in", {
    // const response = await fetch("https://bullentin-board-api.herokuapp.com/api/v1/auth/sign_in", {
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
        // router.push('/home');
    } else {
        // router.push('/login')
        alert("エラーが発生しました")
    };
};

const ValidationForm = () => {
    const { form, mon } = useForm({
        defaultValues: { email: "", password: "" },
        onSubmit: (values) => onClickLogin(values),
    });
    const errors = mon("errors", { errorWithTouched: true });
    return (
        <form ref={form} noValidate>
            <Field
                label="Email"
                id="email"
                name="email"
                type="email"
                required
                error={errors.email}
            />
            <Field
                label="Password"
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                error={errors.password}
            />
            <div className={styles.wrapper}>
                <input type="submit" className={styles.button} value={"LOGIN"}/>
            </div>

        </form>
    );
};
export default ValidationForm;
