import styles from './styles.module.sass';
import React from "react";
import dayjs from 'dayjs';

interface Props {
    created_at: string;
}

const CreatedAtArticle: React.VFC<Props> = ({ created_at }) => {
    const createTime = dayjs(created_at);
    return (
        <p className={styles.CreateTime}>{createTime.format('YYYY-MM-DD HH:mm')}</p>
    )
}
export default CreatedAtArticle;
