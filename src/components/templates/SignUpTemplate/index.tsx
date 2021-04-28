import React from "react";
import { SignUpValidationForm } from 'components/atoms'
import { BackLinkHeader, SignUpEntryForms } from 'components/molecules'

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
