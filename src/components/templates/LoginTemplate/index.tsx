import React from "react";
import { BackLinkHeader } from 'components/molecules'
import { ValidationForm } from 'components/atoms'

const LoginTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <ValidationForm />
            </main>
        </div>
    )
}
export default LoginTemplate;
