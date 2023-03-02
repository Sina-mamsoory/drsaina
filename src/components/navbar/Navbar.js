import { Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./shared/Categories";

import styles from './Navbar.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const [status , setStatus]= useState(false)

    console.log( status )

    return (
        <Container maxWidth='lg'>
            <div className={styles.container}>
                <div>
                    Logo
                </div>
                <div >
                    <ul className={styles.list}>
                        <li className={styles.dropdown} onMouseOver={() => setStatus(true)} onMouseOut={() => setStatus(false)}>
                            <Link className={styles.link}>
                                مشاوره پزشکی
                                <KeyboardArrowDownIcon fontSize="small" style={{color: 'silver', transform: status ? 'rotate(-180deg)': 'rotate(0deg)', transition: 'all 0.1s ease-in' }}/>
                            </Link>
                            <Categories status={status}/>
                        </li>
                        <li>مشاوره روانشناسی</li>
                        <li>آزمایش در محل</li>
                        <li>نوبت دهی</li>
                        <li>بانک سلامت</li>
                        <li>مجله سلامت</li>
                    </ul>
                </div>
                <div className={styles.lastPartForm}>
                    <div className={styles.form}>
                        ورود / ثبت نام
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar;