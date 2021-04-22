import React from "react";
import { BackLinkHeader, LoginEntryForms } from 'components/molecules'
import { ValidationForm } from 'components/atoms'

const LoginTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <LoginEntryForms />
                <ValidationForm />
            </main>
        </div>
    )
}
export default LoginTemplate;
