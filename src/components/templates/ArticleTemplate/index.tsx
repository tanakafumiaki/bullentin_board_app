import React from "react";
import { CommentDisplay } from 'components/atoms'
import { Header, ArticleDisplay, CommentForm } from 'components/molecules'

interface Props {
    title: string
    text: string
    userName: string
}

const ArticleTemplate: React.VFC<Props>　= ({title, text, userName}) => {
    return (
        <div>
            <Header/>
            <main>
                <ArticleDisplay
                    title={`${title}`}
                    text={`${text}`}
                    userName={`${userName}`}
                />
                <CommentDisplay/>
                <CommentForm/>
            </main>
        </div>
    )
}
export default ArticleTemplate;
