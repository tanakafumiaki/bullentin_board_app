import { SignUpTemplate } from "components/templates";
import React, { useEffect } from "react";

const SignPage: React.VFC = () => {
  useEffect(() => {
    console.log("HOGE");
    (async () => {
      const response = await fetch("http://localhost:3000");
    })();
  }, []);
  return <SignUpTemplate />;
};
export default SignPage;
