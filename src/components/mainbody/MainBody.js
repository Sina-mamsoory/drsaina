import { Container } from "@mui/material";
import React from "react";
import SearchSection from "./shared/SearchSection";
import WhyDrSaina from "./shared/WhyDrSaina";

import styles from './MainBody.module.css';

const MainBody = () => {
    return(
        <Container maxWidth='lg'>
            <div className={styles.container}>
                <SearchSection />
                <WhyDrSaina />
            </div>
        </Container>
       
    )
}

export default MainBody;