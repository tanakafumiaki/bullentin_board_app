import { useForm } from "react-cool-form";
import styles from "./styles.module.sass";
import React from "react";
import { useInput } from "hooks";
import { useRouter } from 'next/router';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    type: string
    label: string
    id: string
    error: string
    value: string
    required: boolean
    minLength: number
}

const Field = React.forwardRef<HTMLInputElement, Props>((props, ref) => (

    <div className={styles.container}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label>
        <input id={props.id} ref={ref} onChange={props.onChange} value={props.value} name={props.name} type={props.type} required={props.required} minLength={props.minLength} className={styles.textarea} />
        {props.error && <p>{props.error}</p>}
    </div>

));

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
            console.log(data);
            const accessToken: any = response.headers.get("access-token");
            const client: any = response.headers.get("client");
            const uid: any = response.headers.get("uid");
            sessionStorage.setItem('access-token', accessToken);
            sessionStorage.setItem('client', client);
            sessionStorage.setItem('uid', uid);
            router.push('/home');
        } else {
            router.push('/signup')
            alert("メールアドレスまたはパスワードが間違っています")
        };
    };

    const validateOnServer = async (passwordReInput: any) => {
        await new Promise((r) => setTimeout(r, 2000));
        return passwordReInput === password;
    };
    const validatePasswordReInput = async (value: any) => {
        if (!value) {
            return "同じPasswordを入力してください";
        } else {
            const hasPasswordReInput = await validateOnServer(value);
            if (!hasPasswordReInput) return "Passwordが異なっています";
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
                id="password"
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
                <input type="submit" className={styles.button} value={"SIGNUP"} onClick={onClickSignUp} />
            </div>

        </form>
    );
};
export default SignUpValidationForm;
