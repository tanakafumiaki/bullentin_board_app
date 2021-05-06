import styles from './styles.module.sass';
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading, CreatedAt } from "components/atoms";
import { BaseClient } from 'clients';

const HomeArticleDisplay = () => {
    type topicType = any;
    const [topicsData, changeArticles] = useState<topicType>()

    useEffect(() => {
        (async () => {
            const response = await BaseClient.getTopics();
            return changeArticles(response)
        })();
    }, [])

    if (topicsData) {
        return (
            <div>
                {topicsData.map(
                    (topicData: any) => {
                        return (
                            <table key={topicData.id} className={styles.textBox}>
                                <tbody>
                                    <Link as={`article/${topicData.id}`} href={`/article?id=${topicData.id}`}>
                                        <tr>
                                            <td className={styles.articleWriter}>{topicData.user.name}</td>
                                            <td className={styles.articleTitle}>{topicData.title}</td>
                                            <CreatedAt Data={topicData} />
                                        </tr>
                                    </Link>
                                </tbody>
                            </table>
                        )
                    }
                )}
            </div>
        )
    } else {
        return (
            <div className={styles.loading}>
                <Loading />
            </div>
        )
    }
}
export default HomeArticleDisplay;
