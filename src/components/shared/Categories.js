import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import styles from './Categories.module.css';

const Categories = () => {

    return(
        <div className={styles.container}>
            <Grid container spacing={12}>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص پوست و مو</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص روانپزشکی و اعصاب و روان</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص و جراح گوش و حلق و بینی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص بیماری های عفونی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص زنان و زایمان</Link></Typography>                    
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص پزشکی قانونی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> متخصص قلب و عرق</Link></Typography>
                </Grid>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'> کلینیک مشاوره جنسی و زناشویی(سکسولوژی)</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>متخصص و جراح کلیه و مجاری ادراری (ارولوژی)</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک گوارش و کبد</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>پزشک عمومی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>متخصص خون و آنکولوژی (سرطان)</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>متخصص طب سالمندان</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>جراحی سرطان</Link></Typography>
                </Grid>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک مشاوره کرونا</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک غدد, رشدو متابولیسم</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک تغذیه و رژیم درمانی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک ایمونولوژی و آلرژی (آسم و آلرژی)</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>کلینیک ژنتیک</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>متخصص دندانپزشکی</Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link style={{textDecoration: 'none', color: '#333333'}} to='/products'>متخصص بیهوشی و مراقبت های ویژه</Link></Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories;