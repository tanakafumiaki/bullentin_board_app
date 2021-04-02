import React from "react";
import { PrimaryButton } from "components/atoms";
import { BackLinkHeader, SignUpEntryForms } from "components/molecules";

const SignUpTemplate: React.VFC = () => {
  return (
    <div>
      <BackLinkHeader />
      <main>
        <SignUpEntryForms />
        <PrimaryButton text="LOGIN" />
      </main>
    </div>
  );
};
export default SignUpTemplate;
