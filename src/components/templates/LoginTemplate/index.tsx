import React from "react";
import { BackLinkHeader, LoginEntryForms } from 'components/molecules'

const LoginTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <LoginEntryForms />
            </main>
        </div>
    )
}
export default LoginTemplate;
