import React from "react";
import { CommentDisplay, CommentForm } from 'components/atoms'
import { Header, ArticleDisplay } from 'components/molecules'

const ArticleTemplate: React.VFC　= () => {
    return (
        <div>
            <Header/>
            <main>
                <ArticleDisplay/>
                <CommentDisplay/>
                <CommentForm/>
            </main>
        </div>
    )
}
export default ArticleTemplate;
