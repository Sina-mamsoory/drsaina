import { Container } from "@mui/material";
import React from "react";
import SearchSection from "./shared/SearchSection";
import WhyDrSaina from "./../shared/WhyDrSaina";

import styles from './MainBody.module.css';
import ConsultantList from "./shared/ConsultantList";
import FAQ from "./shared/FAQ";

const MainBody = () => {
    return(
        <Container maxWidth='lg'>
            <div className={styles.container}>
                <SearchSection />
                <WhyDrSaina />
                <ConsultantList />
                <FAQ />
            </div>
        </Container>
       
    )
}

export default MainBody;