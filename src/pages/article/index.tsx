import { ArticleTemplate } from "components/templates";
import React, { useEffect, useState } from "react";

const ArticlePage: React.VFC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {})();
  }, []);

  const onClickButton = async (name: string, password: string) => {
    // 永続化したデータを取得
    const token = sessionStorage.getItem("token");

    const response = await fetch("/api/v1/lll");
    const token = response.json();

    // 永続化したデータを取得
    sessionStorage.setItem("token", token);
  };

  return <ArticleTemplate articles={articles} />;
};
export default ArticlePage;
