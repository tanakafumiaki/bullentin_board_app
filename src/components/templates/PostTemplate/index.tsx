import React from "react";
import { Header, PutPost } from 'components/molecules'

const PostTemplate: React.VFC　= () => {
    return (
        <div>
            <Header/>
            <main>
                <PutPost/>
            </main>
        </div>
    )
}
export default PostTemplate;
