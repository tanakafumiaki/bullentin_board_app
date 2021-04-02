import React from "react";
import { CommentDisplay } from "components/atoms";
import { Header, ArticleDisplay, CommentForm } from "components/molecules";

const ArticleTemplate: React.VFC = () => {
  return (
    <div>
      <Header />
      <main>
        <ArticleDisplay />
        <CommentDisplay />
        <CommentForm />
      </main>
    </div>
  );
};
export default ArticleTemplate;
