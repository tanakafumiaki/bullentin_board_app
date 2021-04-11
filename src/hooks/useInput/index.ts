import React, { useState } from "react";
type Response = () => [string, (event: React.ChangeEvent<HTMLInputElement>) => void];
const useInput: Response = () => {
    const [value, setValue] = useState("")
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return [value, onChange];
}
export default useInput;
