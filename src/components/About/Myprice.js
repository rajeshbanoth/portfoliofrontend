import { Avatar, Button, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import { FaNodeJs, FaReact } from 'react-icons/fa'

import { AiFillFire } from 'react-icons/ai'
import { BiDiamond } from 'react-icons/bi'
import { StrikethroughS } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Myprice(props) {


    return (
        <>
            <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px' }}>
                    <Grid sx={{ padding: '10px' }}>
                        <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>Prices </Typography>
                        <Divider />


                        <Grid container spacing={2}>

                            <Grid item sm={12} md={6} lg={6} >
                                <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                    <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                        <AiFillFire size={70} style={{ color: 'orange' }} />
                                        <Typography variant='h6'>Popular</Typography>

                                        <div style={{ padding: '20px' }}>
                                            <Typography variant='h3' style={{ paddingTop: '8px', paddingRight: '30px', fontWeight: 'bold' }} ><sup style={{ fontSize: '20px', fontWeight: 'bold' }}>$</sup> 20 <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Project</span> </Typography>
                                            <Typography>
                                                1 landing page

                                            </Typography>
                                            <Typography>
                                                Responsive Design
                                            </Typography>
                                            <Typography>
                                                Source Code
                                            </Typography>
                                            <Typography   >
                                            <s>Design Customization</s>
                                        </Typography>
                                        <Typography>
                                           <s>Content Upload</s> 
                                        </Typography>
                                        </div>



                                        <Divider />

                                        <div style={{ padding: '20px' }}>

                                        </div>
                                        <Button color="primary" style={{
                                            textTransform: 'none',
                                            borderRadius: '20px',
                                           

                                        }}
                                            endIcon={<ArrowForwardIcon />}  >Order Now</Button>

                                    </div>
                                  

                                </div>

                            </Grid>


                            <Grid item sm={12} md={6} lg={6} >

                                <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>


                                <div style={{ textAlign: 'center', justifyContent: 'space-around' }} >
                                        <BiDiamond size={70} style={{ color: 'orange' }} />
                                        <Typography variant='h6'>Pro</Typography>

                                        <div style={{ padding: '20px' }}>
                                            <Typography variant='h3' style={{ paddingTop: '8px', paddingRight: '30px', fontWeight: 'bold' }} ><sup style={{ fontSize: '20px', fontWeight: 'bold' }}>$</sup> 60 <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Project</span> </Typography>
                                            <Typography>
                                                1 landing page

                                            </Typography>
                                            <Typography>
                                                Responsive Design
                                            </Typography>
                                            <Typography>
                                                Source Code
                                            </Typography>
                                            <Typography   >
                                           Design Customization
                                        </Typography>
                                        <Typography>
                                         Content Upload
                                        </Typography>
                                        </div>



                                        <Divider />

                                        <div style={{ padding: '20px' }}>

                                        </div>
                                        <Button color="primary" style={{
                                            textTransform: 'none',
                                            borderRadius: '20px',
                                           

                                        }}
                                            endIcon={<ArrowForwardIcon />}  >Order Now</Button>

                                    </div>
       



                                </div>


                            </Grid>







                        </Grid>


                    </Grid>
                </Paper>

            </ThemeProvider>

        </>
    )
}
