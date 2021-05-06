import React from "react";
import { SignUpValidationForm } from "components/organisms";
import { BackLinkHeader } from 'components/molecules';

const SignUpTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <SignUpValidationForm />
            </main>
        </div>
    )
}
export default SignUpTemplate;
