import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

export default function AboutMe(props) {


    return (
        <>

            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />
                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginTop: '20px', marginRight: '20px', }}>
                    <Grid sx={{ padding: '10px' }}>
                        <Typography color="primary" sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>About Me </Typography>
                        <Divider />

                        <div style={{ padding: '10px', justifyContent: 'space-between' }}>
                            <Typography style={{ fontWeight: 'bold' }} variant='body1'>Hello! I'm Rajesh Banoth,</Typography>

                            <Typography>Front-End and Back-End Developer from Delhi,India.I have rich experience in MERN stack,Also iam  good at mysql,oracle db</Typography>

                        </div>


                        <Grid container spacing={2} sx={{ padding: '10px' }}>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography>Age : 26</Typography>

                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography>Residence : India</Typography>

                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography>freelance : Availble</Typography>

                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography>Address : New Delhi</Typography>

                            </Grid>


                        </Grid>


                    </Grid>
                </Paper>

            </ThemeProvider>

        </>
    )
}
