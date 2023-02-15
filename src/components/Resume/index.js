import { Avatar, Divider, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import Profilepic from '../../assets/images/image.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImage from './ProfileImage';
import Address from './Address';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

export default function Index(props) {


    return (
        <>

            < Grid container spacing={0.3}>

                <Grid item sm={12} xs={12} md={6} lg={6} >
<ProfileImage  darkTheme={props.darkTheme}/>
                 
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} >
<Address  darkTheme={props.darkTheme}/>                
                </Grid>

                <Grid item sm={12} xs={12} md={6} lg={6} >
<Experience darkTheme={props.darkTheme}/>                
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} >
<Education darkTheme={props.darkTheme}/>                
                </Grid>

                <Grid item sm={12} xs={12} md={12} lg={12} >
<Skills darkTheme={props.darkTheme}/>                
                </Grid>

            </Grid>

        </>
    )
}
