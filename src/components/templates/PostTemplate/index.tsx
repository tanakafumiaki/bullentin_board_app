import React from "react";
import { PrimaryButton } from 'components/atoms'
import { Header, ArticleForm } from 'components/molecules'

const PostTemplate: React.VFC　= () => {
    return (
        <div>
            <Header/>
            <main>
                <ArticleForm/>
                <PrimaryButton text="POST"/>
            </main>
        </div>
    )
}
export default PostTemplate;
