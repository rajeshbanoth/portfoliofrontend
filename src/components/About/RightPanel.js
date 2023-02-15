import { Avatar, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ReactImage from '../../assets/images/react.jpg'
import NodeJpg from '../../assets/images/node1.jpg'

import { FaNodeJs, FaReact } from 'react-icons/fa'

import { TbLayout2 } from 'react-icons/tb'
import { DiMysql } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { GrOracle } from 'react-icons/gr'
import AboutMe from './AboutMe'
import Services from './Services'
import Myprice from './Myprice'
import Clients from './Clients'
import Testimonials from './Testimonials'



export default function RightPanel(props) {


    return (
        <>


                <Grid container spacing={1} height={"100vh"} sx={{overflow:{
                    xs:"none",
                    md:'auto',
                    lg:"auto",
                    sm:'none'

                }}}>

                    <Grid item sm={12} md={12} lg={12} >
                        <AboutMe darkTheme={props.darkTheme} />

                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                       <Services darkTheme={props.darkTheme} />

                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                       <Myprice darkTheme={props.darkTheme} />

                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                       <Clients darkTheme={props.darkTheme} />

                    </Grid>
{/* 
                    <Grid item sm={12} md={12} lg={12}>
                       <Testimonials darkTheme={props.darkTheme} />

                    </Grid> */}

                </Grid>
          

        </>
    )
}
