import { CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import Gloom from '../../assets/images/gloom.JPG'
import Tracking from '../../assets/images/tracking.JPG'
import Asrao from '../../assets/images/asrao.JPG'

import FileCompressor from '../../assets/images/filecompressor.JPG'

// import Tracking from '../../assets/images/tracking.JPG'
import { MdWork } from 'react-icons/md'

export function Works(props) {




    return (
        <>

            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />
                <Grid container spacing={2}>
                    <Grid item sm={12} md={12} lg={12} xs={12} style={{ margin: '10px' }}>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            padding: '10px'
                           
                        }}>
                            <MdWork size={40} color='orange' />
                            <span> <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Works </Typography></span>
                        </div>

                        <Divider />



                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                        <Paper style={{ padding: '30px', margin: '30px' }}>

                            <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                <a href='https://gloom.co.in/' target="_blank" rel="noopener noreferrer"><img src={Gloom} width={"100%"} height={"80%"} /></a>
                                <Typography >Blogging App </Typography>
                            </div>

                        </Paper>

                    </Grid>



                    <Grid item sm={12} md={4} lg={4}>
                        <Paper style={{ padding: '30px', margin: '30px' }}>

                            <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                <a href='https://asrao.in/' target="_blank" rel="noopener noreferrer"><img src={Asrao} width={"100%"} height={"80%"} /></a>
                                <Typography >Dynamic Webiste Builder  </Typography>
                            </div>

                        </Paper>

                    </Grid>

                    <Grid item sm={12} md={4} lg={4}>
                        <Paper style={{ padding: '30px', margin: '30px' }}>

                            <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                <a href='https://filecompressor.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={FileCompressor} width={"100%"} height={"80%"} /></a>
                                <Typography >Blogging App </Typography>
                            </div>

                        </Paper>

                    </Grid>

                    <Grid item sm={12} md={4} lg={4}>
                        <Paper style={{ padding: '30px', margin: '30px' }}>

                            <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                <a href='https://rajmaps.netlify.app/driver' target="_blank" rel="noopener noreferrer"><img src={Tracking} width={"100%"} height={"80%"} /></a>
                                <Typography >Tracking App </Typography>
                            </div>

                        </Paper>

                    </Grid>


                    <Grid item sm={12} md={4} lg={4}>
                        <Paper style={{ padding: '30px', margin: '30px' }}>

                            <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                <a href='https://gloom.co.in/' target="_blank" rel="noopener noreferrer"><img src={Gloom} width={"100%"} height={"80%"} /></a>
                                <Typography >Blogging App </Typography>
                            </div>

                        </Paper>

                    </Grid>



                </Grid>

            </ThemeProvider>
        </>
    )
}
