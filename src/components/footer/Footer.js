import React from "react";
import { Container } from "@mui/material";

import styles from './Footer.module.css';


const Footer = () => {

    return (
        <Container maxWidth='lg'>
            <div className={styles.container}>
                <section className={styles.top}>
                    <div className={styles.topInTop}>
                        <p>همراهان دکتر ساینا:</p>
                    </div>
                    <div></div>
                </section>
                <section className={styles.bottom}>

                </section>
            </div>
        </Container>
    )
}

export default Footer;