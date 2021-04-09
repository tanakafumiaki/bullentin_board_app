import React from "react";
import { HomeHeader, HomeArticleDisplay } from 'components/molecules'

const HomeTemplate: React.VFC = () => {
    return (
        <div>
            <HomeHeader />
            <main>
                <HomeArticleDisplay />
            </main>
        </div>
    )
}
export default HomeTemplate;
