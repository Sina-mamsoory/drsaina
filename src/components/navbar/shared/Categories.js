import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import styles from './Categories.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Categories = ({status}) => {

    return(
        <div className={status ? styles.containerShow: styles.containerNotShow}>
            <Grid container spacing={8}>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص پوست و مو <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص روانپزشکی و اعصاب و روان <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص و جراح گوش و حلق و بینی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص بیماری های عفونی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص زنان و زایمان <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>                    
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص پزشکی قانونی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> متخصص قلب و عرق <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                </Grid>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> کلینیک مشاوره جنسی و زناشویی(سکسولوژی) <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص و جراح کلیه و مجاری ادراری (ارولوژی) <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک گوارش و کبد <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>پزشک عمومی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص خون و آنکولوژی (سرطان) <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص طب سالمندان <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>جراحی سرطان <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                </Grid>
                <Grid item textAlign= 'right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک مشاوره کرونا <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک غدد, رشدو متابولیسم <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک تغذیه و رژیم درمانی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک ایمونولوژی و آلرژی (آسم و آلرژی) <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>کلینیک ژنتیک <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص دندانپزشکی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص بیهوشی و مراقبت های ویژه <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                </Grid>
                <Grid item textAlign='right'>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص کودکان و اطفال <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>مشاوره روانشناسی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> جراح مغز و اعصاب <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص و فوق تخصص داخلی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> جراحی عمومی<KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>متخصص طب مکمل و سنتی <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                    <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'>مشاهده سایر دسته بندی ها <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories;