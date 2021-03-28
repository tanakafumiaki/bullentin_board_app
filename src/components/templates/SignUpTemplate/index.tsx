import React from "react";
import { PrimaryButton } from 'components/atoms'
import { BackLinkHeader, SignUpEntryForms } from 'components/molecules'

const PostTemplate: React.VFC = () => {
    return (
        <div>
            <BackLinkHeader />
            <main>
                <SignUpEntryForms />
                <PrimaryButton text="SIGN UP" />
            </main>
        </div>
    )
}
export default PostTemplate;