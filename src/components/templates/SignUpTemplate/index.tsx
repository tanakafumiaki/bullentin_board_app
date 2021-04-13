import React from "react";
import { PrimaryButton } from 'components/atoms'
import { BackLinkHeader, SignUpEntryForms } from 'components/molecules'

const SignUpTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <SignUpEntryForms />
            </main>
        </div>
    )
}
export default SignUpTemplate;
