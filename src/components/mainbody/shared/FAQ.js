import { Grid, Typography, ThemeProvider } from "@mui/material";
import React, {useState} from "react";

import styles from './FAQ.module.css';
import {theme} from './breakpoints';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const FAQ = () => {

    const [status1 , setStatus1]= useState(false)
    const [status2 , setStatus2]= useState(false)
    const [status3 , setStatus3]= useState(false)
    const [status4 , setStatus4]= useState(false)

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container} >
                <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                    <Typography component='h2' variant='p' mb={3} fontWeight={500} className={styles.head} >سوالات متداول</Typography>
                    </Grid>
                    <Grid item xs={12} className={styles.questionContainer}>
                       <div className={styles.questions} onClick={() => setStatus1(!status1)}>
                                <p>
                                    چه زمانی تخفیف به من تعلق می گیرد؟  
                                </p>
                                <KeyboardArrowDownIcon fontSize="small" style={{color: 'silver', transform: status1 ? 'rotate(-180deg)': 'rotate(0deg)', transition: 'all 0.1s ease-in'}}/>
                       </div>
                       <div className={styles.questions} onClick={() => setStatus2(!status2)}>
                                <p>
                                    دکتر ساینا را به چند نفر می توانم معرفی کنم؟    
                                </p>
                                <KeyboardArrowDownIcon fontSize="small" style={{color: 'silver', transform: status2 ? 'rotate(-180deg)': 'rotate(0deg)', transition: 'all 0.1s ease-in' }}/>                      
                       </div>
                       <div className={styles.questions} onClick={() => setStatus3(!status3)}>
                                <p>
                                    اگر دکتر ساینا را به کسانی که قبال مشاوره دریافت کرده است معرفی کنم، باز هم به من کد تخفیف تعلق می گیرد؟
                                </p>
                                <KeyboardArrowDownIcon fontSize="small" style={{color: 'silver', transform: status3 ? 'rotate(-180deg)': 'rotate(0deg)', transition: 'all 0.1s ease-in'}}/>                         
                       </div>
                       <div className={styles.questions} onClick={() => setStatus4(!status4)}>
                                <p>
                                    تنها با ثبت نام کسانی که دکتر ساینا را به آنها معرفی کرده ام ، تخفیفی به من تعلق می گیرد؟   
                                </p>
                                <KeyboardArrowDownIcon fontSize="small" style={{color: 'silver', transform: status4 ? 'rotate(-180deg)': 'rotate(0deg)', transition: 'all 0.1s ease-in'}}/>
                       </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default FAQ;