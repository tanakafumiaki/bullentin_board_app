import React from "react";
import { OnClickButton} from 'components/atoms'
import { useRouter } from 'next/router';

interface Props {
    text: string;
}

const LogoutButton: React.VFC<Props>　= ({text}) => {
    const router = useRouter();

    const onClickLogout = async () => {
        sessionStorage.removeItem('access-token');
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('client');
        const accessToken = sessionStorage.getItem('access-token');
        const uid = sessionStorage.getItem('uid');
        const client = sessionStorage.getItem('client')
        console.log(accessToken);
        console.log(uid);
        console.log(client);
        if (accessToken == null || uid == null || client == null) {
            router.push({pathname: '/'})
        } else {
            alert("エラーが発生しました")
        };
    }
    return (
        <div>
            <OnClickButton text={text} onClick={onClickLogout}/>
        </div>
    )
}
export default LogoutButton;
