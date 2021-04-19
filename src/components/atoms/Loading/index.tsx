import React from "react";
import { useLoading, ThreeDots } from '@agney/react-loading'
import styles from "./styles.module.sass";

const Loading: React.VFC = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <div>
            <ThreeDots width="100" />
        </div>,
    });
    return (
        <div className={styles.loading}>
            <section {...containerProps}>
                {indicatorEl} {/* renders only while loading */}
            </section>

        </div>
    );
}
export default Loading
