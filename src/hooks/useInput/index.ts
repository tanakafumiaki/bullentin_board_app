import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return [value, onChange];
}

export default useInput;