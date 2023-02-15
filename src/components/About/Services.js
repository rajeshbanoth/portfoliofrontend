import { Avatar, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ReactImage from '../../assets/images/react.jpg'
import NodeJpg from '../../assets/images/node1.jpg'

import { FaNodeJs, FaReact } from 'react-icons/fa'

import { TbLayout2 } from 'react-icons/tb'
import { DiMysql } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { GrOracle } from 'react-icons/gr'


export default function Services(props) {
    

    return (
        <>
                <ThemeProvider theme={props.darkTheme}>
                <CssBaseline />

                <Paper style={{ borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px' }}>
                            <Grid sx={{ padding: '10px' }}>
                                <Typography sx={{ padding: '10px', fontWeight: 'bold' }} variant='h5'>My Services </Typography>
                                <Divider />

                                <Grid container spacing={2}>
                                    <Grid item sm={12} md={6} lg={6} >
                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <FaReact size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>Front-End</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} > Modern and mobile ready website that will help you reach all of your marketing </Typography>

                                            </div>
                                            <div>
                                                <Divider orientation='vertical' />
                                            </div>


                                        </div>

                                    </Grid>


                                    <Grid item sm={12} md={6} lg={6} >

                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <FaNodeJs size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>Backend-End</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} > Backend with NoSQL,MySQL db written  in a Standard express router  </Typography>

                                            </div>
                                            <div>

                                            </div>


                                        </div>


                                    </Grid>




                                    <Grid item sm={12} md={6} lg={6} >
                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <TbLayout2 size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>UI/UX</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} > Modern user Interface trends with a highly professional and unique design. </Typography>

                                            </div>
                                            <div>
                                                <Divider orientation='vertical' />
                                            </div>


                                        </div>

                                    </Grid>


                                    <Grid item sm={12} md={6} lg={6} >

                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <DiMysql size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>MySQL</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} >Good experience  using mysql  </Typography>

                                            </div>
                                            <div>

                                            </div>


                                        </div>


                                    </Grid>


                                    <Grid item sm={12} md={6} lg={6} >
                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <SiMongodb  size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>Mongo DB</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} >Good Command on NoSql Database  using Mongodb  </Typography>

                                            </div>
                                            <div>
                                                <Divider orientation='vertical' />
                                            </div>


                                        </div>

                                    </Grid>


                                    <Grid item sm={12} md={6} lg={6} >

                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>

                                            <div >
                                                <GrOracle size={70} style={{ color: 'orange' }} />
                                                <Typography sx={{fontWeight:'bold'}}>Oracle db</Typography>
                                                <Typography style={{ paddingTop: '8px', paddingRight: '30px' }} >Majority of the Projects that i have delt  is  using Oracle DB </Typography>

                                            </div>
                                            <div>

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
