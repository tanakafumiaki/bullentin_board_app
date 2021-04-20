import React from "react";
import { Header, ArticleDisplay, PostComment } from 'components/molecules'

const ArticleTemplate: React.VFC　= () => {
    return (
        <div>
            <Header/>
            <main>
                <ArticleDisplay/>
                <PostComment/>
            </main>
        </div>
    )
}
export default ArticleTemplate;
