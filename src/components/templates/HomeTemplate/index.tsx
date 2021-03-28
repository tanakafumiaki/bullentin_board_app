import React from "react";
import { HomeHeader, HomeArticleDisplays } from 'components/molecules'

const HomeTemplate: React.VFC = () => {
    return (
        <div>
            <HomeHeader />
            <main>
                <HomeArticleDisplays />
            </main>
        </div>
    )
}
export default HomeTemplate;
