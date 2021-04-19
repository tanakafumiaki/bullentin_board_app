import { useState } from "react";
import styles from "./styles.module.sass";

interface Props {
    text: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RevealPasswordForm: React.VFC<Props> = ({ text, onChange, value }) => {
    const [isRevealPassword, setIsRevealPassword] = useState(false);

    const togglePassword = () => {
        setIsRevealPassword((prevState) => !prevState);
    }


    return (
        <div>
            <label className={styles.label}>
                {text}
            </label>
            <input className={styles.textarea}
                type={isRevealPassword ? 'text' : 'password'}
                onChange={onChange}
                value={value} />
            <span
                onClick={togglePassword}
                role="presentation"
                className={styles.PasswordReveal}
            >
                {isRevealPassword ? (
                    <i className="fas fa-eye" />
                ) : (
                    <i className="fas fa-eye-slash" />
                )}
            </span>
        </div>
    )
};

export default RevealPasswordForm;
