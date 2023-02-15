import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Box, Button, Divider, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import Profilepic from '../../assets/images/image.jpg'
import { purple } from '@mui/material/colors';
import Linkedin from '../../assets/images/linkedin.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';


export default function About(props) {

    return (
        <>

            <main>

                < Grid container spacing={0.5}>

                    <Grid item sm={12} xs={12} md={4} lg={4} sx={{ position: 'relative' }}>
                        <LeftPanel darkTheme={props.darkTheme} />
                    </Grid>


                    <Grid item sm={12} xs={12} md={8} lg={8}>

                        <RightPanel darkTheme={props.darkTheme} />

                    </Grid>

                </Grid>

            </main>




        </>
    )
}
