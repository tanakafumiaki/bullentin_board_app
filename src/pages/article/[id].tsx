import { ArticleTemplate } from "components/templates";
import React from "react";

interface Props {
    title: string
    text: string
    userName: string
}

const ArticlePage: React.VFC<Props> = ({title, text, userName}) => {
    return (
        <div>
            <ArticleTemplate
                title={`${title}`}
                text={`${text}`}
                userName={`${userName}`}
            />
        </div>
    )
};

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export async function getStaticPaths() {
    const url = `http://localhost:3000/api/v1/topics`
    const res = await fetch(url)
    const repos = await res.json()
    const paths = repos.map((repo:any) => `/article/${repo.id}`)
    // 事前ビルドしたいパスをpathsとして渡す
    console.log(paths);
    return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps({params}:any) {
    const id = params.id
    const url = `http://localhost:3000/api/v1/topics/${id}`
    const res = await fetch(url)
    const topic = await res.json()
    const title = topic.title
    const text = topic.text
    const userName = topic.user.name
    return { props: { title, text, userName } }
}

export default ArticlePage;
