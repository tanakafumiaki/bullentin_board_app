import styles from './styles.module.sass';
import React from "react";
import dayjs from 'dayjs';

interface Props {
    Data: any;
}

const CreatedAt: React.VFC<Props> = ({Data}) => {
    const createTime = dayjs(Data.created_at);
    return (
        <td className={styles.CreateTime}>{createTime.format('YYYY-MM-DD HH:mm')}</td>
    )
}
export default CreatedAt;
