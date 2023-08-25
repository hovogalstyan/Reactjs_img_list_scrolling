import React from 'react';
import { SyncLoader} from "react-spinners";
import styles from '../Styles/isLoading.module.css'
const Loading = () => {
    return (
        <div className={styles.isLoading}>
            <SyncLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;