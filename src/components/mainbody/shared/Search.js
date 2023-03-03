import React from "react";
import styles from './Search.module.css';

const Search = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sectionInfo}>
                <h1>مشاوره آنلاین پزشکی</h1>
                <p>
                    <span>با بیش از 2500 پزشک در 43 تخصص به صورت </span>
                    <span className={styles.contactType}>
                        <span>متنی </span>
                        <span>صوتی </span>
                        <span>تلفنی </span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Search;
