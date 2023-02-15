import { Avatar, CssBaseline, Divider, Grid, IconButton, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import Profilepic from '../../assets/images/image.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ProfileImage(props) {
    

    return (
        <>
                    <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />
                <Paper  style={{margin:'20px', borderRadius:'10px', textAlign:'center' , alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                    <Grid container  spacing={1} style={{padding:'20px'}}>
                          <Grid item sm={12} xs={12} md={3} lg={3} paddingLeft={20}>
                            <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                            <Avatar
                                alt="my Photo"
                                src={Profilepic}
                                sx={{ width: 150, height: 150 }}
                            />
                           

                           </div>
                            
                         

                         </Grid>
                         <Grid item  sm={12} xs={12} md={6} lg={6} >
                          <Typography sx={{padding:"10px"}} variant='h5' style={{fontWeight:'bold'}}>Rajesh Banoth</Typography>
<Typography >Full Stack Developer</Typography>

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
                         </Grid>
                        </Grid>

                    </Paper>
                        </ThemeProvider>
        </>
    )
}
