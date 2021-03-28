
import React from "react";
import { PrimaryTitle } from 'components/atoms'
import { TopButtons } from "components/molecules"


const PostTemplate: React.VFC = () => {
    return (
        <div>
            <PrimaryTitle title="Bulletin board" />
            <TopButtons />
        </div>
    )
}
export default PostTemplate;
