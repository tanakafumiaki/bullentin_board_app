import React from "react";
import { BackLinkHeader } from 'components/molecules';
import { LoginValidationForm } from "components/organisms";

const LoginTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <LoginValidationForm />
            </main>
        </div>
    )
}
export default LoginTemplate;
