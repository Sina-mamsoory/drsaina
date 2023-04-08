import React  from "react";
import { Container } from "@mui/material";

import styles from './TopSection.module.css'


const TopSection = () => {

    return(
        <Container maxWidth='lg'>
            <div className={styles.container}>
                <div className={styles.sectionInfo}>
                    <h1>مشاوره آنلاین با 105 نفر از متخصصین مشاوره جنسی و زناشویی (سکسولوژی)</h1>
                </div>
                <div className={styles.buttons}>
                    <button>به من پزشک پیشنهاد دهید</button>
                    <button>خودم انتخاب می کنم</button>
                </div>
            </div>
        </Container>
    )
}

export default TopSection;