import React from "react";
import { PrimaryButton } from "components/atoms";
import { BackLinkHeader, LoginEntryForms } from "components/molecules";

const LoginTemplate: React.VFC = () => {
  return (
    <div>
      <BackLinkHeader />
      <main>
        <LoginEntryForms />
        <PrimaryButton text="LOGIN" />
      </main>
    </div>
  );
};
export default LoginTemplate;
