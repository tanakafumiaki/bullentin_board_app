import styles from './styles.module.sass';
import React from "react";
import { PrimaryButton } from 'components/atoms'
import { Header, ArticleForm } from 'components/molecules'

const PostTemplate: React.VFC　= () => {
    return (
        <div>
            <Header/>
            <ArticleForm/>
            <PrimaryButton text="POST"/>
        </div>
    )
}
export default PostTemplate;
