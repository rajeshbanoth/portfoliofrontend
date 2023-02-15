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

export default function LeftPanel(props) {


    return (
        <>


                <Paper style={{ height: '90vh', borderRadius: '20px', padding: '30px', margin: '20px' }}>
                    <img src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d' style={{ borderRadius: '10px' }} width={"100%"} height={"50%"} />
                    <div style={{ marginTop: -90 }} >

                        <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                            <Avatar
                                alt="my Photo"
                                src={Profilepic}
                                sx={{ width: 150, height: 150 }}
                            />

                        </div>

                        <div style={{ textAlign: 'center', justifyContent: 'space-between' }}>
                            <Typography style={{ fontFamily: 'inherit', fontWeight: 'bold', fontSize: 30 }}> Rajesh Banoth</Typography>
                            <Typography color='secondary' variant='b1' style={{ fontWeight: 200 }}> Full Stack Developer</Typography>

                        </div>

                        <div style={{ textAlign: 'center', justifyContent: 'space-between' }}>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>

                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div>



                    </div>




                </Paper>
         

        </>
    )
}
