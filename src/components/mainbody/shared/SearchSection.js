import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

import styles from './SearchSection.module.css';
import SearchIcon from '@mui/icons-material/Search';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const SearchSection = () => {

    const [inputValue, setInputValue] = useState('')

    return (
        <Container maxWidth='lg'>
                <div className={styles.container}>
                <div className={styles.sectionInfo}>
                    <h1>مشاوره آنلاین پزشکی</h1>
                    <p className={styles.contact}>
                        <span>با بیش از 2500 پزشک در 43 تخصص به صورت </span>
                        <span className={styles.contactType}>
                            <span>متنی </span>
                            <span>صوتی </span>
                            <span>تلفنی </span>
                        </span>
                        <span className={styles.lastChild}>گفتگو کنید</span>
                    </p>
                    <p><Link>چطور مشاوره آنلاین بگیرم؟</Link></p>
                </div>
                <div className={styles.searchInput} >
                    <input type='search' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='جستوجوی پزشک، تخصص، بیماری' />
                    <button ><div><SearchIcon fontSize="large" /></div></button>
                </div>
                <div className={styles.lastConsultation}>
                    <span><AccessAlarmIcon style={{position: 'relative', top: '8px'}}/> <span>6 ثانیه پیش </span></span>
                    آخرین مشاوره دریافت شده در
                    <span> متخصص زنان و زایمان </span>
                </div>
            </div>
        </Container>
        
    )
}

export default SearchSection;
